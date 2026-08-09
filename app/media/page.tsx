export default function MediaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">Media Demo</h1>

      {/* audio-caption: <audio> with a <source> but no <track kind="captions"> */}
      {/* no-autoplay-audio + cdp-autoplay-media: autoplaying audio with no controls */}
      <audio controls>
        <source src="/demo-audio.mp3" type="audio/mpeg" />
      </audio>

      {/* video-caption: <video> with a <source> but no <track kind="captions"> */}
      {/* cdp-autoplay-media: autoplaying video with no controls */}
      <video controls width="320" height="180">
        <source src="/demo-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
