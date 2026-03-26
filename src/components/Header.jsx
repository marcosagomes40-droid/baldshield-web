import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/hooks/useCart';
import ShoppingCart from '@/components/ShoppingCart.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/products' },
    { name: 'Benefícios', path: '/benefits' },
    { name: 'Contato', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-black/90 border-b border-border/40 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <img
            src="/logo.png"

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-secondary hover:text-foreground'
                  }`}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-[37px] left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Abrir carrinho"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* CTA */}
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                <Link to="/products">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Quero ser avisado
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Abrir carrinho"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-200"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4 border-t border-border/40">

                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-base font-medium transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'text-primary'
                          : 'text-secondary hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 active:scale-[0.98]"
                  >
                    <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Quero ser avisado
                    </Link>
                  </Button>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Header;
