import ProjectCard from "./ProjectCard";
import { projects } from "../lib/data";

export default function ProjectsList() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-xl">
          <span className="font-label uppercase text-primary tracking-[0.3em] text-xs font-bold mb-4 block">
            Selected Works
          </span>
          <h2 className="font-headline text-5xl font-black tracking-tighter uppercase">
            Project Ecosystem
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 rounded-full bg-primary text-on-primary-container text-xs font-bold uppercase tracking-wider">
            All
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-colors">
            Infrastructure
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-colors">
            Web3
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-colors">
            Full-Stack
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
