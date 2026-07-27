#!/usr/bin/env bash
set -e

# PAT-only demo: 22 code pattern (PAT-*) findings, no DOM-only errors.
# Covers every rule in a11y-engine/assets/remediation/code-patterns.mjs.
# Run with: /a11y-audit source

REPO="diegovelasquezweb/a11y-test-react"
BRANCH="feat/pat-only-demo"

cd "$(dirname "$0")"

echo "→ Closing open PRs..."
gh pr list --repo "$REPO" --state open --json number --jq '.[].number' | while read n; do
	gh pr close "$n" --repo "$REPO" 2>/dev/null && echo "  closed #$n"
done

echo "→ Closing open Issues..."
gh issue list --repo "$REPO" --state open --json number --jq '.[].number' | while read n; do
	gh issue close "$n" --repo "$REPO" 2>/dev/null && echo "  closed issue #$n"
done

echo "→ Deleting remote branches (except master)..."
git fetch --prune 2>/dev/null
git branch -r | grep "origin/" | grep -v "origin/master\|origin/HEAD" | sed 's|origin/||' | while read b; do
	git push origin --delete "$b" 2>/dev/null && echo "  deleted remote: $b"
done

echo "→ Switching to master..."
git checkout master
git pull origin master

echo "→ Checking for stale demo commits in master..."
STALE=$(git log master --no-merges --format="%H|%s" | awk -F'|' '$2=="feat: update components"{print $1; exit}')
if [ -n "$STALE" ] && git diff --quiet "$STALE" master -- app/; then
	echo "  found stale demo state ($STALE), reverting..."
	git revert --no-edit "$STALE"
	git push origin master
fi

echo "→ Deleting local branches (except master)..."
git branch | grep -v "master" | while read b; do
	git branch -D "$b" 2>/dev/null && echo "  deleted local: $b"
done

echo "→ Creating fresh branch..."
git checkout -b "$BRANCH"

echo "→ Writing page..."

cat >app/page.tsx <<'TSX'
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function goToServices() {
    router.push("/services");
  }

  function handleLockOrientation() {
    screen.orientation.lock("portrait").catch(() => {});
  }

  function handleHover() {
    console.log("hover");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">PAT-only test page for recently added code pattern rules.</p>

      <label className="block mb-1">Full name</label>

      <img src="/hero.png" className="mb-4" />

      <input type="text" placeholder="Your name" className="border rounded p-2 mb-4" />

      <input type="email" placeholder="Your email" className="border rounded p-2 mb-4" />

      <input onPaste={(e) => e.preventDefault()} className="border rounded p-2 mb-4" />

      <div onMouseOver={handleHover} className="inline-block p-2 bg-gray-200 mb-4">
        Hover for info
      </div>

      <button accessKey="s" type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      <div onClick={goToServices} className="mb-4 cursor-pointer p-2 bg-gray-200">Go to services</div>

      <button className="mb-4 p-2 bg-gray-300"><svg className="w-4 h-4" viewBox="0 0 24 24" /></button>

      <a href="https://www.w3.org/WAI/" target="_blank" className="mb-4 block">W3C WAI website</a>

      <div className="toast mb-4">Message sent!</div>

      <button type="button" onClick={handleLockOrientation} className="mb-4 p-2 bg-gray-300">
        Lock orientation
      </button>
    </div>
  );
}
TSX

echo "→ Writing layout (viewport override for zoom-disabled)..."

cat >app/layout.tsx <<'TSX'
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "A11y Test React",
  description: "Demo site with intentional accessibility errors",
};

export const viewport = { userScalable: false };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" aria-label="Skip to main content">Skip to main content</a>
        <nav aria-label="Primary" className="flex gap-4 p-4 bg-gray-100">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main id="main" className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
TSX

echo "→ Appending style patterns to globals.css..."

cat >>app/globals.css <<'CSS'

.demo-btn {
  outline: none;
}

.legacy-focus:focus {
  outline: 2px solid blue;
}

.card-hover {
  transition: all 0.3s ease;
}

@keyframes spin-demo {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.demo-slide-in {
  transition: left 0.3s ease;
}
CSS

echo "→ Committing..."
git add app/page.tsx app/layout.tsx app/globals.css
git commit -m "feat: pat-only demo — 22 code pattern findings"

echo "→ Pushing..."
git push origin "$BRANCH"

echo "→ Creating fresh Issue..."
ISSUE_URL=$(gh issue create \
	--repo "$REPO" \
	--title "a11y pat-only" \
	--body "Accessibility audit covering only source code pattern (PAT-*) findings — 22 rules total, matching every entry in a11y-engine's code-patterns.mjs. Run \`/a11y-audit source\` to test the recently added/updated patterns without DOM-only noise." \
	2>/dev/null)
echo "  created: $ISSUE_URL"

echo ""
echo "✓ Done. Create your PR at:"
echo "  https://github.com/$REPO/compare/$BRANCH"
