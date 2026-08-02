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
      <input id="fullname" type="text" className="border rounded p-2 mb-4" />

      <img src="/hero.png" alt="Hero banner" width={1200} height={630} className="mb-4" />

      <label htmlFor="yourname" className="sr-only">Your name</label>
      <input id="yourname" type="text" placeholder="Your name" className="border rounded p-2 mb-4" />

      <label htmlFor="youremail" className="sr-only">Your email</label>
      <input id="youremail" type="email" placeholder="Your email" className="border rounded p-2 mb-4" aria-labelledby="youremail-label" autoComplete="email" spellCheck={false} />

      <label htmlFor="nopaste" className="block mb-1">No paste field</label>
      <input id="nopaste" className="border rounded p-2 mb-4" />

      <div onMouseOver={handleHover} onFocus={handleHover} onBlur={() => console.log("blur")} className="inline-block p-2 bg-gray-200 mb-4" tabIndex={0}>
        Hover for info
      </div>

      <button type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      <button onClick={goToServices} className="mb-4 cursor-pointer p-2 bg-gray-200">Go to services</button>

      <button aria-label="Close" className="mb-4 p-2 bg-gray-300"><svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" role="presentation" /></button>

      <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" aria-label="W3C WAI website (opens in new tab)" className="mb-4 block">W3C WAI website</a>

      <div className="toast mb-4" role="status" aria-live="polite">Message sent!</div>


    </div>
  );
}
