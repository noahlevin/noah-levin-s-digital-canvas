import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Meridian",
    category: "Brand & Web Design",
    description: "A complete brand identity and website for a climate tech startup.",
    year: "2024",
  },
  {
    title: "Atelier",
    category: "Product Design",
    description: "Redesigning the core experience for a creative collaboration platform.",
    year: "2023",
  },
  {
    title: "Lumina",
    category: "Web Development",
    description: "A performant e-commerce experience built with modern web technologies.",
    year: "2023",
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
            Recent projects
          </h2>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group py-10 border-t border-border last:border-b cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-body text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-body text-primary">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="mt-2 font-body text-muted-foreground max-w-lg">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <span className="font-body text-sm text-muted-foreground">
                    {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                    <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
