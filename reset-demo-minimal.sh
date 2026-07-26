#!/usr/bin/env bash
set -e

# Minimal demo: 1 DOM error + 1 PAT error
# Convención para futuros scripts:
#   reset-demo-dom-only.sh    — solo errores detectables por DOM (axe/pa11y)
#   reset-demo-pat-only.sh    — solo code patterns (PAT-*)
#   reset-demo-3-fails.sh     — 3 errores mezclados
#   reset-demo-N-fails.sh     — N errores configurables

REPO="diegovelasquezweb/a11y-test-react"
BRANCH="feat/minimal-demo"

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
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">This is the minimal a11y test page.</p>

      {/* DOM error: missing alt on image (detected by axe-core) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero.png" className="mb-4" />

      {/* PAT error: input with placeholder, no label (detected by source analysis) */}
      <input type="text" placeholder="Your name" className="border rounded p-2" />
    </div>
  );
}
TSX

echo "→ Committing..."
git add app/page.tsx
git commit -m "feat: minimal demo — 1 DOM + 1 PAT error"

echo "→ Pushing..."
git push origin "$BRANCH"

echo "→ Creating fresh Issue..."
ISSUE_URL=$(gh issue create \
	--repo "$REPO" \
	--title "a11y minimal" \
	--body "Accessibility audit with 1 DOM error and 1 PAT error." \
	2>/dev/null)
echo "  created: $ISSUE_URL"

echo ""
echo "✓ Done. Create your PR at:"
echo "  https://github.com/$REPO/compare/$BRANCH"
