export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Founded in 2020, we are a team of engineers and designers passionate about the open web.</p>

      {/* Link opens in new tab without warning */}
      <p className="mb-4">
        Read more on the{" "}
        <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">W3C WAI website <span className="sr-only">(opens in new tab)</span></a>.
      </p>

      {/* div as button — no keyboard support */}
      <button type="button" className="mb-4 cursor-pointer p-2 bg-gray-200">Click me</button>

      {/* iframe without title */}
      <iframe src="https://example.com" width="300" height="200" className="mb-4" title="Example website embed"></iframe>

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
