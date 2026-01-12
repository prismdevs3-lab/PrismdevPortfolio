import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: ["Web Development", "UI/UX Design", "Mobile Apps", "Consulting"],
    company: ["About Us", "Careers", "Blog", "Contact"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/DevsPrism57210",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prism-devs-a3788a3a5/",
    },
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/prismdevs3-lab",
    },
  ];

  // Helper function for smooth scrolling to internal sections
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-heading text-2xl font-bold text-gradient">
              PrismDev
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Building exceptional digital experiences that help businesses grow and succeed in the modern world.
            </p>
            
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link}>
                  <a 
                    href="#services" 
                    onClick={(e) => handleSmoothScroll(e, "services")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} PrismDev. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion in Lagos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;