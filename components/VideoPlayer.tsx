"use client";

interface VideoPlayerProps {
  src: string;
  isLocal?: boolean;
  title: string;
}

export default function VideoPlayer({ src, isLocal, title }: VideoPlayerProps) {
  if (isLocal) {
    return (
      <video
        controls
        className="w-full h-full object-cover"
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <iframe
      width="100%"
      height="100%"
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    />
  );
}
