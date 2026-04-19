"use client";

export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      {/* Empty heading */}
      <h2 className="mb-4">Get in Touch</h2>

      <ul className="mb-4">
        <li>Phone: 555-0100</li>
        <li>Email: hello@example.com</li>
      </ul>

      <form className="flex flex-col gap-3 max-w-md">
        {/* Select without label */}
        <label htmlFor="topic" className="font-semibold">Topic</label>
        <select id="topic" name="topic" className="border rounded p-2">
          <option value="">Choose a topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>

        {/* Inputs with visible labels properly associated */}
        <label id="name-label" htmlFor="name" className="font-semibold">Your name</label>
        <input id="name" type="text" placeholder="Your name" className="border rounded p-2" aria-labelledby="name-label" />
        <label id="email-label" htmlFor="email" className="font-semibold">Your email</label>
        <input id="email" type="email" placeholder="Your email" className="border rounded p-2" aria-labelledby="email-label" />
        <label id="message-label" htmlFor="message" className="font-semibold">Your message</label>
        <textarea id="message" placeholder="Your message" className="border rounded p-2" aria-labelledby="message-label" />
        <button type="submit" className="bg-blue-600 text-white rounded p-2">Send</button>
      </form>
    </div>
  );
}
