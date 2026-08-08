export default function Services() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-4">We offer accessibility audits, remediation, and training.</p>

      {/* Link is focusable and has visible text, so it must not be aria-hidden */}
      <a href="/info" className="mb-4 block">More info</a>

      {/* Button now has an accessible name */}
      <button type="button" aria-label="Close" className="mb-4 p-2 bg-gray-300">
        <span aria-hidden={true}>×</span>
      </button>

      {/* Unique IDs */}
      <section id="info-one" className="mb-4"><p>Section one</p></section>
      <section id="info-two" className="mb-4"><p>Section two</p></section>
    </div>
  );
}
