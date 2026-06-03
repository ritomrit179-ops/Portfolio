"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";

export default function StackedCardsHero() {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  const handleCardClick = (i: number) => {
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (i !== activeIndex) {
      setActiveIndex(i);
    }
  };

  const stackOffset = [
    { rotate: "0deg", translateX: "0px", translateY: "0px", scale: 1, zIndex: 30 },
    { rotate: "3deg", translateX: "18px", translateY: "-10px", scale: 0.96, zIndex: 20 },
    { rotate: "-2.5deg", translateX: "-14px", translateY: "-18px", scale: 0.92, zIndex: 10 },
  ];

  const expandedOffset = [
    { rotate: "0deg", translateX: "0px", translateY: "0px", scale: 1, zIndex: 30 },
    { rotate: "0deg", translateX: "calc(100% + 16px)", translateY: "0px", scale: 0.75, zIndex: 20 },
    { rotate: "0deg", translateX: "calc(200% + 32px)", translateY: "0px", scale: 0.75, zIndex: 10 },
  ];

  // Reorder so active is always first
  const orderedProjects = [
    projects[activeIndex],
    ...projects.filter((_, i) => i !== activeIndex),
  ];

  return (
    <div className="w-full">
      {/* Hint text */}
      <p className="text-xs text-gray-500 mb-4 text-right">
        {expanded ? "Click a card to switch" : "Click to expand"}
      </p>

      {/* Card stack container */}
      <div
        className={`relative w-full transition-all duration-500 ${expanded ? "h-auto" : "aspect-video"}`}
        style={{ perspective: "1200px" }}
      >
        <div className={`relative ${expanded ? "flex gap-4 items-start" : "w-full aspect-video"}`}>
          {orderedProjects.slice(0, 3).map((project, i) => {
            const offset = expanded ? expandedOffset[i] : stackOffset[i];
            const isActive = i === 0;

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(i)}
                className={`
                  ${expanded ? "relative flex-shrink-0" : "absolute inset-0"}
                  rounded-2xl overflow-hidden border cursor-pointer
                  transition-all duration-500 ease-out
                  ${isActive ? "border-white/30 shadow-2xl" : "border-white/10 shadow-lg"}
                  ${!expanded && i !== 0 ? "pointer-events-none" : ""}
                `}
                style={{
                  zIndex: offset.zIndex,
                  transform: expanded
                    ? `scale(${offset.scale})`
                    : `rotate(${offset.rotate}) translate(${offset.translateX}, ${offset.translateY}) scale(${offset.scale})`,
                  width: expanded ? (i === 0 ? "55%" : "22.5%") : "100%",
                  transformOrigin: "top left",
                }}
              >
                {/* Video */}
                {i === 0 ? (
                  <video
                    ref={videoRef}
                    key={project.id}
                    className="w-full aspect-video object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    <source src={project.videoUrl} type="video/quicktime" />
                  </video>
                ) : (
                  <video
                    className="w-full aspect-video object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => { e.currentTarget.currentTime = 1; }}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    <source src={project.videoUrl} type="video/quicktime" />
                  </video>
                )}

                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isActive ? "bg-black/10" : "bg-black/50 hover:bg-black/30"
                }`} />

                {/* Info overlay on active card */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs text-gray-400 uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-lg md:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                )}

                {/* Title on inactive expanded cards */}
                {expanded && !isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs font-medium text-gray-300 truncate">{project.title}</p>
                  </div>
                )}

                {/* Peek label on stacked inactive cards */}
                {!expanded && i !== 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-xs font-medium">{project.title}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Collapse button */}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="mt-4 text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1"
        >
          <span>←</span> Collapse
        </button>
      )}
    </div>
  );
}
