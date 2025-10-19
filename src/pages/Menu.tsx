import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import cake1 from "@/assets/cake-1.jpg";
import pastries1 from "@/assets/pastries-1.jpg";
import bread1 from "@/assets/bread-1.jpg";
import cookies1 from "@/assets/cookies-1.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Cakes", "Pastries", "Breads", "Cookies", "Snacks"];

  const menuItems = [
    {
      category: "Cakes",
      image: cake1,
      name: "Custom Birthday Cake",
      description: "Beautiful layered cakes decorated with fresh flowers and berries",
      price: "$45.99",
    },
    {
      category: "Cakes",
      image: cake1,
      name: "Wedding Cake",
      description: "Elegant multi-tier cakes for your special day",
      price: "$250.00+",
    },
    {
      category: "Cakes",
      image: cake1,
      name: "Chocolate Layer Cake",
      description: "Rich chocolate layers with creamy frosting",
      price: "$38.99",
    },
    {
      category: "Pastries",
      image: pastries1,
      name: "Butter Croissants",
      description: "Classic French croissants, light and flaky",
      price: "$4.99",
    },
    {
      category: "Pastries",
      image: pastries1,
      name: "Pain au Chocolat",
      description: "Croissant pastry filled with rich chocolate",
      price: "$5.49",
    },
    {
      category: "Pastries",
      image: pastries1,
      name: "Fruit Danish",
      description: "Sweet pastry topped with seasonal fruits",
      price: "$5.99",
    },
    {
      category: "Breads",
      image: bread1,
      name: "Artisan Sourdough",
      description: "Traditional sourdough with perfect crust",
      price: "$8.99",
    },
    {
      category: "Breads",
      image: bread1,
      name: "Whole Wheat Bread",
      description: "Healthy and hearty whole grain bread",
      price: "$6.99",
    },
    {
      category: "Breads",
      image: bread1,
      name: "Baguette",
      description: "Classic French baguette, crusty outside, soft inside",
      price: "$4.99",
    },
    {
      category: "Cookies",
      image: cookies1,
      name: "French Macarons",
      description: "Delicate almond cookies in various flavors",
      price: "$2.50",
    },
    {
      category: "Cookies",
      image: cookies1,
      name: "Chocolate Chip Cookies",
      description: "Classic cookies with gooey chocolate chips",
      price: "$3.99",
    },
    {
      category: "Cookies",
      image: cookies1,
      name: "Oatmeal Raisin Cookies",
      description: "Chewy cookies with oats and sweet raisins",
      price: "$3.99",
    },
    {
      category: "Snacks",
      image: pastries1,
      name: "Cinnamon Rolls",
      description: "Soft rolls with cinnamon sugar and cream cheese frosting",
      price: "$4.99",
    },
    {
      category: "Snacks",
      image: bread1,
      name: "Pretzel Rolls",
      description: "Soft pretzel bread perfect for sandwiches",
      price: "$3.49",
    },
    {
      category: "Snacks",
      image: cookies1,
      name: "Muffins (Assorted)",
      description: "Fresh muffins in blueberry, chocolate, and banana varieties",
      price: "$3.99",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
            Our Menu
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Explore our delicious selection of freshly baked goods
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-4 py-20">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              onClick={() => setActiveCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
