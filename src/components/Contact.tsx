import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Get in Touch
        </p>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8">
          Let's create something<br />
          <span className="italic text-primary">meaningful</span> together
        </h2>
        
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:hello@noahlevin.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-body text-sm hover:bg-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@noahlevin.com
          </a>
          
          <div className="flex items-center gap-4">
            {[
              { name: "LinkedIn", url: "#" },
              { name: "Twitter", url: "#" },
              { name: "Dribbble", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="group inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
