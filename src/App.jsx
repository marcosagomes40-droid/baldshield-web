import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import BenefitsPage from './pages/BenefitsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/hooks/useCart.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="text-center">
                  <h1
                    className="text-6xl font-bold text-primary mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    404
                  </h1>
                  <p className="text-xl text-secondary mb-8">Page not found</p>
                  <a href="/" className="text-primary hover:text-primary/80 underline">
                    Back to home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;
