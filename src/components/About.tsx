const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              A bit about me
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm a designer and developer passionate about creating digital experiences 
              that feel both intuitive and memorable. With over a decade of experience, 
              I've had the privilege of working with startups and established companies alike.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              My approach blends strategic thinking with meticulous attention to detail. 
              I believe the best digital products are those that respect users' time and 
              intelligence while delighting them with thoughtful touches.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Currently based in San Francisco, I'm always interested in meaningful 
              collaborations and new challenges.
            </p>
            
            <div className="pt-6 flex flex-wrap gap-3">
              {["Product Design", "Web Development", "Brand Strategy", "Creative Direction"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-body text-secondary-foreground bg-secondary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
