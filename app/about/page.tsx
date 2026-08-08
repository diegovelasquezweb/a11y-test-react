export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Founded in 2020, we are a team of engineers and designers passionate about the open web.</p>

      {/* div as button — no keyboard support */}
      <div role="button" className="mb-4 cursor-pointer p-2 bg-gray-200">Click me</div>

      {/* iframe without title */}
      <iframe title="Embedded example.com content" src="https://example.com" width="300" height="200" className="mb-4"></iframe>

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
