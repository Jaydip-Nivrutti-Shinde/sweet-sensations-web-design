import { Heart, Sparkles, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Freshness",
      description: "Everything is baked fresh daily using premium ingredients",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality, only the best for our customers",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Innovative recipes and beautiful designs that delight the senses",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to be part of this wonderful neighborhood",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            A passion for baking turned into a neighborhood favorite
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card p-12 rounded-2xl shadow-soft">
            <p className="text-lg mb-6 leading-relaxed">
              Sweet Sensations Bakery began in 2020 with a simple dream: to bring the warmth and comfort of 
              homemade baked goods to our community. What started as a small operation in a cozy kitchen has 
              blossomed into a beloved neighborhood bakery.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Our founder, inspired by generations of family baking traditions, set out to create more than just 
              a bakery – we wanted to create a place where memories are made, celebrations are enhanced, and 
              every day feels a little sweeter.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we continue to honor those traditions while embracing innovation. Every loaf of bread, 
              every pastry, and every cake is crafted with the same care and attention to detail that defined 
              our first day in business.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground text-lg">
            What makes Sweet Sensations special
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="gradient-card p-8 rounded-2xl shadow-soft text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Our talented bakers and staff work together to create magic every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Emily Martinez", role: "Master Baker & Founder" },
              { name: "James Thompson", role: "Pastry Chef" },
              { name: "Lisa Chen", role: "Cake Designer" },
            ].map((member, index) => (
              <div
                key={index}
                className="gradient-card p-8 rounded-2xl shadow-soft text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
