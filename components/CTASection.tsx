import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Link
            className="inline-block bg-primary text-on-primary-container px-12 py-5 rounded-sm font-headline font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
            href="mailto:osangayusuf@gmail.com"
          >
            Send Transmission
          </Link>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-outline-variant/20">
          <Link
            href="https://github.com/osangayusuf"
            target="_blank"
            className="text-white/50 hover:text-primary transition-all hover:-translate-y-1 flex items-center gap-3 font-label text-sm uppercase tracking-widest"
          >
            <FaGithub className="text-2xl" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/osanga-yusuf-78a4331aa/"
            target="_blank"
            className="text-white/50 hover:text-primary transition-all hover:-translate-y-1 flex items-center gap-3 font-label text-sm uppercase tracking-widest"
          >
            <FaLinkedin className="text-2xl" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/the_osanga"
            target="_blank"
            className="text-white/50 hover:text-primary transition-all hover:-translate-y-1 flex items-center gap-3 font-label text-sm uppercase tracking-widest"
          >
            <FaXTwitter className="text-2xl" />
            <span className="hidden sm:inline">Twitter</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
