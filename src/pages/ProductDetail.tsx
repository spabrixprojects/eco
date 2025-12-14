import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, MessageCircle, Phone, Share2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  const handleEnquiry = () => {
    if (!product) return;
    const message = encodeURIComponent(`Hi, I'm interested in "${product.name}" (${product.brand}). Please share more details, availability, and pricing.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share && product) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at BrightFix`,
        url: window.location.href,
      });
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const usageLabels = {
    home: 'Home Use',
    commercial: 'Commercial Use',
    both: 'Home & Commercial',
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails placeholder */}
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-lg overflow-hidden bg-secondary border border-border cursor-pointer hover:border-primary transition-colors"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wide">
                  {product.brand}
                </span>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
                  {product.name}
                </h1>
              </div>
              <button
                onClick={handleShare}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Share product"
              >
                <Share2 className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.price ? (
                <span className="font-display text-3xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
              ) : (
                <span className="text-lg text-primary font-semibold">
                  {product.priceLabel || 'Request Price'}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 ${
              product.inStock 
                ? 'bg-whatsapp/10 text-whatsapp-dark' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {product.inStock ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="font-medium">In Stock</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Available on Order</span>
                </>
              )}
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="font-display font-semibold text-lg mb-3">Specifications</h3>
              <div className="bg-secondary/50 rounded-xl p-4">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="py-2.5 text-muted-foreground">Feature {index + 1}</td>
                        <td className="py-2.5 text-foreground font-medium text-right">{spec}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-border">
                      <td className="py-2.5 text-muted-foreground">Brand</td>
                      <td className="py-2.5 text-foreground font-medium text-right">{product.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-muted-foreground">Usage</td>
                      <td className="py-2.5 text-foreground font-medium text-right">{usageLabels[product.usage]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="whatsapp" size="lg" className="flex-1" onClick={handleEnquiry}>
                <MessageCircle className="w-5 h-5" />
                Send Enquiry on WhatsApp
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-whatsapp" />
                  Genuine Product
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-whatsapp" />
                  Warranty Included
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-whatsapp" />
                  Bulk Discounts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
