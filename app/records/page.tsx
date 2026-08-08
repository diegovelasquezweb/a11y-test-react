export default function RecordsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-8">
      {/* page-has-heading-one: this page has no h1 anywhere */}
      <h2 className="text-xl font-semibold">Team records</h2>

      {/* p-as-heading: a bold, large paragraph used to fake a heading instead of a real heading tag */}
      <p className="text-lg font-bold">Quarterly summary</p>
      <p>Overview text that should have followed a real heading element.</p>

      {/* empty-heading: a heading with no text content */}
      <h3 className="text-base font-semibold"></h3>

      {/* definition-list: a dl whose direct children are not dt/dd */}
      <dl className="space-y-1">
        <p>Term: Accessibility</p>
        <p>Definition: Designing for everyone.</p>
      </dl>

      {/* dlitem: a dt/dd pair rendered outside of any dl container */}
      <div className="space-y-1">
        <dt className="font-semibold">Owner</dt>
        <dd>Accessibility team</dd>
      </div>

      {/* list: a ul with a non-li child element */}
      <ul className="list-disc pl-5">
        <li>Weekly report</li>
        <div>Not a list item</div>
      </ul>

      {/* listitem: an li rendered outside of any ul/ol container */}
      <div>
        <li>Orphaned list item</li>
      </div>
    </main>
  );
}
