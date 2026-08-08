export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">This is the home page of the a11y test site.</p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero.png" alt="Team working on accessibility" width={1200} height={630} className="mb-4" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/decorative-banner.png" alt="" width={1200} height={300} className="mb-4" />

      {/* Low contrast text */}
      <p className="text-[#ccc] mb-4">This text has insufficient color contrast.</p>

      {/* Corrected heading level */}
      <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">We build accessible experiences for everyone.</p>

      <a href="/more">Read more about our mission</a>

      <p lang="es" className="mb-4">Some content in an unrecognized language.</p>
    </div>
  );
}
