"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";

export default function SpotlightHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Restart video when active changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  const active = projects[activeIndex];

  return (
    <div className="w-full space-y-4">
      {/* ── Main spotlight video ── */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        {/* Video */}
        <video
          ref={videoRef}
          key={active.id}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={active.videoUrl} type="video/mp4" />
          <source src={active.videoUrl} type="video/quicktime" />
        </video>

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Active project info overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block">
            {active.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {active.title}
          </h2>
          <p className="text-gray-400 text-sm mt-1 max-w-xl hidden md:block">
            {active.description}
          </p>
        </div>

        {/* Index indicator dots */}
        <div className="absolute top-4 right-4 flex gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Select project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Filmstrip thumbnails ── */}
      <div className="grid grid-cols-3 gap-3">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => handleSelect(i)}
            className={`relative aspect-video rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer group ${
              i === activeIndex
                ? "border-white/50 ring-1 ring-white/30"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            {/* Thumbnail video — static first frame */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => { e.currentTarget.currentTime = 1; }}
            >
              <source src={project.videoUrl} type="video/mp4" />
              <source src={project.videoUrl} type="video/quicktime" />
            </video>

            {/* Overlay */}
            <div className={`absolute inset-0 transition-all duration-300 ${
              i === activeIndex
                ? "bg-black/20"
                : "bg-black/50 group-hover:bg-black/30"
            }`} />

            {/* Active indicator bar */}
            {i === activeIndex && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
            )}

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <p className={`text-xs font-medium truncate transition-colors duration-300 ${
                i === activeIndex ? "text-white" : "text-gray-400 group-hover:text-white"
              }`}>
                {project.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
