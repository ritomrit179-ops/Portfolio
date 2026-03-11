import ProjectGrid from "@/components/ProjectGrid";
import SplitVideoHero from "@/components/SplitVideoHero";
import ProfileImage from "@/components/ProfileImage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="text-sm tracking-widest text-gray-400 uppercase">Visual Storyteller</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Videography &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Unreal Rendering
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Creating cinematic experiences through video production and real-time rendering.
          </p>
        </div>

        {/* Split Video Demo Reel */}
        <div className="mt-16">
          <SplitVideoHero />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4">
              <span className="text-sm tracking-widest text-gray-400 uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Bringing Stories to Life
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I'm a videographer and Unreal Engine artist specializing in creating 
              cinematic experiences that blend real-world footage with cutting-edge 
              real-time rendering technology.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              With expertise in both traditional cinematography and modern game engine 
              workflows, I transform ideas into immersive visual narratives.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <span>Learn More About Me</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            {/* Stats/Highlights with small circular photo */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  UE5
                </div>
                <div className="text-gray-400">Unreal Engine</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DVR
                </div>
                <div className="text-gray-400">DaVinci Resolve</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  4K
                </div>
                <div className="text-gray-400">Video Quality</div>
              </div>
            </div>

            {/* Small circular photo positioned on the side */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full blur-lg" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-900 to-black">
                  <img 
                    src="/MyPhoto.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>
        <ProjectGrid />
      </section>
    </main>
  );
}
