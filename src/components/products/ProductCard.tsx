import { Link } from 'react-router-dom';
import { MessageCircle, Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(`Hi, I'm interested in "${product.name}". Please share more details and pricing.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            Featured
          </div>
        )}
        {/* Stock Badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
          product.inStock 
            ? 'bg-whatsapp/20 text-whatsapp-dark' 
            : 'bg-muted text-muted-foreground'
        }`}>
          {product.inStock ? (
            <>
              <Check className="w-3 h-3" />
              In Stock
            </>
          ) : (
            <>
              <Clock className="w-3 h-3" />
              On Order
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</span>
        <h3 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        {/* Specs */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.specs.slice(0, 2).map((spec, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 rounded bg-secondary text-xs text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between gap-3">
          <div>
            {product.price ? (
              <span className="font-display font-bold text-lg text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
            ) : (
              <span className="text-sm text-primary font-medium">
                {product.priceLabel || 'Request Price'}
              </span>
            )}
          </div>
          <Button 
            variant="whatsapp" 
            size="sm" 
            onClick={handleEnquiry}
            className="shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
