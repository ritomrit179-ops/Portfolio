export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-32">
        <div className="mb-6">
          <span className="text-sm tracking-widest text-gray-400 uppercase">Get to know me</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          About
        </h1>
        
        <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
          <p className="text-xl text-gray-300">
            I'm a videographer and Unreal Engine artist specializing in creating 
            cinematic experiences that blend real-world footage with cutting-edge 
            real-time rendering technology.
          </p>
          
          <p>
            With expertise in both traditional cinematography and modern game engine 
            workflows, I bring stories to life through compelling visuals and 
            immersive environments.
          </p>

          <div className="pt-12">
            <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
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
                      <span className="text-blue-400">→</span> Real-time Rendering
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> Environment Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> Lighting & Materials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> Virtual Production
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
