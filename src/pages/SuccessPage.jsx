import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useCart } from '@/hooks/useCart';

const SuccessPage = () => {
  const { clearCart } = useCart();

  // Ensure cart is cleared when landing on success page
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Helmet>
        <title>Order Confirmed - BaldShield</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black flex flex-col">
        <Header />

        <main className="flex-grow flex items-center justify-center py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                  className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle className="w-12 h-12 text-primary" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Thank you for your order!
                </h1>
                
                <p className="text-xl text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
                  Your premium sun protection is on its way. We've sent a confirmation email with your order details and tracking information.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 h-auto transition-all duration-200 active:scale-[0.98]"
                  >
                    <Link to="/products">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-semibold px-8 py-6 h-auto transition-all duration-200 active:scale-[0.98]"
                  >
                    <Link to="/">
                      Return Home
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SuccessPage;