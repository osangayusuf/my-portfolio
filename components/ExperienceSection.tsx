import { experience } from "../lib/data";
import { MdCheckCircle } from "react-icons/md";

export default function ExperienceSection() {
  return (
    <section className="py-32 bg-surface-container-low relative" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="font-label uppercase text-primary tracking-[0.3em] text-xs font-bold mb-4 block">
              The Journey
            </span>
            <h2 className="font-headline text-5xl font-black tracking-tighter uppercase mb-8">
              Professional Trajectory
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              A decade of engineering complex digital ecosystems, from founding
              specialized agencies to leading technical transformation in
              corporate environments.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {experience.map((item, i) => (
              <div key={item.id} className="relative pl-12 border-l-2 border-outline-variant/20">
                <div
                  className={`absolute ${i === 0 ? "-left-2.5 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" : "-left-2 top-0 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant"}`}
                ></div>
                <div className="mb-2 flex flex-wrap items-center gap-4">
                  <span className="font-headline text-2xl font-bold">{item.role}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${i === 0 ? "bg-primary/10 text-primary" : "bg-surface-container-highest text-on-surface-variant"}`}
                  >
                    {item.date}
                  </span>
                </div>
                <h4 className={`font-bold font-label uppercase tracking-widest text-xs mb-6 ${i === 0 ? "text-primary-dim" : "text-on-surface-variant"}`}>
                  {item.company}
                </h4>
                <p className={`text-on-surface-variant leading-relaxed max-w-2xl ${item.bullets.length ? "mb-6" : ""}`}>
                  {item.description}
                </p>
                {item.bullets.length > 0 && (
                  <ul className="space-y-3 text-sm text-on-surface/80">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <MdCheckCircle className="text-primary text-sm mt-1 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
