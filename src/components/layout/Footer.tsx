import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-electric flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg">Bright</span>
                <span className="font-display font-bold text-lg text-electric-light">Fix</span>
              </div>
            </Link>
            <p className="text-steel-light text-sm leading-relaxed">
              Your trusted partner for quality electrical & plumbing products in Kerala. 
              Serving homes, shops, and contractors since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-steel-light hover:text-electric-light transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Electrical Switches', 'LED Lights', 'Plumbing Fittings', 'Home Repair Tools'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/products"
                    className="text-steel-light hover:text-electric-light transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-electric-light mt-0.5 shrink-0" />
                <span className="text-steel-light">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-electric-light mt-0.5 shrink-0" />
                <span className="text-steel-light">info@brightfix.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-electric-light mt-0.5 shrink-0" />
                <span className="text-steel-light">Main Road, Kochi, Kerala 682001</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-electric-light mt-0.5 shrink-0" />
                <span className="text-steel-light">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel text-sm">
              © 2024 BrightFix. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-steel-light text-xs">Serving all of Kerala</span>
              <span className="text-electric-light text-xs font-medium">🇮🇳 Made in India Products</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
