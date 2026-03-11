"use client";

import { projects } from "@/data/projects";

export default function SplitVideoHero() {
  // Use the first 3 projects for the split screen
  const heroVideos = projects.slice(0, 3);

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Three diagonal sections with animated clips */}
      <div className="relative w-full h-full flex">
        {/* Left section */}
        <div 
          className="relative flex-1 overflow-hidden transition-all duration-700 hover:flex-[1.2]" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0% 100%)' }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-100"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideos[0]?.videoUrl} type="video/mp4" />
            <source src={heroVideos[0]?.videoUrl} type="video/quicktime" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent transition-opacity duration-500 hover:opacity-50" />
        </div>

        {/* Middle section */}
        <div 
          className="relative flex-1 overflow-hidden -ml-[25%] transition-all duration-700 hover:flex-[1.2] hover:-ml-[20%]" 
          style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0% 100%)' }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-100"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideos[1]?.videoUrl} type="video/mp4" />
            <source src={heroVideos[1]?.videoUrl} type="video/quicktime" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent transition-opacity duration-500 hover:opacity-50" />
        </div>

        {/* Right section */}
        <div 
          className="relative flex-1 overflow-hidden -ml-[35%] transition-all duration-700 hover:flex-[1.2] hover:-ml-[30%]" 
          style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-100"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideos[2]?.videoUrl} type="video/mp4" />
            <source src={heroVideos[2]?.videoUrl} type="video/quicktime" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-transparent transition-opacity duration-500 hover:opacity-50" />
        </div>
      </div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}
