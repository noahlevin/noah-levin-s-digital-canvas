const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <p className="animate-fade-up text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Designer & Developer
        </p>
        
        <h1 className="animate-fade-up animation-delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 text-balance">
          Noah Levin
        </h1>
        
        <p className="animate-fade-up animation-delay-200 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting thoughtful digital experiences at the intersection of design and technology.
        </p>
        
        <div className="animate-fade-up animation-delay-300 mt-12">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            View selected work
            <svg
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
