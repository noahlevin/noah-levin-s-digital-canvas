import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Get in touch
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              If you're building something in the real world—services, marketplaces, or ops-heavy product—send me a note with a concrete ask.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href="mailto:noah@noahlevin.com"
                className="group inline-flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                noah@noahlevin.com
              </a>
              
              <a
                href="https://linkedin.com/in/noahlevin"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/noahlevin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
