"use client";

import { useRouter } from "next/navigation";

export default function PatDemoPage() {
  const router = useRouter();

  function goToServices() {
    router.push("/services");
    document.title = "Services — PAT Demo";
  }



  function handleHover() {
    console.log("hover");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PAT Demo</h1>
      <p className="mb-4">PAT-only test page for source code pattern rules.</p>

      <label htmlFor="fullname" className="block mb-1">Full name</label>

      <img src="/hero.png" alt="Team working on accessibility" width={1200} height={630} className="mb-4" />

      <input type="text" className="border rounded p-2 mb-4" id="fullname" />

      <label htmlFor="name" className="sr-only">Your name</label>
      <input type="text" placeholder="Your name" className="border rounded p-2 mb-4" id="name" />

      <label htmlFor="email" className="sr-only">Your email</label>
      <input type="email" placeholder="Your email" className="border rounded p-2 mb-4" id="email" autoComplete="email" spellCheck={false} />

      <label htmlFor="nosecret" className="sr-only">Secret input</label>
      <input className="border rounded p-2 mb-4" id="nosecret" />

      <div onMouseOver={handleHover} onFocus={handleHover} onBlur={() => console.log('blur')} tabIndex={0} className="inline-block p-2 bg-gray-200 mb-4">
        Hover for info
      </div>

      <button type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      <button onClick={goToServices} className="mb-4 cursor-pointer p-2 bg-gray-200">Go to services</button>

      <button className="mb-4 p-2 bg-gray-300" aria-label="Close menu"><svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" role="img" /></button>

      <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" aria-label="W3C WAI website (opens in new tab)" className="mb-4 block">W3C WAI website</a>

      <div className="toast mb-4" role="status" aria-live="polite">Message sent!</div>


    </div>
  );
}
