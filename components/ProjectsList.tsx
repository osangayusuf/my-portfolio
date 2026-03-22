"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib/data";

export default function ProjectsList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    // Determine unique categories dynamically from the data
    return ["All", ...new Set(projects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "bg-primary text-on-primary-container"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
