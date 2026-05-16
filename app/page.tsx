import ProjectGrid from "@/components/ProjectGrid";
import SplitVideoHero from "@/components/SplitVideoHero";

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
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Unreal Engine
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              & Videography
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Crafting cinematic worlds inside Unreal Engine 5 and capturing real ones on camera.
          </p>
        </div>

        {/* Split Video Demo Reel */}
        <div className="mt-16">
          <SplitVideoHero />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm an Unreal Engine artist and cinematic creator focused on building immersive visual experiences. I create fully realized worlds inside Unreal Engine, designing environments, shaping lighting, directing camera movement, and crafting cinematic compositions with a strong storytelling approach. Alongside my digital work, I also shoot real-world videography, blending virtual production techniques with live-action filmmaking. This portfolio is a collection of the worlds, visuals, and stories I create.
            </p>
          </div>

          <div className="relative mt-8 md:mt-0">
            {/* Profile photo */}
            <div className="flex justify-center mb-6 md:hidden">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full blur-lg" />
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-900 to-black">
                  <img src="/MyPhoto.jpeg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-br from-pink-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  UE5
                </div>
                <div className="text-gray-400 text-sm md:text-base">Unreal Engine</div>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DVR
                </div>
                <div className="text-gray-400 text-sm md:text-base">DaVinci Resolve</div>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-white/10 rounded-xl relative">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  4K
                </div>
                <div className="text-gray-400 text-sm md:text-base">Video Quality</div>

                {/* Photo — desktop only, floats over the bottom-right corner */}
                <div className="hidden md:block absolute -right-10 -bottom-10">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full blur-lg" />
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-900 to-black">
                      <img src="/MyPhoto.jpeg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>
        <ProjectGrid />
      </section>
    </main>
  );
}
