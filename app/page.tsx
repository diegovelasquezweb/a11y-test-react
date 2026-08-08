export default function Home() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold">ARIA Findings Demo</h1>

      {/* aria-allowed-attr: aria-expanded no está permitido en role="img" */}
      <img
        src="https://placehold.co/200x120"
        alt="Sample photo"
        width={200}
        height={120}
        className="rounded"
      />

      {/* aria-allowed-role: role="button" no está permitido en <footer> */}
      <footer role="button" className="rounded bg-slate-100 p-4">
        Site footer
      </footer>

      {/* aria-braille-equivalent: aria-braillelabel sin un aria-label equivalente */}
      <button aria-braillelabel="⠃⠗⠁⠊⠇⠇⠑" className="rounded bg-blue-600 px-4 py-2 text-white">
        Braille
      </button>

      {/* aria-command-name: role="button" sin nombre accesible */}
      <span role="button" tabIndex={0} className="inline-block cursor-pointer rounded bg-slate-200 px-3 py-1" aria-label="Action button"></span>

      {/* aria-conditional-attr: aria-checked="mixed" no está permitido en role radio */}
      <label htmlFor="radio-opt" className="inline-flex items-center gap-2">
        <input id="radio-opt" type="radio" name="opt" />
        <span>Option</span>
      </label>

      {/* aria-deprecated-role: role="directory" está deprecado en ARIA */}
      <div className="rounded border p-2">
        Legacy directory listing
      </div>

      {/* aria-dialog-name: role="dialog" sin nombre accesible */}
      <div role="dialog" className="rounded border p-4">
        <p>Dialog content without a label.</p>
      </div>

      {/* aria-hidden-focus: elemento enfocable dentro de un contenedor aria-hidden="true" */}
      <div aria-hidden="true" className="rounded border p-2">
        <button className="rounded bg-slate-200 px-3 py-1">Hidden but focusable</button>
      </div>

      {/* aria-input-field-name: campo de texto sin nombre accesible */}
      <label htmlFor="text-input" className="block text-sm font-medium">Text input</label>
      <input id="text-input" type="text" className="rounded border px-2 py-1" />

      {/* aria-meter-name: role="meter" sin nombre accesible */}
      <div
        role="meter"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Memory usage"
        className="h-3 w-full rounded bg-slate-200"
      ></div>

      {/* aria-progressbar-name: role="progressbar" sin nombre accesible */}
      <div
        role="progressbar"
        aria-valuenow={30}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Download progress"
        className="h-3 w-full rounded bg-slate-200"
      ></div>

      {/* aria-prohibited-attr: aria-label prohibido en <caption> */}
      <table className="w-full border">
        <caption aria-label="Sales data">Sales</caption>
        <tbody>
          <tr>
            <td>Q1</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      {/* presentation-role-conflict: role="presentation" junto a aria-label global */}
      <div role="presentation" aria-label="Decorative but still named" className="rounded border p-2">
        Decorative content
      </div>
    </main>
  );
}
