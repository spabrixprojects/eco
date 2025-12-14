import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const serviceAreas = [
  'Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 
  'Kollam', 'Palakkad', 'Alappuzha', 'Kannur',
  'Kottayam', 'Malappuram', 'Pathanamthitta', 'Idukki'
];

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your electrical products. Please share details.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-electric/20 text-electric-light text-sm font-medium mb-4">
            Contact Us
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions? Need a quote? We're here to help. 
            Reach out via WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* WhatsApp - Primary */}
                <div className="bg-whatsapp/10 rounded-2xl p-6 border border-whatsapp/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-whatsapp flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp (Fastest)</h3>
                      <p className="text-muted-foreground mb-3">Click to chat with us directly</p>
                      <Button variant="whatsapp" onClick={handleWhatsAppClick}>
                        Chat on WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-electric flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-primary hover:underline">
                        +91 98765 43210
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Call during business hours</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-electric flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@brightfix.in" className="text-primary hover:underline">
                        info@brightfix.in
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">For bulk enquiries & partnerships</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-electric flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Main Road, Near Town Hall<br />
                        Kochi, Kerala 682001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-electric flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Service Areas
              </h2>
              <p className="text-muted-foreground mb-6">
                We deliver across all districts in Kerala. Here are our primary service areas 
                with same-day or next-day delivery options.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="px-4 py-3 bg-card rounded-xl border border-border text-center text-sm font-medium text-foreground hover:border-primary/30 transition-colors"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Delivery Note</h3>
                <p className="text-sm text-muted-foreground">
                  For locations outside these areas, please contact us on WhatsApp. 
                  We arrange courier delivery across Kerala with additional shipping charges.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-secondary border border-border">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                  alt="Kerala map"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
