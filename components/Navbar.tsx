import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/15 shadow-[0_20px_40px_rgba(0,244,254,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link
          href="/"
          className="text-xl md:text-2xl font-black tracking-tighter text-primary font-headline"
        >
          I&apos;m Osanga Yusuf
        </Link>
        <div className="hidden md:flex items-center gap-10 font-headline uppercase tracking-wider text-sm font-bold">
          <Link
            className="text-primary border-b-2 border-primary pb-1 transition-all duration-500"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="text-white/70 hover:text-primary transition-colors duration-300"
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className="text-white/70 hover:text-primary transition-colors duration-300"
            href="/#contact"
          >
            Contact
          </Link>
        </div>
        <button className="bg-primary text-on-primary-container px-6 py-2 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary/90 active:scale-95 transition-all duration-300 rounded-sm">
          Resume
        </button>
      </div>
    </nav>
  );
}
