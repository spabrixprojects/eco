import { Award, Users, Clock, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const stats = [
  { icon: Clock, value: '14+', label: 'Years Experience' },
  { icon: Users, value: '5000+', label: 'Happy Customers' },
  { icon: Award, value: '50+', label: 'Trusted Brands' },
  { icon: MapPin, value: '100+', label: 'Kerala Locations' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-electric/20 text-electric-light text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Trusted Electrical & Hardware Partner
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Since 2010, we've been supplying quality electrical and plumbing products 
              to homes, shops, and contractors across Kerala. Our commitment to genuine 
              products and excellent service has made us the preferred choice for 
              thousands of customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-electric mx-auto mb-3 flex items-center justify-center shadow-electric">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Trust, One Product at a Time
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small electrical shop in Kochi has grown into one of 
                  the most trusted suppliers of electrical and hardware products. Our 
                  founder's vision was simple: provide genuine products at fair prices with
                  honest service.
                </p>
                <p>
                  Today, we serve thousands of customers including homeowners, electricians, 
                  contractors, and businesses. We stock products from over 50 trusted brands, 
                  ensuring you always get quality that lasts.
                </p>
                <p>
                  Our WhatsApp-first approach makes ordering easy. Simply message us, get 
                  instant quotes, and have products delivered to your doorstep across Kerala.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
                  alt="Electrical store interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border">
                <p className="font-display font-bold text-2xl text-primary">Since 2010</p>
                <p className="text-sm text-muted-foreground">Serving Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                Quality First
              </h3>
              <p className="text-muted-foreground">
                We only stock genuine products from authorized distributors. 
                No compromises on quality, ever.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                Customer Focus
              </h3>
              <p className="text-muted-foreground">
                From quick WhatsApp responses to after-sales support, 
                your satisfaction is our priority.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                Fair Pricing
              </h3>
              <p className="text-muted-foreground">
                Competitive prices without hidden costs. Special rates 
                for bulk and contractor orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Brands We Trust
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We partner with India's leading electrical and hardware brands to bring you 
            the best products with full warranty support.
          </p>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {['Havells', 'Philips', 'Anchor', 'Legrand', 'Syska', 'Crompton', 'Bosch', 'Supreme'].map((brand) => (
              <div
                key={brand}
                className="px-8 py-4 bg-card rounded-xl border border-border text-foreground font-display font-semibold"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
