import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8 text-center" id="contact">
      <div className="bg-surface-container border border-outline-variant/20 p-16 rounded-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,244,254,0.1)_0%,transparent_40%)]"></div>
        <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 relative z-10">
          Ready to <span className="text-primary">Architect</span> something iconic?
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-12 relative z-10">
          Currently accepting high-impact architectural consulting and full-stack
          development projects.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            className="inline-block bg-primary text-on-primary-container px-12 py-5 rounded-sm font-headline font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
            href="mailto:hello@neonarchitect.io"
          >
            Send Transmission
          </Link>
        </div>
      </div>
    </section>
  );
}
