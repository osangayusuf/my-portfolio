"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["projects", "experience", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height and scroll buffer

      // Check if user is scrolled to the absolute bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "";
      for (const el of sectionElements) {
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = el.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    return isActive
      ? "text-primary border-b-2 border-primary pb-1 transition-all duration-300"
      : "text-white/70 hover:text-primary transition-colors duration-300 pb-1 border-b-2 border-transparent";
  };

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
            className={getLinkClass("projects")}
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className={getLinkClass("experience")}
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className={getLinkClass("contact")}
            href="/#contact"
          >
            Contact
          </Link>
        </div>
        <a
          className="bg-primary text-on-primary-container px-6 py-2 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary/90 active:scale-95 transition-all duration-300 rounded-sm"
          href="/OSANGA%20YUSUF%20CV.pdf"
          download="OSANGA YUSUF CV.pdf"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
