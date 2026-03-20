import Link from "next/link";
import { Project } from "../lib/data";
import { MdArrowForward, MdOpenInNew } from "react-icons/md";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (project.cardType === "large") {
    return (
      <div className="md:col-span-8 group relative overflow-hidden bg-surface-container rounded-lg border-t border-primary/10 transition-all hover:bg-surface-container-high">
        <div className="aspect-video w-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            alt={project.imageAlt}
            src={project.imageUrl}
          />
        </div>
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-bold uppercase tracking-widest text-primary border border-primary/10">
              {project.category}
            </span>
          </div>
          <h3 className="font-headline text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-on-surface-variant mb-8 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-label text-on-surface/50">
              {project.techStack.join(" / ")}
            </span>
            <div className="flex-grow"></div>
            <Link href={`/projects/${project.slug}`} className="text-primary group-hover:translate-x-1 transition-transform flex items-center">
              <MdArrowForward size={24} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (project.cardType === "tall") {
    return (
      <div className="md:col-span-4 group relative overflow-hidden bg-surface-container rounded-lg border-t border-secondary/10 transition-all hover:bg-surface-container-high">
        <div className="h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            alt={project.imageAlt}
            src={project.imageUrl}
          />
        </div>
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-bold uppercase tracking-widest text-secondary border border-secondary/10">
              {project.category}
            </span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-sm mb-6">
            {project.description}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-[10px] font-label text-on-surface/50 uppercase tracking-widest">
              {project.techStack.join(" / ")}
            </span>
            <Link href={`/projects/${project.slug}`} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
              <MdOpenInNew size={24} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:col-span-6 group relative overflow-hidden bg-surface-container rounded-lg border-t border-tertiary/10 transition-all hover:bg-surface-container-high">
      <div className="p-8 h-full flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-bold uppercase tracking-widest text-tertiary border border-tertiary/10">
            {project.category}
          </span>
        </div>
        <h3 className="font-headline text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-on-surface-variant text-sm mb-12">
          {project.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[10px] font-label text-on-surface/50 uppercase tracking-widest">
            {project.techStack.join(" / ")}
          </span>
          <Link href={`/projects/${project.slug}`} className="text-tertiary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex items-center">
            <MdOpenInNew size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
