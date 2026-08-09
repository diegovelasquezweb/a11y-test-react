export default function MediaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">Media Demo</h1>

      {/* audio-caption: <audio> with a <source> but no <track kind="captions"> */}
      {/* cdp-autoplay-media: audio with controls, autoplay removed */}
      <audio controls>
        <source src="/demo-audio.mp3" type="audio/mpeg" />
      </audio>

      {/* video-caption: <video> with a <source> but no <track kind="captions"> */}
      {/* cdp-autoplay-media: video with controls, autoplay removed */}
      <video controls width="320" height="180">
        <source src="/demo-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
