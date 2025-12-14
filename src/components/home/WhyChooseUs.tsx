import { Shield, IndianRupee, Users, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Genuine Products',
    description: 'We only stock 100% authentic products from authorized distributors with proper warranties.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Pricing',
    description: 'Best prices in Kerala with special rates for bulk orders and contractor projects.',
  },
  {
    icon: Users,
    title: 'Bulk & Contractor Support',
    description: 'Dedicated support for electricians and contractors with project pricing and priority delivery.',
  },
  {
    icon: MessageCircle,
    title: 'Fast WhatsApp Response',
    description: 'Quick replies on WhatsApp for quotes, availability, and order tracking.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BrightFix?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of electricians, contractors, and homeowners across Kerala
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-electric flex items-center justify-center mb-4 shadow-electric group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
