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

  function handleHoverEnd() {
    console.log("hover end");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PAT Demo</h1>
      <p className="mb-4">PAT-only test page for source code pattern rules.</p>

      <label htmlFor="fullname" className="block mb-1">Full name</label>
      <input type="text" id="fullname" className="border rounded p-2 mb-4" />

      <img src="/hero.png" alt="Team collaborating on accessibility work" width={1200} height={630} className="mb-4" />

      <label htmlFor="name" className="block mb-1">Your name</label>
      <input type="text" id="name" placeholder="Your name" className="border rounded p-2 mb-4" />

      <label id="email-label" htmlFor="email" className="block mb-1">Your email</label>
      <input type="email" id="email" placeholder="Your email" className="border rounded p-2 mb-4" aria-labelledby="email-label" autoComplete="email" spellCheck={false} />

      <label htmlFor="nopaste" className="block mb-1">No paste field</label>
      <input id="nopaste" className="border rounded p-2 mb-4" />

      <button onMouseOver={handleHover} onFocus={handleHover} onBlur={handleHoverEnd} className="inline-block p-2 bg-gray-200 mb-4" type="button">
        Hover for info
      </button>

      <button type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      <button onClick={goToServices} className="mb-4 cursor-pointer p-2 bg-gray-200">Go to services</button>

      <button aria-label="Menu" className="mb-4 p-2 bg-gray-300"><svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" /></button>

      <button aria-label="Close" className="mb-4 p-2 bg-gray-300"><svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" /></button>

      <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" aria-label="W3C WAI website (opens in new tab)" className="mb-4 block">W3C WAI website</a>

      <div className="toast mb-4" role="status" aria-live="polite">Message sent!</div>


    </div>
  );
}
