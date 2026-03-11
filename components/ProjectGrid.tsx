"use client";

import { projects } from "@/data/projects";
import { useState } from "react";
import type { Project } from "@/data/projects";

export default function ProjectGrid() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index}
          isPlaying={playingId === project.id}
          onPlay={() => setPlayingId(project.id)}
          onStop={() => setPlayingId(null)}
        />
      ))}
    </div>
  );
}

function ProjectCard({ 
  project, 
  index,
  isPlaying,
  onPlay,
  onStop
}: { 
  project: Project; 
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Thumbnail/Video Container */}
        <div 
          className={`relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-white/10 transition-all duration-500 ${!isPlaying && 'cursor-pointer group-hover:scale-[1.02]'}`}
          onClick={!isPlaying ? onPlay : undefined}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          <div className={`absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 transition-opacity duration-500 z-10 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
          
          {/* Video */}
          {project.isLocal ? (
            <video 
              className="w-full h-full object-cover"
              muted={!isPlaying}
              loop={!isPlaying}
              playsInline
              preload="metadata"
              autoPlay={isHovered || isPlaying}
              controls={isPlaying}
            >
              <source src={project.videoUrl} type="video/mp4" />
              <source src={project.videoUrl} type="video/quicktime" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <span className="text-sm opacity-50">Thumbnail</span>
            </div>
          )}

          {/* Play icon overlay - only show when not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}

          {/* Close button - only show when playing */}
          {isPlaying && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStop();
              }}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{project.description}</p>
        
        {/* Show details when playing */}
        {isPlaying && (
          <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
            <p className="text-gray-400 text-sm mb-3">{project.details}</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
