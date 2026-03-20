import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center px-8 text-center pt-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,244,254,0.05)_0%,transparent_50%)]"></div>
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20">
        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(161,250,255,0.8)] animate-pulse"></span>
        <span className="text-[10px] font-label uppercase tracking-[0.2em] font-semibold text-primary">
          System Online
        </span>
      </div>
      <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 max-w-5xl">
        SOLUTIONS{" "}
        <span className="text-primary italic neon-glow">ARCHITECT </span>
        &amp; FULL-STACK ENGINEER
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        Engineering high-performance distributed systems and sleek digital
        experiences. Precision architecture meets modern full-stack development.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <Link
          className="group relative bg-primary text-on-primary-container px-10 py-4 rounded-sm font-headline font-black uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_30px_rgba(161,250,255,0.3)] active:scale-95"
          href="#projects"
        >
          View Work
        </Link>
        <Link
          className="px-10 py-4 rounded-sm font-headline font-black uppercase tracking-widest text-sm text-primary border border-primary/20 hover:bg-primary/5 transition-all active:scale-95"
          href="#contact"
        >
          Let&apos;s Build
        </Link>
      </div>
    </section>
  );
}
