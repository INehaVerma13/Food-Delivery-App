import React, { useState, useEffect } from 'react';
import { useFoodAuth } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import RestaurantListing from './components/RestaurantListing';
import RestaurantMenu from './components/RestaurantMenu';
import CartPage from './components/CartPage';
import OrderConfirmation from './components/OrderConfirmation';
import DineoutPage from './components/DineoutPage';
import { RESTAURANTS } from './data/restaurants';

export default function App() {
  const { user, isSignedIn, loginWithGoogle, logout } = useFoodAuth();
  
  // Navigation & Routing state
  const [view, setView] = useState('landing'); // 'landing' | 'listing' | 'menu' | 'cart' | 'confirm' | 'dineout'
  
  // Menu selection & Filtering state
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [vegOnly, setVegOnly] = useState(false);

  // Cart state
  const [cart, setCart] = useState([]);
  
  // Conflict cart modal state
  const [showConflictModal, setShowConflictModal] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);
  const [pendingRestaurant, setPendingRestaurant] = useState(null);

  // App install modal state
  const [showAppModal, setShowAppModal] = useState(false);

  // Checkout adjustments
  const [couponApplied, setCouponApplied] = useState(null);
  const [deliveryTip, setDeliveryTip] = useState(0);
  const [placedOrder, setPlacedOrder] = useState(null);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedRestaurant]);

  // Handler: Add to cart
  const handleAddToCart = (item, restaurant) => {
    if (cart.length > 0 && cart[0].restaurantId !== restaurant.id) {
      setPendingItem(item);
      setPendingRestaurant(restaurant);
      setShowConflictModal(true);
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(c => c.item.id === item.id);
      if (existingItem) {
        return prevCart.map(c => 
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        return [...prevCart, { 
          item, 
          quantity: 1, 
          restaurantId: restaurant.id, 
          restaurantName: restaurant.name 
        }];
      }
    });
  };

  // Handler: Remove/decrement from cart
  const handleRemoveFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(c => c.item.id === itemId);
      if (!existingItem) return prevCart;

      if (existingItem.quantity > 1) {
        return prevCart.map(c => 
          c.item.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
        );
      } else {
        return prevCart.filter(c => c.item.id !== itemId);
      }
    });
  };

  // Resolve Cart Conflict
  const handleResolveConflict = (action) => {
    if (action === 'replace' && pendingItem && pendingRestaurant) {
      setCart([{
        item: pendingItem,
        quantity: 1,
        restaurantId: pendingRestaurant.id,
        restaurantName: pendingRestaurant.name
      }]);
    }
    setPendingItem(null);
    setPendingRestaurant(null);
    setShowConflictModal(false);
  };

  // Handler: Checkout/Place Order
  const handleCheckout = (orderDetails) => {
    const orderId = "FD-" + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      ...orderDetails,
      orderId,
      timestamp: Date.now()
    };
    
    setPlacedOrder(newOrder);
    setCart([]);
    setCouponApplied(null);
    setDeliveryTip(0);
    setView('confirm');
  };

  // Navigation click routing
  const navigateTo = (newView) => {
    setView(newView);
    if (newView === 'landing') {
      setSelectedRestaurant(null);
      setSearchQuery('');
      setCategoryFilter('All');
      setVegOnly(false);
    }
  };

  // Quick category select from landing
  const handleSelectCuisine = (cuisine) => {
    setCategoryFilter(cuisine);
    setView('listing');
  };

  // Quick search select from landing
  const handleSearchFromLanding = (query) => {
    setSearchQuery(query);
    setCategoryFilter('All');
    setView('listing');
  };

  const totalCartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="app-container">
      {/* Sticky Header Navigation */}
      <header className={`app-header ${view === 'landing' ? 'header-brand-theme' : ''}`}>
        <div className="header-inner">
          <div className="logo-container" onClick={() => navigateTo('landing')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">F</div>
            <span>Foodiez</span>
          </div>

          <nav className="nav-actions">
            <button 
              className={`nav-link ${view === 'landing' ? 'active' : ''}`}
              onClick={() => navigateTo('landing')}
            >
              Home
            </button>

            <button 
              className={`nav-link ${view === 'listing' || view === 'menu' ? 'active' : ''}`}
              onClick={() => navigateTo('listing')}
            >
              Browse Food
            </button>

            <button 
              className={`nav-link ${view === 'dineout' ? 'active' : ''}`}
              onClick={() => navigateTo('dineout')}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Dineout</span>
              <span style={{ fontSize: '9px', background: '#e0e7ff', color: '#4f46e5', padding: '1px 5px', borderRadius: '10px', fontWeight: 700 }}>NEW</span>
            </button>
            
            <button 
              className={`nav-link ${view === 'cart' ? 'active' : ''} cart-icon-wrapper`}
              onClick={() => navigateTo('cart')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Cart</span>
              {totalCartItemsCount > 0 && <span className="cart-badge">{totalCartItemsCount}</span>}
            </button>

            <button 
              className="nav-link"
              onClick={() => setShowAppModal(true)}
              style={{ color: 'var(--primary)', fontWeight: 600 }}
            >
              Open App
            </button>

            {isSignedIn ? (
              <div className="auth-profile" onClick={logout} title="Click to Sign Out">
                <img src={user.imageUrl} alt={user.fullName} className="auth-avatar" />
                <span className="auth-name">Sign Out</span>
              </div>
            ) : (
              <button className="auth-button" onClick={loginWithGoogle}>
                Sign In
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Main View Router */}
      <main className={`main-content ${view === 'landing' ? 'main-no-padding' : ''}`}>
        {view === 'landing' && (
          <LandingPage 
            onSearch={handleSearchFromLanding}
            onSelectCuisine={handleSelectCuisine}
            onViewListing={() => navigateTo('listing')}
          />
        )}

        {view === 'listing' && (
          <RestaurantListing 
            onSelectRestaurant={(rest) => {
              setSelectedRestaurant(rest);
              setView('menu');
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            vegOnly={vegOnly}
            setVegOnly={setVegOnly}
            onBackHome={() => navigateTo('landing')}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        )}

        {view === 'menu' && (
          <RestaurantMenu 
            restaurant={selectedRestaurant}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onBack={() => setView('listing')}
          />
        )}

        {view === 'cart' && (
          <CartPage 
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            couponApplied={couponApplied}
            onApplyCoupon={setCouponApplied}
            onRemoveCoupon={() => setCouponApplied(null)}
            deliveryTip={deliveryTip}
            onSelectTip={setDeliveryTip}
            isSignedIn={isSignedIn}
            onCheckout={handleCheckout}
            onLogin={loginWithGoogle}
            onBrowseFood={() => setView('listing')}
            onContinueShopping={() => {
              if (cart.length > 0) {
                const rest = RESTAURANTS.find(r => r.id === cart[0].restaurantId);
                if (rest) {
                  setSelectedRestaurant(rest);
                  setView('menu');
                } else {
                  setView('listing');
                }
              } else {
                setView('listing');
              }
            }}
          />
        )}

        {view === 'confirm' && (
          <OrderConfirmation 
            placedOrder={placedOrder}
            onBackHome={() => navigateTo('landing')}
          />
        )}

        {view === 'dineout' && (
          <DineoutPage 
            onBackHome={() => navigateTo('landing')}
          />
        )}
      </main>

      {/* Footer Branding */}
      <footer style={{ background: '#11111d', color: '#94a3b8', padding: '40px 24px', textAlign: 'center', marginTop: '60px', borderTop: '1px solid #252538' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 800, fontSize: '20px', fontFamily: 'var(--font-title)' }}>
            <span style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, lineHeight: 1 }}>F</span>
            <span>Foodiez Inc.</span>
          </div>
          <p style={{ fontSize: '13px' }}>© 2026 Foodiez Inc. Beautifully crafted Swiggy Clone app. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', marginTop: '8px' }}>
            <a href="#" style={{ color: '#cbd5e1' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#cbd5e1' }}>Terms of Service</a>
            <a href="#" style={{ color: '#cbd5e1' }}>Help Center</a>
          </div>
        </div>
      </footer>

      {/* Cart Conflict Modal Overlay */}
      {showConflictModal && (
        <div className="google-auth-overlay" style={{ zIndex: 1100 }}>
          <div className="google-auth-card" style={{ maxWidth: '420px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Replace cart items?</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.5 }}>
              Your cart contains items from <strong>{cart[0]?.restaurantName}</strong>. 
              Adding items from <strong>{pendingRestaurant?.name}</strong> will discard your current selection. 
              Do you want to proceed?
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button 
                className="checkout-btn" 
                style={{ margin: 0, flex: 1, background: 'var(--border)', color: 'var(--text-title)', border: '1px solid var(--border)' }}
                onClick={() => handleResolveConflict('cancel')}
              >
                Cancel
              </button>
              <button 
                className="checkout-btn" 
                style={{ margin: 0, flex: 1 }}
                onClick={() => handleResolveConflict('replace')}
              >
                Discard & Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Install App Popup Modal Drawer */}
      {showAppModal && (
        <div className="google-auth-overlay" style={{ zIndex: 1100 }}>
          <div className="google-auth-card" style={{ maxWidth: '400px', textAlign: 'center', padding: '32px' }}>
            <button className="google-auth-close" onClick={() => setShowAppModal(false)}>&times;</button>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📲</div>
            <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Get the Foodiez App</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: '24px' }}>
              Experience lightning-fast deliveries, Dineout reservations, and instant tracking on your mobile device.
            </p>
            
            {/* App Store Download Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              {/* App Store Badge (CSS) */}
              <a href="#" onClick={(e) => { e.preventDefault(); alert("App Store Download Initiated (Mock)"); }} style={{ display: 'flex', alignItems: 'center', background: 'black', color: 'white', padding: '10px 20px', borderRadius: '8px', width: '100%', maxWidth: '240px', gap: '12px', textDecoration: 'none' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.62.73-1.16 1.87-1.01 2.98 1.1.09 2.27-.58 2.96-1.43z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '9px', display: 'block', color: '#94a3b8' }}>Download on the</span>
                  <span style={{ fontSize: '15px', fontWeight: 700 }}>App Store</span>
                </div>
              </a>

              {/* Google Play Store Badge (CSS) */}
              <a href="#" onClick={(e) => { e.preventDefault(); alert("Google Play Download Initiated (Mock)"); }} style={{ display: 'flex', alignItems: 'center', background: 'black', color: 'white', padding: '10px 20px', borderRadius: '8px', width: '100%', maxWidth: '240px', gap: '12px', textDecoration: 'none' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#34A853">
                  <path d="M5.25 3.05c-.22.22-.38.56-.38.98v15.94c0 .42.16.76.38.98l.05.05L14.7 11.6v-.2L5.3 3z" fill="#EA4335"/>
                  <path d="M17.8 14.7l-3.1-3.1v-.2l3.1-3.1.05.03 3.65 2.1c1.05.6 1.05 1.57 0 2.17l-3.65 2.1-.05-.03z" fill="#FBBC05"/>
                  <path d="M14.7 11.4L5.3 20.1a.84.84 0 001.2 0l8.2-4.7-3-3m0-1L6.5 3.9a.84.84 0 00-1.2 0L14.7 11" fill="#4285F4"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '9px', display: 'block', color: '#94a3b8' }}>GET IT ON</span>
                  <span style={{ fontSize: '15px', fontWeight: 700 }}>Google Play</span>
                </div>
              </a>
            </div>

            <button 
              className="checkout-btn" 
              style={{ margin: '24px 0 0', width: '100%', background: 'var(--primary)' }}
              onClick={() => setShowAppModal(false)}
            >
              Continue Web Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
