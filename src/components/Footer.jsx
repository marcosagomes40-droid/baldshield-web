import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Subscribed',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                BaldShield
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium sun protection designed specifically for bald heads. Stay protected in style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:support@baldshield.com"
                className="flex items-center text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@baldshield.com
              </a>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new products and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BaldShield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;