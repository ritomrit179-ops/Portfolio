import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link href="/" className="text-gray-400 hover:text-white transition-colors mb-8 inline-flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-gray-300">
              {project.category}
            </span>
            <span className="text-sm text-gray-600">•</span>
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
        </div>

        {/* Video Embed */}
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
          <VideoPlayer 
            src={project.videoUrl} 
            isLocal={project.isLocal}
            title={project.title}
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              About This Project
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.details}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Tools Used</h3>
            <ul className="space-y-3">
              {project.tools.map((tool, index) => (
                <li key={index} className="text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
