export default function FramesDemo() {
  return (
    <main className="p-8 space-y-10">
      <h1 className="text-2xl font-bold">Frame Demo</h1>

      {/* frame-title: this iframe has no title attribute, so assistive
          technology has no way to describe its purpose.
          frame-tested: the cross-origin source also prevents the audit
          engine from inspecting the frame's content directly. */}
      <iframe
        src="https://example.com"
        style={{ width: 400, height: 200 }}
      />

      {/* frame-focusable-content: tabIndex={-1} removes this frame from the
          keyboard focus order even though its source (the home page)
          contains focusable content, trapping keyboard users out of it.
          frame-title-unique (part 1): shares its title with the iframe
          below. */}
      <iframe
        src="/"
        title="Content preview"
        tabIndex={-1}
        style={{ width: 400, height: 200 }}
      />

      {/* frame-title-unique (part 2): duplicate title value ("Content
          preview") shared with the iframe above, so titles no longer
          uniquely identify each frame. */}
      <iframe
        src="/"
        title="Content preview"
        style={{ width: 400, height: 200 }}
      />
    </main>
  );
}
