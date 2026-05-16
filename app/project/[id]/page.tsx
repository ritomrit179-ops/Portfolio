import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const accentColor =
    project.category === "Unreal Rendering"
      ? "from-orange-500 to-red-500"
      : "from-purple-500 to-blue-500";

  const accentBg =
    project.category === "Unreal Rendering"
      ? "from-orange-500/20 to-red-500/20"
      : "from-purple-500/20 to-blue-500/20";

  const accentBorder =
    project.category === "Unreal Rendering"
      ? "border-orange-500/30"
      : "border-purple-500/30";

  const accentDot =
    project.category === "Unreal Rendering"
      ? "bg-orange-500"
      : "bg-purple-500";

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back */}
        <Link
          href="/"
          className="text-gray-500 hover:text-white transition-colors mb-10 inline-flex items-center gap-2 group text-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">
            ←
          </span>
          Back to Work
        </Link>

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`px-3 py-1 bg-gradient-to-r ${accentBg} border ${accentBorder} rounded-full text-sm text-gray-300`}
            >
              {project.category}
            </span>
            {project.year && (
              <span className="text-sm text-gray-500">{project.year}</span>
            )}
            {project.duration && (
              <>
                <span className="text-gray-700">·</span>
                <span className="text-sm text-gray-500">{project.duration}</span>
              </>
            )}
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {project.title}
          </h1>

          {project.subtitle && (
            <p
              className={`text-lg font-medium mb-4 bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}
            >
              {project.subtitle}
            </p>
          )}

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {project.role && (
            <p className="mt-4 text-sm text-gray-500">
              <span className="text-gray-400 font-medium">Role: </span>
              {project.role}
            </p>
          )}
        </header>

        {/* ── VIDEO ──────────────────────────────────────────────── */}
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <VideoPlayer
            src={project.videoUrl}
            isLocal={project.isLocal}
            title={project.title}
          />
        </div>

        {/* ── HIGHLIGHTS (if present) ────────────────────────────── */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-20">
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-4`}
            >
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/3 border border-white/8 rounded-xl flex items-start gap-3"
                >
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentDot}`}
                  />
                  <span className="text-sm text-gray-300 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── MAIN CONTENT GRID ──────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Left — overview + production sections */}
          <div className="md:col-span-2 space-y-14">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-5 text-white">
                Overview
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* Production sections */}
            {project.productionSections &&
              project.productionSections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-bold mb-5 text-white">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
          </div>

          {/* Right — sidebar */}
          <aside className="space-y-10">
            {/* Tech Specs */}
            {project.techSpecs && project.techSpecs.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  Technical Specs
                </h3>
                <ul className="space-y-3">
                  {project.techSpecs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex flex-col gap-0.5 pb-3 border-b border-white/5 last:border-0"
                    >
                      <span className="text-xs text-gray-500">{spec.label}</span>
                      <span className="text-sm text-gray-200">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ── PIPELINE ───────────────────────────────────────────── */}
        {project.pipeline && project.pipeline.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-white">
              Production Pipeline
            </h2>
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-white/20 to-transparent hidden md:block" />
              <ol className="space-y-4">
                {project.pipeline.map((step, i) => (
                  <li key={i} className="flex items-center gap-5 group">
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full bg-gradient-to-br ${accentBg} border ${accentBorder} flex items-center justify-center shrink-0`}
                    >
                      <span className="text-xs font-bold text-gray-300">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* ── NEXT PROJECT ───────────────────────────────────────── */}
        <NextProject currentId={project.id} />
      </div>
    </main>
  );
}

function NextProject({ currentId }: { currentId: string }) {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-16 border-t border-white/10">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
        Next Project
      </p>
      <Link
        href={`/project/${next.id}`}
        className="group flex items-center justify-between p-6 bg-white/3 border border-white/8 rounded-2xl hover:bg-white/6 hover:border-white/15 transition-all duration-300"
      >
        <div>
          <p className="text-sm text-gray-500 mb-1">{next.category}</p>
          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
            {next.title}
          </h3>
          <p className="text-gray-400 mt-1 text-sm">{next.description}</p>
        </div>
        <span className="text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 text-2xl shrink-0 ml-6">
          →
        </span>
      </Link>
    </div>
  );
}
