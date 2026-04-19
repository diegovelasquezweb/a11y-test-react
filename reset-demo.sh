#!/usr/bin/env bash
set -e

REPO="diegovelasquezweb/a11y-test-react"
BRANCH="feat/update-components"

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

echo "→ Deleting local branches (except master)..."
git branch | grep -v "master" | while read b; do
  git branch -D "$b" 2>/dev/null && echo "  deleted local: $b"
done

echo "→ Creating fresh branch..."
git checkout -b "$BRANCH"

echo "→ Writing pages..."

cat > app/page.tsx << 'TSX'
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">This is the home page of the a11y test site.</p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero.png" alt="Team working on accessibility" className="mb-4" />

      {/* Missing alt on decorative image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/decorative-banner.png" className="mb-4" />

      {/* Low contrast text */}
      <p className="text-[#ccc] mb-4">This text has insufficient color contrast.</p>

      {/* Skipped heading level */}
      <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
      <p className="mb-4">We build accessible experiences for everyone.</p>

      {/* Empty link */}
      <a href="/more"></a>

      {/* Invalid lang */}
      <p lang="xx" className="mb-4">Some content in an unrecognized language.</p>
    </div>
  );
}
TSX

cat > app/about/page.tsx << 'TSX'
export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Founded in 2020, we are a team of engineers and designers passionate about the open web.</p>

      {/* Link opens in new tab without warning */}
      <p className="mb-4">
        Read more on the{" "}
        <a href="https://www.w3.org/WAI/" target="_blank">W3C WAI website</a>.
      </p>

      {/* div as button — no keyboard support */}
      <div role="button" className="mb-4 cursor-pointer p-2 bg-gray-200">Click me</div>

      {/* iframe without title */}
      <iframe src="https://example.com" width="300" height="200" className="mb-4"></iframe>

      {/* table without headers */}
      <table className="mb-4">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Role</td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>Engineer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
TSX

cat > app/services/page.tsx << 'TSX'
"use client";

export default function Services() {
  function showTooltip(el: HTMLElement) {
    el.setAttribute("title", "More information about this service");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-4">We offer accessibility audits, remediation, and training.</p>

      {/* Hover-only handler, no keyboard equivalent */}
      <div
        onMouseOver={(e) => showTooltip(e.currentTarget)}
        className="inline-block p-2 bg-gray-200 mb-4"
      >
        Hover for info
      </div>

      {/* accesskey shortcut */}
      <button accessKey="s" type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      {/* aria-hidden link */}
      <a href="/info" aria-hidden={true} className="mb-4 block">More info</a>

      {/* Button with no accessible text */}
      <button type="button" className="mb-4 p-2 bg-gray-300">
        <span aria-hidden={true}>×</span>
      </button>

      {/* Duplicate IDs */}
      <section id="info" className="mb-4"><p>Section one</p></section>
      <section id="info" className="mb-4"><p>Section two</p></section>
    </div>
  );
}
TSX

cat > app/contact/page.tsx << 'TSX'
"use client";

export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      {/* Empty heading */}
      <h2 className="mb-4"></h2>

      <ul className="mb-4">
        <li>Phone: 555-0100</li>
        <li>Email: hello@example.com</li>
      </ul>

      <form className="flex flex-col gap-3 max-w-md">
        {/* Select without label */}
        <select className="border rounded p-2">
          <option value="">Choose a topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>

        {/* Inputs with placeholder only, no label */}
        <input type="text" placeholder="Your name" className="border rounded p-2" />
        <input type="email" placeholder="Your email" className="border rounded p-2" />
        <textarea placeholder="Your message" className="border rounded p-2" />
        <button type="submit" className="bg-blue-600 text-white rounded p-2">Send</button>
      </form>
    </div>
  );
}
TSX

echo "→ Committing..."
git add app/page.tsx app/about/page.tsx app/services/page.tsx app/contact/page.tsx
git commit -m "feat: update components"

echo "→ Pushing..."
git push origin "$BRANCH"

echo "→ Creating fresh Issue..."
ISSUE_URL=$(gh issue create \
  --repo "$REPO" \
  --title "a11y main" \
  --body "Accessibility audit for the main branch." \
  2>/dev/null)
echo "  created: $ISSUE_URL"

echo ""
echo "✓ Done. Create your PR at:"
echo "  https://github.com/$REPO/compare/$BRANCH"
