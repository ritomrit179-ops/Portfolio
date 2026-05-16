export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-32">
        <div className="mb-6">
          <span className="text-sm tracking-widest text-gray-400 uppercase">Get to know me</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          About
        </h1>
        
        <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
          <p className="text-xl text-gray-300">
            Unreal Engine enthusiast and videographer.
          </p>

          <p>
            I'm an Unreal Engine artist and cinematic creator focused on building immersive visual experiences. I create fully realized worlds inside Unreal Engine, designing environments, shaping lighting, directing camera movement, and crafting cinematic compositions with a strong storytelling approach. Alongside my digital work, I also shoot real-world videography, blending virtual production techniques with live-action filmmaking. This portfolio is a collection of the worlds, visuals, and stories I create.
          </p>

          <div className="pt-12">
            <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="group">
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                    Videography
                  </h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">→</span> Cinematography
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">→</span> Color Grading
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">→</span> Video Editing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">→</span> Motion Graphics
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group">
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Unreal Engine
                  </h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> UE5 Filmmaking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> Environment Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> Lighting & Materials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> MetaHuman Characters
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
