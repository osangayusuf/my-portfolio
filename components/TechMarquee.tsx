export default function TechMarquee() {
  return (
    <section className="py-24 border-y border-outline-variant/10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700 font-headline font-bold text-2xl tracking-tight">
          <span className="text-center">PHP / LARAVEL</span>
          <span className="text-primary text-center">
            JAVASCRIPT / ES6+
          </span>
          <span className="text-center">
            REACT / NEXT.JS
          </span>
          <span className="text-secondary text-center">
            VUE / NUXT.JS
          </span>
          <span className="text-center">
            TAILWIND CSS
          </span>
          <span className="text-tertiary text-center">
            SQL / POSTGRES / MONGODB
          </span>
          <span className="">
            DOCKER / AZURE
          </span>
        </div>
      </div>
    </section>
  );
}
