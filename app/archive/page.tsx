export default function ArchivePage() {
  return (
    <>
      {/* cdp-missing-main-landmark: this page has no main landmark anywhere */}
      <h1 className="p-4 text-2xl font-bold">Archive</h1>

      {/* landmark-no-duplicate-banner: two banner landmarks on the same page */}
      <header className="p-4">Primary header</header>
      <header className="p-4">Secondary header</header>

      {/* landmark-complementary-is-top-level: aside nested inside a div, not a direct child of body */}
      <div className="p-4">
        <aside className="rounded border p-4">
          <p>Related links.</p>
        </aside>
      </div>

      {/* landmark-no-duplicate-contentinfo / landmark-contentinfo-is-top-level: two footers, one nested */}
      <footer className="p-4">Primary footer</footer>
      <div className="p-4">
        <footer className="rounded border p-4">Secondary, nested footer</footer>
      </div>

      {/* duplicate-id-aria: two elements share an id that is referenced by aria-labelledby */}
      <h2 id="archive-title" className="p-4 text-lg font-semibold">Archived items</h2>
      <h2 id="archive-title" className="p-4 text-lg font-semibold">Older items</h2>
      <section aria-labelledby="archive-title" className="p-4">
        <p>Section labelled by a duplicated id.</p>
      </section>

      {/* hidden-content: meaningful content hidden via inline style, flagged for manual review */}
      <p style={{ visibility: "hidden" }} className="p-4">
        This paragraph is hidden but still present in the DOM.
      </p>
    </>
  );
}
