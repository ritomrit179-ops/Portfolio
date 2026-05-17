"use client";

import { projects } from "@/data/projects";
import { useState, useRef } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Filter = "Unreal Engine Filmmaking" | "Videography";

const TABS: { label: string; value: Filter }[] = [
  { label: "Unreal Engine", value: "Unreal Engine Filmmaking" },
  { label: "Videography", value: "Videography" },
];

function extractYouTubeId(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([^?&]+)/);
  return match ? match[1] : "";
}

export default function ProjectGrid() {
  const [active, setActive] = useState<Filter>("Unreal Engine Filmmaking");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Tab filter */}
      <div className="flex gap-2 mb-12 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${active === tab.value
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-400 border-white/15 hover:border-white/40 hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideography = project.category === "Videography";
  const hasEmbed = !!(project.youtubeUrl || project.vimeoUrl);
  const hasThumbnail = !!project.thumbnail;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!hasEmbed) videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!hasEmbed && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const glowClass = isVideography ? "from-purple-600 to-blue-600" : "from-cyan-600 to-blue-700";
  const overlayClass = isVideography ? "from-purple-500/20 to-blue-500/20" : "from-cyan-500/20 to-blue-700/20";
  const badgeClass = isVideography ? "border-purple-500/40 text-purple-300" : "border-cyan-500/40 text-cyan-300";

  const categoryLabel = isVideography ? "Videography" : "Unreal Engine Rendering";

  return (
    <div
      className="group"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/project/${project.id}`} className="block relative">
        <div className={`absolute -inset-1 bg-gradient-to-r ${glowClass} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          <div className={`absolute inset-0 bg-gradient-to-tr ${overlayClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none`} />

          {hasEmbed && project.youtubeUrl ? (
            <img
              src={`https://img.youtube.com/vi/${extractYouTubeId(project.youtubeUrl)}/maxresdefault.jpg`}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${extractYouTubeId(project.youtubeUrl!)}/hqdefault.jpg`;
              }}
            />
          ) : project.isLocal ? (
            <>
              {/* Static thumbnail — shown at rest, hidden on hover */}
              {hasThumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                />
              )}
              {/* Video — always mounted, crossfades in on hover */}
              <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-300 ${hasThumbnail ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"}`}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  if (!hasThumbnail) e.currentTarget.currentTime = 3;
                }}
              >
                <source src={project.videoUrl} type="video/mp4" />
                <source src={project.videoUrl} type="video/quicktime" />
              </video>
            </>
          ) : null}

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${isHovered ? "scale-110 bg-white/20" : "scale-100"}`}>
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className={`px-3 py-1 bg-black/60 backdrop-blur-sm border rounded-full text-xs ${badgeClass}`}>
              {categoryLabel}
            </span>
          </div>
        </div>
      </Link>

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
              <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-500">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
