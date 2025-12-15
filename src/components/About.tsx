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
              I'm a product and operations leader based in Austin. I build products where software and operational execution are tightly coupled—then align teams around clear goals, metrics, and a path to measurable results.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm currently VP Product at Honor, building technology that helps people age at home. My scope includes caregiver hiring and onboarding, operator tooling, and the product systems that connect day-to-day execution to unit economics. Previously at Honor, I initiated the product scoping and early build for the company's VA-related line of business, which is now an active program.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Previously, I was Chief Product Officer at Season Health, where we built a food-as-medicine platform and curated marketplace. Before that, I led Whole Foods Market's e-commerce and product organization—owning the e-commerce P&L and product roadmap—and earlier at Amazon I led products across Fresh / Prime Now, including the work that made grocery delivery a Prime benefit.
            </p>
            
            <div className="pt-6 flex flex-wrap gap-3">
              {["Product Strategy", "Operations", "Marketplaces", "Workforce Tech", "AI / ML", "Org Design", "Unit Economics"].map((skill) => (
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
