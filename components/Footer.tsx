import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant/15 w-full py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-primary font-headline">
            Neon Architect
          </span>
          <p className="font-body text-sm leading-relaxed text-white/50 italic">
            © {new Date().getFullYear()} Neon Architect. Engineered with precision.
          </p>
        </div>
        <div className="flex gap-8">
          <Link href="#" className="text-white/50 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">
            GitHub
          </Link>
          <Link href="#" className="text-white/50 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">
            LinkedIn
          </Link>
          <Link href="#" className="text-white/50 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
