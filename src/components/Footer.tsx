import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    toast.success("Thanks for subscribing to our newsletter!");
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-secondary/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Sweet Sensations</h3>
            <p className="text-muted-foreground mb-4">
              Freshly baked goods made with love and the finest ingredients. Creating sweet memories since 2020.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="text-muted-foreground hover:text-primary transition-smooth">
                  Menu
                </a>
              </li>
              <li>
                <a href="/order" className="text-muted-foreground hover:text-primary transition-smooth">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe for weekly specials and baking tips!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1"
              />
              <Button type="submit" variant="default">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sweet Sensations Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
