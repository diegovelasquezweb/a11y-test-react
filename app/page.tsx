export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">This is the home page of the a11y test site.</p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero.png" alt="Team working on accessibility" className="mb-4" />

      {/* Missing alt on decorative image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/decorative-banner.png" className="mb-4" />

      {/* Low contrast text */}
      <p className="text-[#ccc] mb-4">This text has insufficient color contrast.</p>

      {/* Skipped heading level */}
      <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
      <p className="mb-4">We build accessible experiences for everyone.</p>

      {/* Empty link */}
      <a href="/more">Learn more about our services</a>

      {/* Invalid lang */}
      <p lang="xx" className="mb-4">Some content in an unrecognized language.</p>
    </div>
  );
}
