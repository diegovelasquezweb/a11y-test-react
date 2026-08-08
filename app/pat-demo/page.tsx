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

      <label htmlFor="pat-full-name" className="block mb-1">Full name</label>

      <img src="/hero.png" alt="Team working on accessibility" width={1200} height={630} className="mb-4" />

      <input id="pat-full-name" type="text" className="border rounded p-2 mb-4" />

      <label htmlFor="pat-name" className="block mb-1">Your name</label>
      <input id="pat-name" type="text" placeholder="Enter your name" className="border rounded p-2 mb-4" />

      <label htmlFor="pat-email" className="block mb-1">Your email</label>
      <input id="pat-email" type="email" name="email" autoComplete="email" spellCheck={false} placeholder="you@example.com" className="border rounded p-2 mb-4" />

      <label htmlFor="pat-paste" className="block mb-1">Confirm email</label>
      <input id="pat-paste" className="border rounded p-2 mb-4" />

      <div onMouseOver={handleHover} onFocus={handleHover} onBlur={handleHover} tabIndex={0} className="inline-block p-2 bg-gray-200 mb-4">
        Hover for info
      </div>

      <button type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      <button type="button" onClick={goToServices} className="mb-4 cursor-pointer p-2 bg-gray-200">Go to services</button>

      <button aria-label="Search" className="mb-4 p-2 bg-gray-300"><svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" /></button>

      <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="mb-4 block">W3C WAI website (opens in a new tab)</a>

      <div className="toast mb-4" role="status" aria-live="polite">Message sent!</div>
    </div>
  );
}
