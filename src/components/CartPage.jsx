import React, { useState } from 'react';

export default function CartPage({ 
  cart, 
  onAddToCart, 
  onRemoveFromCart, 
  couponApplied, 
  onApplyCoupon, 
  onRemoveCoupon, 
  deliveryTip, 
  onSelectTip, 
  isSignedIn, 
  onCheckout, 
  onLogin, 
  onBrowseFood,
  onContinueShopping
}) {
  const [couponCode, setCouponCode] = useState('');
  const [cookingInstructions, setCookingInstructions] = useState('');
  const [couponError, setCouponError] = useState('');

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.item.price * item.quantity), 0);
  const platformFee = cart.length > 0 ? 6 : 0;
  
  // Delivery fee is 40, free if subtotal > 250
  const deliveryFee = cart.length > 0 ? (subtotal > 250 ? 0 : 40) : 0;
  
  // GST & Taxes (5% of subtotal)
  const taxes = Math.round(subtotal * 0.05);

  // Discount calculation
  let discount = 0;
  if (couponApplied) {
    if (couponApplied.code === 'DELIVERY50') {
      discount = Math.min(Math.round(subtotal * 0.5), 100);
    } else if (couponApplied.code === 'SWIGGYIT') {
      discount = Math.min(Math.round(subtotal * 0.2), 60);
    }
  }

  const grandTotal = Math.max(subtotal + platformFee + deliveryFee + taxes + deliveryTip - discount, 0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.toUpperCase().trim();
    if (code === 'DELIVERY50') {
      onApplyCoupon({ code: 'DELIVERY50', text: '50% OFF (Up to ₹100)' });
      setCouponCode('');
      setCouponError('');
    } else if (code === 'SWIGGYIT') {
      onApplyCoupon({ code: 'SWIGGYIT', text: '20% OFF (Up to ₹60)' });
      setCouponCode('');
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try DELIVERY50 or SWIGGYIT');
    }
  };

  const handleCheckoutClick = () => {
    if (!isSignedIn) {
      onLogin(); // Prompt login modal
    } else {
      onCheckout({
        items: cart,
        subtotal,
        platformFee,
        deliveryFee,
        taxes,
        deliveryTip,
        discount,
        couponApplied,
        grandTotal,
        instructions: cookingInstructions
      });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="var(--text-light)" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet. Go ahead and explore top restaurants!</p>
        <button className="browse-btn" onClick={onBrowseFood}>Explore Restaurants</button>
      </div>
    );
  }

  const restaurantName = cart[0]?.restaurantName || "Restaurant";

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 24px' }}>
      {/* Navigation Back button */}
      <button 
        className="menu-nav-back" 
        onClick={onContinueShopping}
        style={{ marginBottom: '24px', background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 12px' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Continue Shopping / Add Items
      </button>

      <div className="cart-wrapper" style={{ margin: 0, padding: 0 }}>
        {/* Left Column: Items and Info */}
        <div className="cart-left">
          {/* Cart Items Box */}
          <div className="cart-box">
            <div className="cart-box-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3>Items from {restaurantName}</h3>
            </div>

            <div className="cart-items-container">
              {cart.map((cartItem) => (
                <div key={cartItem.item.id} className="cart-item-row">
                  <div className="cart-item-info">
                    {cartItem.item.isVeg ? <div className="veg-tag"></div> : <div className="nonveg-tag"></div>}
                    <div className="cart-item-details">
                      <span className="cart-item-name">{cartItem.item.name}</span>
                      <span className="cart-item-subtext">₹{cartItem.item.price} each</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div className="cart-qty-adjuster">
                      <button 
                        className="cart-adjust-btn"
                        onClick={() => onRemoveFromCart(cartItem.item.id)}
                      >
                        -
                      </button>
                      <span className="qty-val">{cartItem.quantity}</span>
                      <button 
                        className="cart-adjust-btn"
                        onClick={() => onAddToCart(cartItem.item, { id: cartItem.restaurantId, name: cartItem.restaurantName })}
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item-price">₹{cartItem.item.price * cartItem.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cooking Instructions Box */}
          <div className="cart-box">
            <div className="cart-box-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h3>Cooking Instructions</h3>
            </div>
            <textarea
              className="coupon-input"
              style={{ width: '100%', minHeight: '80px', resize: 'none', textTransform: 'none' }}
              placeholder="E.g., Make it spicy, Don't add onions, Leave it at the gate..."
              value={cookingInstructions}
              onChange={(e) => setCookingInstructions(e.target.value)}
            />
          </div>

          {/* Delivery Address Mock Box */}
          <div className="cart-box">
            <div className="cart-box-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3>Delivery Address</h3>
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>Home</p>
              <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>Flat 402, Royal Enclave, HSR Layout, Sector 6, Bangalore - 560102</p>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Tip */}
        <div className="cart-right">
          {/* Delivery Tip Box */}
          <div className="cart-box">
            <div className="cart-box-title" style={{ borderBottom: 'none', marginBottom: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>Tip your delivery partner</h3>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginBottom: '12px' }}>
              100% of this tip goes to your delivery partner to support their efforts.
            </p>
            <div className="tip-options">
              {[10, 20, 30, 50].map((amount) => (
                <button
                  key={amount}
                  className={`tip-btn ${deliveryTip === amount ? 'active' : ''}`}
                  onClick={() => onSelectTip(amount)}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
          </div>

          {/* Coupon Code Apply */}
          <div className="cart-box">
            <div className="cart-box-title" style={{ borderBottom: 'none', marginBottom: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m0 0v5a2 2 0 012 2h-2zm0 0H5a2 2 0 00-2 2v3m2-3h14m-14 0a2 2 0 00-2 2v3m2-3h14M3 21h18" />
              </svg>
              <h3>Apply Discount Coupon</h3>
            </div>
            {couponApplied ? (
              <div className="coupon-applied-badge">
                <div>
                  <strong>{couponApplied.code}</strong> Applied! ({couponApplied.text})
                </div>
                <button className="remove-coupon-btn" onClick={onRemoveCoupon}>REMOVE</button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon}>
                <div className="coupon-input-wrapper">
                  <input
                    type="text"
                    placeholder="Enter code (DELIVERY50, SWIGGYIT)"
                    className="coupon-input"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button type="submit" className="coupon-btn">APPLY</button>
                </div>
                {couponError && <p style={{ color: 'var(--accent-nonveg)', fontSize: '12px', marginTop: '6px' }}>{couponError}</p>}
              </form>
            )}
          </div>

          {/* Bill Breakdown Box */}
          <div className="cart-box">
            <div className="cart-box-title">
              <h3>Bill Details</h3>
            </div>

            <div className="bill-row">
              <span>Item Total</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="bill-row">
              <span>Delivery Partner Fee</span>
              <span>{deliveryFee === 0 ? <span style={{color: 'var(--accent-veg)'}}>FREE</span> : `₹${deliveryFee}`}</span>
            </div>

            <div className="bill-row">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>

            <div className="bill-row">
              <span>Taxes & Charges (5% GST)</span>
              <span>₹{taxes}</span>
            </div>

            {deliveryTip > 0 && (
              <div className="bill-row">
                <span>Delivery Partner Tip</span>
                <span>₹{deliveryTip}</span>
              </div>
            )}

            {discount > 0 && (
              <div className="bill-row savings">
                <span>Promo Discount Applied</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="bill-total-divider"></div>

            <div className="bill-row grand-total">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={handleCheckoutClick}
            >
              {isSignedIn ? 'Place Order & Pay' : 'Sign in to Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
