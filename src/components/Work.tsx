const projects = [
  {
    title: "Workforce product and operations tooling",
    company: "Honor",
    description: "Leading product for core workforce and operator experiences, including caregiver hiring and onboarding and internal tooling that supports service delivery at scale.",
    year: "2025",
  },
  {
    title: "VA line of business, 0→1 foundations",
    company: "Honor",
    description: "Initiated the product scoping and early build for Honor's VA-related business—defining the MVP, operational workflows, and launch approach for what is now an active program.",
    year: "2025",
  },
  {
    title: "Food-as-medicine platform",
    company: "Season Health",
    description: "Built and scaled a chronic-condition platform and curated marketplace with enterprise customers and strong clinical and engagement outcomes.",
    year: "2024",
  },
  {
    title: "Marketplace growth and retention",
    company: "Season Health",
    description: "Led improvements to core marketplace mechanics—selection, merchandising, and ordering—to increase early ordering and improve retention.",
    year: "2023",
  },
  {
    title: "Whole Foods e-commerce transformation",
    company: "Whole Foods Market",
    description: "Led the organization responsible for WFM e-commerce P&L and digital product strategy; drove operating-model transitions and major cost improvement.",
    year: "2021",
  },
  {
    title: "Prime grocery delivery benefit",
    company: "Amazon",
    description: "Wrote the strategy and led the launch work that made grocery delivery a Prime benefit—designed for uncertain demand and operational constraints.",
    year: "2019",
  },
  {
    title: "Retail automation platform",
    company: "AmazonFresh",
    description: "Built tools and automation across selection, forecasting, procurement, and merchandising—reducing manual work and enabling expansion.",
    year: "2018",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Recent work
          </h2>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="py-10 border-t border-border last:border-b"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-1">
                  <span className="text-sm font-body text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-body text-primary">
                    {project.company}
                  </span>
                  <span className="ml-auto font-body text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground">
                  {project.title}
                </h3>
                
                <p className="font-body text-muted-foreground max-w-2xl">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
