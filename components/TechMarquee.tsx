export default function TechMarquee() {
  return (
    <section className="py-24 border-y border-outline-variant/10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
          <span className="font-headline font-bold text-2xl tracking-tight">PHP / LARAVEL</span>
          <span className="font-headline font-bold text-2xl tracking-tight text-primary">JAVASCRIPT / ES6+</span>
          <span className="font-headline font-bold text-2xl tracking-tight">REACT / NEXT.JS</span>
          <span className="font-headline font-bold text-2xl tracking-tight text-secondary">VUE / NUXT.JS</span>
          <span className="font-headline font-bold text-2xl tracking-tight">TAILWIND CSS</span>
          <span className="font-headline font-bold text-2xl tracking-tight text-tertiary">SQL / POSTGRES / MONGODB</span>
          <span className="font-headline font-bold text-2xl tracking-tight">DOCKER / AZURE</span>
        </div>
      </div>
    </section>
  );
}
