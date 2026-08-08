export default function Home() {
  return (
    <>
      {/* landmark-banner-is-top-level: header nested inside a plain div, not a direct child of body */}
      <div className="border-b p-4">
        <header className="flex items-center justify-between">
          <span className="font-bold">A11y Structure Demo</span>
        </header>
      </div>

      {/* landmark-one-main / landmark-no-duplicate-main / landmark-unique: two main landmarks on the same page */}
      <main id="main-content" className="mx-auto max-w-3xl space-y-6 p-8">
        <h1 className="text-2xl font-bold">Structure &amp; Semantics Demo</h1>

        {/* heading-order: jumps from h1 straight to h4, skipping h2 and h3 */}
        <h2 className="text-base font-semibold">Recent updates</h2>
        <p>This section skips two heading levels.</p>

        {/* duplicate-id: two elements sharing the same id attribute */}
        <button id="cta-primary" className="rounded bg-blue-600 px-4 py-2 text-white">
          Get started
        </button>
        <button id="cta-secondary" className="rounded bg-blue-600 px-4 py-2 text-white">
          Learn more
        </button>
      </main>

      {/* landmark-main-is-top-level: a second main landmark nested inside a div, not a direct child of body */}
      <div className="p-8">
        <main className="rounded border p-4">
          <p>Duplicate, nested main landmark.</p>
        </main>
      </div>

      {/* region: content that lives directly under the page root, outside any landmark */}
      <p className="p-4 text-sm text-gray-500">
        Loose paragraph rendered outside any landmark region.
      </p>
    </>
  );
}
