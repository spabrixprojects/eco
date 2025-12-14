import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Electrical Contractor',
    location: 'Kochi',
    content: 'Best supplier for bulk orders. Quick WhatsApp responses and genuine products every time. Saves me a lot of time.',
    rating: 5,
  },
  {
    name: 'Suresh Menon',
    role: 'Home Owner',
    location: 'Thrissur',
    content: 'Renovated my entire home wiring with products from BrightFix. Great quality and competitive prices.',
    rating: 5,
  },
  {
    name: 'Mohammed Ashraf',
    role: 'Shop Owner',
    location: 'Calicut',
    content: 'Regular customer for LED lights and switches. Always get the best brands at wholesale rates.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-electric/20 text-electric-light text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Trusted by electricians, contractors, and homeowners across Kerala
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-charcoal-light rounded-2xl p-6 border border-white/10"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-electric/20" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-steel-light mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-electric flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-steel">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
