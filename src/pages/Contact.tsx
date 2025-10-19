import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            We'd love to hear from you! Reach out with any questions or special requests.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 gradient-card p-6 rounded-xl shadow-soft">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Bakery Street<br />
                    Sweet Town, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 gradient-card p-6 rounded-xl shadow-soft">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 gradient-card p-6 rounded-xl shadow-soft">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@sweetsensations.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 gradient-card p-6 rounded-xl shadow-soft">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p>Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Send Us A Message</h2>
            <form onSubmit={handleSubmit} className="gradient-card p-8 rounded-2xl shadow-soft">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input id="contact-name" name="name" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input id="contact-email" name="email" type="email" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input id="contact-phone" name="phone" type="tel" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us how we can help you..."
                    className="mt-2 min-h-40"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="gradient-card rounded-2xl shadow-soft overflow-hidden h-96">
          <iframe
            title="Bakery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e2a8d55%3A0x6a7f7b9a6a11e0c0!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
