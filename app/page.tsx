import type { Metadata } from "next";

// document-title: an empty title on this route overrides the layout's
// default <title>, leaving the document without a descriptive title.
export const metadata: Metadata = {
  title: "Keyboard & Interaction Demo — A11y Test",
};

export default function Home() {
  return (
    <main className="p-8 space-y-10">
      <h1 className="text-2xl font-bold">Keyboard &amp; Interaction Demo</h1>

      {/* accesskeys: two controls share the same accessKey value ("s"),
          which is ambiguous for keyboard users relying on access keys. */}
      <section className="space-x-4">
        <button className="border px-3 py-1">
          Save draft
        </button>
        <button className="border px-3 py-1">
          Submit form
        </button>
      </section>

      {/* bypass / skip-link / cdp-missing-skip-link: approximation note.
          The shared root layout (written by write_demo_layout) already
          renders a working skip-link, so these three rules cannot be
          reliably failed page-wide without touching that shared file. This
          decoy link mimics the broken pattern (visible skip control whose
          target does not exist, so focus never lands on real content) for
          documentation/coverage purposes; automated tools may still pass
          bypass/skip-link because of the layout's valid mechanism. */}
      <section>
        <a href="#nowhere" className="underline text-blue-700">
          Skip to content
        </a>
      </section>

      {/* css-orientation-lock: CSS forces a fixed visual orientation via a
          rotation transform tied to an orientation media query, which traps
          users whose device/viewport is locked to the other orientation. */}
      <style>{`
        @media (orientation: landscape) {
          .orientation-lock-demo {
            transform: rotate(-90deg);
          }
        }
      `}</style>
      <section className="orientation-lock-demo border p-4">
        <p>This block rotates itself when the viewport is landscape.</p>
      </section>

      {/* focus-order-semantics: a focusable element (tabIndex=0) whose only
          content is a heading has no interactive purpose or matching role,
          so its place in the keyboard focus order is not semantically
          justified. */}
      <div tabIndex={0} className="border p-4">
        <h2 className="text-lg font-bold">Section heading</h2>
      </div>

      {/* nested-interactive: a link nested inside a button creates two
          interactive elements collapsed into one focus stop, which breaks
          keyboard and assistive-tech expectations. */}
      <div className="border px-3 py-1 inline-block">
        <a href="/settings">Click this link</a>
      </div>

      {/* scrollable-region-focusable: an overflow container with content
          that overflows its bounds but no tabIndex, so keyboard users
          cannot scroll it via focus + arrow keys. */}
      <div className="h-24 overflow-auto border p-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* tabindex: a positive tabindex forces this element ahead of the
          natural DOM order in the keyboard focus sequence. */}
      <div tabIndex={3} className="border p-2">
        Positive tabindex element
      </div>

      {/* target-size: two adjacent controls smaller than the minimum
          target size with no spacing between them. */}
      <div className="flex gap-0">
        <button aria-label="Like" className="w-4 h-4 bg-blue-600" />
        <button aria-label="Share" className="w-4 h-4 bg-blue-600 -ml-1" />
      </div>

      {/* button-name: an icon-only button with no text content and no
          accessible name (no aria-label, no aria-labelledby). */}
      <button className="p-2" aria-label="Help">
        <svg width="16" height="16" aria-hidden="true">
          <circle cx="8" cy="8" r="8" />
        </svg>
      </button>

      {/* identical-links-same-purpose: two links share the exact same
          visible text ("Learn more") but point to different destinations,
          leaving their purpose ambiguous out of context. */}
      <div className="flex flex-col gap-2">
        <a href="/products/widget-a" className="underline text-blue-700">
          Learn more
        </a>
        <a href="/products/widget-b" className="underline text-blue-700">
          Learn more
        </a>
      </div>

      {/* link-name: an icon-only link with no text content and no
          accessible name. */}
      <a href="/settings" aria-label="Settings">
        <svg width="16" height="16" role="img" aria-label="Settings">
          <rect width="16" height="16" />
        </svg>
      </a>

      {/* summary-name: a <details>/<summary> disclosure widget whose
          <summary> has no accessible name. */}
      <details>
        <summary>Additional information</summary>
        <p>Hidden content revealed on toggle.</p>
      </details>
    </main>
  );
}
