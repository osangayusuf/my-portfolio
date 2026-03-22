

export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant/15 w-full py-12">
      <div className="max-w-7xl mx-auto px-8 flex justify-center items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-bold text-primary font-headline">
            Osanga Yusuf
          </span>
          <p className="font-body text-sm leading-relaxed text-white/50 italic">
            © {new Date().getFullYear()} Osanga Yusuf. Engineered with
            precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
