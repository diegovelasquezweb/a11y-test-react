function App() {
  return (
    <div>
      <img src="/hero.png" />

      <button></button>

      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Email address" />
        <select>
          <option>Choose one</option>
          <option>Option A</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <div style={{ color: "#aaa", backgroundColor: "#fff" }}>
        Low contrast text
      </div>

      <a href="#">Click here</a>

      <h1>Title</h1>
      <h3>Skipped heading level</h3>

      <table>
        <tr><td>Name</td><td>Age</td></tr>
        <tr><td>Alice</td><td>30</td></tr>
      </table>
    </div>
  );
}

export default App;
