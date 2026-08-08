export default function RecordsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-6 p-8">
      {/* page-has-heading-one: this page has no h1 anywhere */}
      <h1 className="text-xl font-semibold">Team records</h1>

      {/* p-as-heading: a bold, large paragraph used to fake a heading instead of a real heading tag */}
      <p className="text-lg font-bold">Quarterly summary</p>
      <p>Overview text that should have followed a real heading element.</p>

      {/* empty-heading: a heading with no text content */}
      <h2 className="text-base font-semibold">Detailed metrics</h2>

      {/* definition-list: a dl whose direct children are not dt/dd */}
      <dl className="space-y-1">
        <dt className="font-semibold">Accessibility</dt>
        <dd>Designing for everyone.</dd>
      </dl>

      {/* dlitem: a dt/dd pair rendered outside of any dl container */}
      <dl className="space-y-1">
        <dt className="font-semibold">Owner</dt>
        <dd>Accessibility team</dd>
      </dl>

      {/* list: a ul with a non-li child element */}
      <ul className="list-disc pl-5">
        <li>Weekly report</li>
        <li>Not a list item</li>
      </ul>

      {/* listitem: an li rendered outside of any ul/ol container */}
      <ul className="list-disc pl-5">
        <li>Orphaned list item</li>
      </ul>
    </main>
  );
}
