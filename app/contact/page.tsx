"use client";

export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      {/* Empty heading */}
      <h2 className="mb-4"></h2>

      {/* divs inside ul */}
      <ul className="mb-4">
        <div>Phone: 555-0100</div>
        <div>Email: hello@example.com</div>
      </ul>

      <form className="flex flex-col gap-3 max-w-md">
        {/* Select without label */}
        <select className="border rounded p-2">
          <option value="">Choose a topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>

        {/* Inputs with placeholder only, no label */}
        <input type="text" placeholder="Your name" className="border rounded p-2" />
        <input type="email" placeholder="Your email" className="border rounded p-2" />
        <textarea placeholder="Your message" className="border rounded p-2" />
        <button type="submit" className="bg-blue-600 text-white rounded p-2">Send</button>
      </form>
    </div>
  );
}
