export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      {/* Contact Form Heading */}
      <h2 className="mb-4">Send us a message</h2>

      <ul className="mb-4">
        <li>Phone: 555-0100</li>
        <li>Email: hello@example.com</li>
      </ul>

      <form className="flex flex-col gap-3 max-w-md">
        {/* Select with label */}
        <label htmlFor="topic">Topic</label>
        <select id="topic" name="topic" className="border rounded p-2">
          <option value="">Choose a topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white rounded p-2">Send</button>
      </form>
    </div>
  );
}
