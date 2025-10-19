import cake1 from "@/assets/cake-1.jpg";
import pastries1 from "@/assets/pastries-1.jpg";
import bread1 from "@/assets/bread-1.jpg";
import cookies1 from "@/assets/cookies-1.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";

const Gallery = () => {
  const images = [
    { src: cake1, alt: "Beautiful birthday cake with flowers" },
    { src: pastries1, alt: "Fresh croissants and pastries" },
    { src: bread1, alt: "Artisan sourdough loaves" },
    { src: cookies1, alt: "Colorful French macarons" },
    { src: heroBakery, alt: "Fresh baked goods display" },
    { src: cake1, alt: "Wedding cake design" },
    { src: pastries1, alt: "Assorted Danish pastries" },
    { src: bread1, alt: "Rustic bread selection" },
    { src: cookies1, alt: "Cookie assortment" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            A visual feast of our artisanal creations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover-lift aspect-square animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-card font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="gradient-card p-12 rounded-2xl shadow-soft text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4">
            Love What You See?
          </h2>
          <p className="text-muted-foreground mb-8">
            Order your custom cake or try our daily specials. We're ready to make your celebrations sweeter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/order" className="inline-block">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-hover transition-smooth h-10 px-4 py-2 rounded-md text-sm font-medium">
                Order Online
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-hover transition-smooth h-10 px-4 py-2 rounded-md text-sm font-medium">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
