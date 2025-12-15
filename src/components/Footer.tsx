const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Noah Levin. All rights reserved.
        </p>
        
        <p className="font-body text-sm text-muted-foreground">
          Designed & built with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
