export default function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">Perceptible Content Demo</h1>

      {/* server-side-image-map: <img ismap> must be wrapped in an <a href>
          per the HTML spec — server-side image maps remain inherently
          inaccessible to keyboard/screen reader users regardless */}
      <a href="/services" aria-label="View our services">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://placehold.co/200x100" {...{ ismap: true }} useMap="#demo-map" alt="" width={200} height={100} />
      </a>
      <map name="demo-map">
        {/* area-alt: <area> with no alt attribute */}
        <area href="/services" shape="rect" coords="0,0,50,50" alt="Services" />
      </map>

      {/* image-alt: <img> with no alt attribute at all */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://placehold.co/150x100" className="block" alt="Placeholder image" width={150} height={100} />

      {/* image-redundant-alt: alt text duplicates the visible button text */}
      <button type="button" className="flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://placehold.co/16x16" alt="" width={16} height={16} />
        Save
      </button>

      {/* input-image-alt: <input type="image"> with no alt attribute */}
      <input type="image" src="https://placehold.co/40x40" alt="Submit" />

      {/* object-alt: <object> with no alt, aria-label, or title */}
      <object data="https://example.com/doc.pdf" width="300" height="200" aria-label="PDF document"></object>

      {/* role-img-alt: role="img" with no aria-label or aria-labelledby */}
      <div role="img" className="h-16 w-16 bg-slate-300" aria-label="Decorative colored square" />

      {/* svg-img-alt: <svg role="img"> with no <title> or aria-label */}
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8">
        <circle cx="12" cy="12" r="10" />
      </svg>

      {/* avoid-inline-spacing: letter-spacing/line-height forced inline with
          !important so users cannot override them with custom stylesheets */}
      <p className="spaced-text">
        Text with spacing forced inline that users cannot override.
      </p>

      {/* blink: obsolete <blink> element removed */}

      {/* marquee: obsolete <marquee> element removed */}

      {/* color-contrast: light gray text on a white background */}
      <p className="text-\[\#595959\] bg-white">This text has insufficient color contrast.</p>

      {/* link-in-text-block: link with no underline, same color as the
          surrounding paragraph text — indistinguishable without color alone */}
      <p className="text-gray-800">
        This paragraph contains{" "}
        <a href="/contact" className="text-gray-800 underline hover:text-blue-600 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600">an inline link with no visual differentiation</a>{" "}
        besides its position in the text.
      </p>
    </div>
  );
}
