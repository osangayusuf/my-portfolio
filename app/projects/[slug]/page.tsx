import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "../../../lib/data";
import Image from "next/image";
import { MdArrowBack, MdStorage, MdChevronRight, MdMemory, MdDevices } from "react-icons/md";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-20">
        {/* Logic Rail */}
        <div className="fixed left-8 top-0 bottom-0 w-px logic-rail -z-10 hidden lg:block"></div>
        
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background z-10"></div>
            {project.imageUrl && (
              <Image
                alt={project.imageAlt || project.title}
                fill
                priority
                className="object-cover opacity-40"
                src={project.imageUrl}
              />
            )}
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
            <div className="flex flex-col items-start gap-4">
              <Link className="group flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest mb-8" href="/#projects">
                <MdArrowBack className="text-sm" />
                Back to Projects
              </Link>
              <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-background max-w-4xl neon-glow">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
                {project.description}
              </p>
              <div className="mt-10 flex gap-4">
                <Link href={project.liveSite ?? "#"} className="bg-primary text-on-primary-container px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 rounded-sm shadow-[0_0_30px_rgba(161,250,255,0.2)]">
                  Visit Live Site
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview & Meta */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-24">
              {project.challenge && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-primary"></span>
                    <h2 className="font-headline uppercase tracking-tighter text-xl font-bold text-primary">The Challenge</h2>
                  </div>
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-secondary"></span>
                    <h2 className="font-headline uppercase tracking-tighter text-xl font-bold text-secondary">The Solution</h2>
                  </div>
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
              {/* Architecture Diagram Placeholder based on design */}
              {project.challenge && (
                <div className="bg-surface-container border border-outline-variant/15 p-1 px-1 rounded-sm">
                  <div className="aspect-video bg-surface-container-low flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                    <div className="relative z-10 flex items-center gap-8 md:gap-16">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 border border-outline-variant flex items-center justify-center rounded-sm bg-surface">
                          <MdStorage className="text-primary text-3xl" />
                        </div>
                        <span className="font-label text-[10px] uppercase tracking-widest">Origin</span>
                      </div>
                      <div className="h-px w-12 md:w-24 bg-outline-variant relative">
                        <MdChevronRight className="absolute right-0 -top-1.5 text-sm text-outline-variant" />
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-24 h-24 border-2 border-primary shadow-[0_0_30px_rgba(161,250,255,0.1)] flex items-center justify-center rounded-sm bg-surface">
                          <MdMemory className="text-primary text-5xl" />
                        </div>
                        <span className="font-label text-[10px] uppercase tracking-widest font-bold text-primary">Rust + WASM Edge</span>
                      </div>
                      <div className="h-px w-12 md:w-24 bg-outline-variant relative">
                        <MdChevronRight className="absolute right-0 -top-1.5 text-sm text-outline-variant" />
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 border border-outline-variant flex items-center justify-center rounded-sm bg-surface">
                          <MdDevices className="text-secondary text-3xl" />
                        </div>
                        <span className="font-label text-[10px] uppercase tracking-widest">User</span>
                      </div>
                    </div>
                    <p className="font-label text-xs text-on-surface-variant italic mt-4">Simplified data flow: Origin to Edge Runtime to End User</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Meta */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-surface-container-low p-8 border-t border-primary/30 rounded-sm space-y-10 sticky top-32">
                {project.role && (
                  <div className="space-y-2">
                    <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Role</span>
                    <p className="font-headline text-xl text-on-surface font-medium">{project.role}</p>
                  </div>
                )}
                <div className="space-y-4">
                  <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {(project.timeline || project.status) && (
                  <div className="grid grid-cols-2 gap-8">
                    {project.timeline && (
                      <div className="space-y-2">
                        <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Timeline</span>
                        <p className="font-headline text-lg text-on-surface">{project.timeline}</p>
                      </div>
                    )}
                    {project.status && (
                      <div className="space-y-2">
                        <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Status</span>
                        <p className="font-headline text-lg text-secondary flex items-center gap-2">
                          {project.status === "Live" && <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>}
                          {project.status}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <hr className="border-outline-variant/15" />
                <button className="w-full border border-primary text-primary hover:bg-primary/10 py-3 font-headline font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm">
                  View Case Study PDF
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* Results Section */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="max-w-7xl mx-auto px-8 pb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-12 bg-tertiary"></span>
              <h2 className="font-headline uppercase tracking-tighter text-xl font-bold text-tertiary">Project Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.map((metric, i) => (
                <div key={metric.label} className={i === 0 ? "md:col-span-2 bg-surface-container p-12 rounded-sm border border-outline-variant/10 relative overflow-hidden group" : "bg-surface-container-high p-12 rounded-sm border border-outline-variant/10 flex flex-col justify-end"}>
                  <div className="relative z-10">
                    <p className={`font-headline ${i === 0 ? "text-7xl font-black text-primary" : "text-5xl font-black text-secondary"} mb-4`}>{metric.value}</p>
                    <h3 className={`font-headline ${i === 0 ? "text-2xl" : "text-xl"} font-bold mb-4 uppercase`}>{metric.label}</h3>
                    <p className={i === 0 ? "text-on-surface-variant max-w-md" : "text-sm text-on-surface-variant"}>{metric.description}</p>
                  </div>
                </div>
              ))}
              <div className="bg-surface-container p-12 rounded-sm border border-outline-variant/10 md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
                <div className="space-y-4">
                  <h3 className="font-headline text-2xl font-bold uppercase">Ready to scale your infrastructure?</h3>
                  <p className="text-on-surface-variant max-w-xl">Let&apos;s discuss how customized edge computing can transform your application&apos;s global footprint.</p>
                </div>
                <button className="bg-primary text-on-primary-container px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 rounded-sm whitespace-nowrap">
                  Start a Project
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
