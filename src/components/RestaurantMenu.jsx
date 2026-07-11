import React, { useState, useMemo } from 'react';

export default function RestaurantMenu({ 
  restaurant, 
  cart, 
  onAddToCart, 
  onRemoveFromCart, 
  onBack 
}) {
  const [menuSearchQuery, setMenuSearchQuery] = useState('');
  const [vegOnlyMenu, setVegOnlyMenu] = useState(false);

  // Filter items in the menu based on search and veg toggle
  const filteredMenu = useMemo(() => {
    if (!restaurant || !restaurant.menu) return [];

    return restaurant.menu.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(menuSearchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(menuSearchQuery.toLowerCase());
      
      const matchesVeg = vegOnlyMenu ? item.isVeg : true;

      return matchesSearch && matchesVeg;
    });
  }, [restaurant, menuSearchQuery, vegOnlyMenu]);

  // Group items by category (for mockup, we can group by Veg / Non-Veg or keep it all under "Recommended" / "All Dishes")
  const categories = useMemo(() => {
    const bestsellers = filteredMenu.filter(item => item.isBestseller);
    const regularItems = filteredMenu.filter(item => !item.isBestseller);

    const cats = [];
    if (bestsellers.length > 0) {
      cats.push({ name: "Bestsellers", items: bestsellers });
    }
    if (regularItems.length > 0) {
      cats.push({ name: "All Dishes", items: regularItems });
    }
    return cats;
  }, [filteredMenu]);

  // Helper to check item quantity in cart
  const getItemQty = (itemId) => {
    const cartItem = cart.find(c => c.item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  if (!restaurant) return null;

  return (
    <div>
      {/* Restaurant Info Header */}
      <div className="menu-banner">
        <div className="menu-banner-inner">
          <button className="menu-nav-back" onClick={onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Restaurants
          </button>
          
          <div className="menu-rest-header">
            <div className="menu-rest-info">
              <h1>{restaurant.name}</h1>
              <p>{restaurant.cuisines.join(', ')}</p>
              <p>{restaurant.address}</p>
            </div>
            
            <div className="menu-rating-card">
              <div className="menu-rating-value">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                {restaurant.rating}
              </div>
              <div className="menu-rating-count">100+ ratings</div>
            </div>
          </div>

          <div className="menu-rest-details">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {restaurant.deliveryTime} MINS
            </span>
            <span>|</span>
            <span>₹{restaurant.costForTwo} FOR TWO</span>
          </div>
        </div>

        {/* Search & Veg toggle inside menu */}
        <div className="menu-search-row">
          <div className="menu-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--text-light)" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder={`Search in ${restaurant.name}...`} 
              value={menuSearchQuery}
              onChange={(e) => setMenuSearchQuery(e.target.value)}
            />
          </div>

          <button 
            className={`veg-toggle-wrapper ${vegOnlyMenu ? 'active' : ''}`}
            onClick={() => setVegOnlyMenu(!vegOnlyMenu)}
          >
            <span>Veg Only</span>
            <div className="toggle-switch">
              <div className="toggle-dot"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Sections and Items */}
      <div className="menu-container">
        {categories.length > 0 ? (
          categories.map((cat, cIdx) => (
            <div key={cIdx} className="menu-section">
              <h2 className="menu-section-title">
                {cat.name} ({cat.items.length})
              </h2>
              
              <div className="menu-items-list">
                {cat.items.map((item) => {
                  const qty = getItemQty(item.id);
                  return (
                    <div key={item.id} className="menu-item-card">
                      <div className="item-details">
                        {item.isVeg ? <div className="veg-tag" title="Vegetarian"></div> : <div className="nonveg-tag" title="Non-Vegetarian"></div>}
                        
                        <h3 className="item-name">
                          {item.name}
                          {item.isBestseller && <span className="bestseller-badge">Bestseller</span>}
                        </h3>
                        
                        <div className="item-price">₹{item.price}</div>
                        <p className="item-desc">{item.description}</p>
                      </div>

                      <div className="item-action-wrapper">
                        {item.image && <img src={item.image} alt={item.name} className="item-img" loading="lazy" />}
                        
                        <div className="item-btn-container">
                          {qty > 0 ? (
                            <div className="qty-btn-group">
                              <button 
                                className="qty-btn" 
                                onClick={() => onRemoveFromCart(item.id)}
                              >
                                -
                              </button>
                              <span className="qty-val">{qty}</span>
                              <button 
                                className="qty-btn" 
                                onClick={() => onAddToCart(item, restaurant)}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button 
                              className="add-btn"
                              onClick={() => onAddToCart(item, restaurant)}
                            >
                              ADD
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state" style={{ background: 'white' }}>
            <h3>No menu items found</h3>
            <p>Try resetting the search or veg-only filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
