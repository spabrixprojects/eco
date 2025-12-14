import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your electrical products. Please share details.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-electric relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Order?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Get instant quotes and place your order directly on WhatsApp. 
          Our team responds within minutes during business hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="charcoal" 
            size="xl" 
            onClick={handleWhatsAppClick}
          >
            Start Order on WhatsApp
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            asChild
          >
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Mon - Sat: 9:00 AM - 7:00 PM • Quick response guaranteed
        </p>
      </div>
    </section>
  );
};

export default CTASection;
