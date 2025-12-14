import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your electrical products. Please share details.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-electric flex items-center justify-center shadow-electric">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-lg text-foreground">Bright</span>
                <span className="font-display font-bold text-lg text-electric">Fix</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <Button variant="whatsapp" onClick={handleWhatsAppClick}>
                Order on WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors relative z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <X
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-card/98 backdrop-blur-xl z-[56] lg:hidden
          border-l border-border shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pb-8 px-6">
          {/* Sidebar Header with Close Button */}
          <div className="flex items-center justify-between h-16 border-b border-border mb-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-electric flex items-center justify-center shadow-electric">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-foreground">Bright</span>
                <span className="font-display font-bold text-sm text-electric">Fix</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-secondary hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3.5 rounded-xl font-medium transition-all duration-200
                  transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                  ${location.pathname === link.path
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + index * 50}ms` : '0ms'
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Contact & CTA */}
          <div
            className={`flex flex-col gap-4 transform transition-all duration-300
              ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: isMenuOpen ? '350ms' : '0ms' }}
          >
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call us</p>
                <p className="font-medium text-foreground">+91 98765 43210</p>
              </div>
            </a>

            <Button
              variant="whatsapp"
              className="w-full py-6 text-base font-semibold shadow-whatsapp"
              onClick={() => {
                handleWhatsAppClick();
                setIsMenuOpen(false);
              }}
            >
              Order on WhatsApp
            </Button>
          </div>

          {/* Bottom tagline */}
          <div
            className={`mt-auto pt-6 border-t border-border/50 transition-all duration-300
              ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: isMenuOpen ? '450ms' : '0ms' }}
          >
            <p className="text-xs text-muted-foreground text-center">
              Quality electrical products for Kerala
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
