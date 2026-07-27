"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function goToServices() {
    router.push("/services");
  }

  function handleLockOrientation() {
    screen.orientation.lock("portrait").catch(() => {});
  }

  function handleHover() {
    console.log("hover");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">PAT-only test page for recently added code pattern rules.</p>

      <img src="/hero.png" className="mb-4" />

      <input type="text" placeholder="Your name" className="border rounded p-2 mb-4" />

      <input type="email" placeholder="Your email" className="border rounded p-2 mb-4" />

      <div onMouseOver={handleHover} className="inline-block p-2 bg-gray-200 mb-4">
        Hover for info
      </div>

      <button accessKey="s" type="button" className="mb-4 p-2 bg-blue-500 text-white">Save</button>

      <div onClick={goToServices} className="mb-4 cursor-pointer p-2 bg-gray-200">Go to services</div>

      <button className="mb-4 p-2 bg-gray-300"><svg className="w-4 h-4" viewBox="0 0 24 24" /></button>

      <a href="https://www.w3.org/WAI/" target="_blank" className="mb-4 block">W3C WAI website</a>

      <div className="toast mb-4">Message sent!</div>

      <button type="button" onClick={handleLockOrientation} className="mb-4 p-2 bg-gray-300">
        Lock orientation
      </button>
    </div>
  );
}
