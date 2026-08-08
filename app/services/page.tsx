export default function Services() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-4">We offer accessibility audits, remediation, and training.</p>

      {/* Visible link */}
      <a href="/info" className="mb-4 block">More info</a>

      {/* Button with accessible text */}
      <button type="button" aria-label="Close" className="mb-4 p-2 bg-gray-300">
        <span aria-hidden={true}>×</span>
      </button>

      {/* Unique IDs */}
      <section id="info-services" className="mb-4"><p>Section one</p></section>
      <section id="info-details" className="mb-4"><p>Section two</p></section>
    </div>
  );
}
