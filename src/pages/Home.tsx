import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import heroBakery from "@/assets/hero-bakery.jpg";
import cake1 from "@/assets/cake-1.jpg";
import pastries1 from "@/assets/pastries-1.jpg";
import bread1 from "@/assets/bread-1.jpg";
import cookies1 from "@/assets/cookies-1.jpg";

const Home = () => {
  const featuredProducts = [
    {
      image: cake1,
      name: "Custom Birthday Cake",
      description: "Beautiful layered cakes decorated with fresh flowers and berries",
      price: "$45.99",
    },
    {
      image: pastries1,
      name: "Fresh Croissants",
      description: "Buttery, flaky croissants baked fresh every morning",
      price: "$4.99",
    },
    {
      image: bread1,
      name: "Artisan Sourdough",
      description: "Traditional sourdough with a perfect crust and tender crumb",
      price: "$8.99",
    },
    {
      image: cookies1,
      name: "French Macarons",
      description: "Delicate almond meringue cookies in assorted flavors",
      price: "$2.50",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBakery}
            alt="Fresh baked goods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Freshly Baked with{" "}
              <span className="text-primary">Love</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Artisanal baked goods crafted daily using the finest ingredients. Experience the taste of tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button asChild size="lg" variant="default">
                <Link to="/menu">
                  View Our Menu <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="hero">
                <Link to="/order">Order Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">Featured Favorites</h2>
          <p className="text-muted-foreground text-lg">
            Our most popular items, loved by our customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Today's Special */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-card/80 px-6 py-3 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold">Today's Special</span>
            </div>
            <h2 className="font-display text-4xl font-bold mb-6">
              20% Off All Pastries
            </h2>
            <p className="text-lg mb-8">
              Start your morning right with our buttery croissants, Danish pastries, and pain au chocolat. 
              Fresh from the oven, perfect with your coffee!
            </p>
            <Button asChild size="lg" variant="default">
              <Link to="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              text: "The best birthday cake we've ever had! Beautiful decoration and absolutely delicious.",
            },
            {
              name: "Michael Chen",
              text: "Their croissants are to die for. I come here every morning for my coffee and pastry fix.",
            },
            {
              name: "Emma Wilson",
              text: "Amazing artisan breads and the most friendly staff. This bakery is a neighborhood treasure!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-2xl shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
