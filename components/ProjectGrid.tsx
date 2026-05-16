"use client";

import { projects } from "@/data/projects";
import { useState, useRef } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video thumbnail — clicking goes straight to the project page */}
      <Link href={`/project/${project.id}`} className="block relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

        <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

          {/* Video — muted loop preview on hover, seeks to 1s on load to show a frame */}
          {project.isLocal && (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                // Seek to 1 second so mobile shows a real frame instead of black
                e.currentTarget.currentTime = 1;
              }}
            >
              <source src={project.videoUrl} type="video/mp4" />
              <source src={project.videoUrl} type="video/quicktime" />
            </video>
          )}

          {/* Play icon — always visible, fades on hover */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${isHovered ? "scale-110 bg-white/20" : "scale-100"}`}>
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300">
              {project.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Project info */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>

        <div className="flex items-center gap-4">
          <Link
            href={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
          >
            <span>View Case Study</span>
            <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
          </Link>

          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 2).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-500"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
