"use client";

export default function Services() {
  function showTooltip(el: HTMLElement) {
    el.setAttribute("title", "More information about this service");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-4">We offer accessibility audits, remediation, and training.</p>

      {/* Hover-only handler, no keyboard equivalent */}
      <div
        onMouseOver={(e) => showTooltip(e.currentTarget)}
        className="inline-block p-2 bg-gray-200 mb-4"
      >
        Hover for info
      </div>

      {/* accesskey shortcut */}
      <button accessKey="s" type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      {/* aria-hidden link */}
      <a href="/info" aria-hidden={true} className="mb-4 block">More info</a>

      {/* Button with no accessible text */}
      <button type="button" className="mb-4 p-2 bg-gray-300" aria-label="Close">
        <span aria-hidden={true}>×</span>
      </button>

      {/* Duplicate IDs */}
      <section id="info" className="mb-4"><p>Section one</p></section>
      <section id="info" className="mb-4"><p>Section two</p></section>
    </div>
  );
}
