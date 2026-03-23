
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct, getProductQuantities } from '@/api/EcommerceApi';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Loader2, ArrowLeft, CheckCircle, Minus, Plus, XCircle, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = useCallback(async () => {
    if (product && selectedVariant) {
      const availableQuantity = selectedVariant.inventory_quantity;
      try {
        await addToCart(product, selectedVariant, quantity, availableQuantity);
        toast({
          title: "Added to Cart",
          description: `${quantity} x ${product.title} (${selectedVariant.title}) added.`,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Cannot add to cart",
          description: error.message,
        });
      }
    }
  }, [product, selectedVariant, quantity, addToCart, toast]);

  const handleQuantityChange = useCallback((amount) => {
    setQuantity(prevQuantity => {
        const newQuantity = prevQuantity + amount;
        if (newQuantity < 1) return 1;
        return newQuantity;
    });
  }, []);

  const handlePrevImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1);
    }
  }, [product?.images?.length]);

  const handleNextImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex(prev => prev === product.images.length - 1 ? 0 : prev + 1);
    }
  }, [product?.images?.length]);

  const handleVariantSelect = useCallback((variant) => {
    setSelectedVariant(variant);

    if (variant.image_url && product?.images?.length > 0) {
      const imageIndex = product.images.findIndex(image => image.url === variant.image_url);

      if (imageIndex !== -1) {
        setCurrentImageIndex(imageIndex);
      }
    }
  }, [product?.images]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await getProduct(id);

        try {
          const quantitiesResponse = await getProductQuantities({
            fields: 'inventory_quantity',
            product_ids: [fetchedProduct.id]
          });

          const variantQuantityMap = new Map();
          quantitiesResponse.variants.forEach(variant => {
            variantQuantityMap.set(variant.id, variant.inventory_quantity);
          });

          const productWithQuantities = {
            ...fetchedProduct,
            variants: fetchedProduct.variants.map(variant => ({
              ...variant,
              inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
            }))
          };

          setProduct(productWithQuantities);

          if (productWithQuantities.variants && productWithQuantities.variants.length > 0) {
            setSelectedVariant(productWithQuantities.variants[0]);
          }
        } catch (quantityError) {
          throw quantityError;
        }
      } catch (err) {
        setError(err.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Link to="/products" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <div className="text-center text-destructive p-12 bg-card rounded-2xl border border-border">
            <XCircle className="mx-auto h-16 w-16 mb-4 opacity-80" />
            <p className="text-lg mb-6">Error loading product: {error}</p>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
              <Link to="/products">Return to Shop</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const price = selectedVariant?.sale_price_formatted ?? selectedVariant?.price_formatted;
  const originalPrice = selectedVariant?.price_formatted;
  const availableStock = selectedVariant ? selectedVariant.inventory_quantity : 0;
  const isStockManaged = selectedVariant?.manage_inventory ?? false;
  const canAddToCart = !isStockManaged || quantity <= availableStock;

  const currentImage = product.images[currentImageIndex];
  const hasMultipleImages = product.images.length > 1;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Helmet>
        <title>{product.title} - BaldShield</title>
        <meta name="description" content={product.description?.substring(0, 160) || product.title} />
      </Helmet>
      
      <Header />

      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 font-medium">
            <ArrowLeft size={16} />
            Back to Collection
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-square md:aspect-[4/3] lg:aspect-square">
                <img
                  src={!currentImage?.url ? placeholderImage : currentImage.url}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {product.ribbon_text && (
                  <div className="absolute top-6 left-6 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                    {product.ribbon_text}
                  </div>
                )}
              </div>

              {hasMultipleImages && (
                <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 snap-start ${
                        index === currentImageIndex ? 'border-primary ring-2 ring-primary/20 ring-offset-2 ring-offset-black' : 'border-border opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={!image.url ? placeholderImage : image.url}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {product.title}
                </h1>
                {product.subtitle && (
                  <p className="text-xl text-secondary mb-6">{product.subtitle}</p>
                )}

                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-primary">{price}</span>
                  {selectedVariant?.sale_price_in_cents && (
                    <span className="text-2xl text-muted-foreground line-through">{originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="prose prose-invert prose-lg text-secondary mb-10" dangerouslySetInnerHTML={{ __html: product.description }} />

              {/* Variants */}
              {product.variants.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Select Option</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map(variant => (
                      <button
                        key={variant.id}
                        onClick={() => handleVariantSelect(variant)}
                        className={`px-6 py-3 rounded-lg border font-medium transition-all duration-200 ${
                          selectedVariant?.id === variant.id 
                            ? 'bg-primary border-primary text-white' 
                            : 'bg-card border-border text-foreground hover:border-primary/50'
                        }`}
                      >
                        {variant.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Section */}
              <div className="bg-card border border-border rounded-2xl p-6 mb-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center justify-between border border-border rounded-lg p-1 bg-black sm:w-32">
                    <button 
                      onClick={() => handleQuantityChange(-1)} 
                      className="p-2 text-secondary hover:text-primary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="w-10 text-center text-foreground font-semibold text-lg">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)} 
                      className="p-2 text-secondary hover:text-primary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  <Button 
                    onClick={handleAddToCart} 
                    size="lg" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" 
                    disabled={!canAddToCart || !product.purchasable}
                  >
                    <ShoppingCart className="mr-3 h-5 w-5" /> 
                    Add to Cart
                  </Button>
                </div>

                {/* Stock Status */}
                <div className="mt-4 text-center sm:text-left">
                  {isStockManaged && canAddToCart && product.purchasable && (
                    <p className="text-sm text-emerald-500 flex items-center justify-center sm:justify-start gap-2 font-medium">
                      <CheckCircle size={16} /> In Stock ({availableStock} available)
                    </p>
                  )}

                  {isStockManaged && !canAddToCart && product.purchasable && (
                     <p className="text-sm text-primary flex items-center justify-center sm:justify-start gap-2 font-medium">
                      <XCircle size={16} /> Only {availableStock} left in stock
                    </p>
                  )}

                  {!product.purchasable && (
                      <p className="text-sm text-destructive flex items-center justify-center sm:justify-start gap-2 font-medium">
                        <XCircle size={16} /> Currently unavailable
                      </p>
                  )}
                </div>
              </div>

              {/* Additional Info Accordion/List */}
              {product.additional_info?.length > 0 && (
                <div className="space-y-6 border-t border-border pt-8">
                  {product.additional_info
                    .sort((a, b) => a.order - b.order)
                    .map((info) => (
                      <div key={info.id} className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          <Shield className="w-5 h-5 text-primary" />
                          {info.title}
                        </h3>
                        <div className="prose prose-invert prose-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: info.description }} />
                      </div>
                    ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;
