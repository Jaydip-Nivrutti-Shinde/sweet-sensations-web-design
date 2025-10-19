interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  return (
    <div className="group gradient-card rounded-2xl overflow-hidden shadow-soft hover-lift">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <p className="text-primary font-bold text-lg">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
