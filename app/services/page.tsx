export default function Services() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-4">We offer accessibility audits, remediation, and training.</p>

      {/* aria-hidden link */}
      <a href="/info" className="mb-4 block">More info</a>

      {/* Button with no accessible text */}
      <button type="button" className="mb-4 p-2 bg-gray-300" aria-label="Close">
        <span aria-hidden={true}>×</span>
      </button>

      {/* Duplicate IDs */}
      <section id="info-primary" className="mb-4"><p>Section one</p></section>
      <section id="info-secondary" className="mb-4"><p>Section two</p></section>
    </div>
  );
}
