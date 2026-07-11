import React, { useState, useMemo } from 'react';
import { RESTAURANTS, CUISINES_LIST } from '../data/restaurants';

export default function RestaurantListing({ 
  onSelectRestaurant, 
  searchQuery, 
  setSearchQuery, 
  categoryFilter, 
  setCategoryFilter,
  vegOnly,
  setVegOnly,
  onBackHome,
  cart,
  onAddToCart,
  onRemoveFromCart
}) {
  const [activeTab, setActiveTab] = useState('restaurants'); // 'restaurants' | 'dishes'
  const [sortBy, setSortBy] = useState('relevance');
  
  // Advanced Swiggy Filters
  const [fastDelivery, setFastDelivery] = useState(false);
  const [highRatings, setHighRatings] = useState(false);
  const [hasOffers, setHasOffers] = useState(false);
  const [budgetFilter, setBudgetFilter] = useState('all'); // 'all' | 'under300' | '300to600'
  const [nonVegOnly, setNonVegOnly] = useState(false);

  // Helper: Veg toggling logic
  const handleVegToggle = () => {
    if (!vegOnly) {
      setVegOnly(true);
      setNonVegOnly(false);
    } else {
      setVegOnly(false);
    }
  };

  // Helper: Non-veg toggling logic
  const handleNonVegToggle = () => {
    if (!nonVegOnly) {
      setNonVegOnly(true);
      setVegOnly(false);
    } else {
      setNonVegOnly(false);
    }
  };

  // Extract all dishes from the database for the Dishes tab
  const allDishes = useMemo(() => {
    const list = [];
    RESTAURANTS.forEach(r => {
      r.menu.forEach(item => {
        list.push({
          ...item,
          restaurantId: r.id,
          restaurantName: r.name,
          restaurantRating: r.rating,
          restaurantTime: r.deliveryTime,
          restaurantObject: r // Ref to route when clicking restaurant attribution
        });
      });
    });
    return list;
  }, []);

  // Filter and sort restaurants
  const filteredRestaurants = useMemo(() => {
    let result = [...RESTAURANTS];

    // Search query filter (matches name, cuisines, address, or menu items)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.cuisines.some(c => c.toLowerCase().includes(query)) ||
        r.address.toLowerCase().includes(query) ||
        r.menu.some(m => m.name.toLowerCase().includes(query))
      );
    }

    // Cuisine filter
    if (categoryFilter && categoryFilter !== "All") {
      result = result.filter(r => 
        r.cuisines.includes(categoryFilter)
      );
    }

    // Veg / Non-Veg restaurant filter
    if (vegOnly) {
      result = result.filter(r => r.isVeg);
    }
    if (nonVegOnly) {
      // Show restaurants that are not purely veg
      result = result.filter(r => !r.isVeg);
    }

    // Fast Delivery filter (<= 22 mins)
    if (fastDelivery) {
      result = result.filter(r => r.deliveryTime <= 22);
    }

    // High Ratings filter (>= 4.5)
    if (highRatings) {
      result = result.filter(r => r.rating >= 4.5);
    }

    // Offers filter
    if (hasOffers) {
      result = result.filter(r => r.offer && r.offer.trim() !== "");
    }

    // Budget filters
    if (budgetFilter === 'under300') {
      result = result.filter(r => r.costForTwo < 300);
    } else if (budgetFilter === '300to600') {
      result = result.filter(r => r.costForTwo >= 300 && r.costForTwo <= 500);
    }

    // Sorting logic
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'delivery') {
      result.sort((a, b) => a.deliveryTime - b.deliveryTime);
    } else if (sortBy === 'cost-lth') {
      result.sort((a, b) => a.costForTwo - b.costForTwo);
    } else if (sortBy === 'cost-htl') {
      result.sort((a, b) => b.costForTwo - a.costForTwo);
    }

    return result;
  }, [searchQuery, categoryFilter, vegOnly, nonVegOnly, fastDelivery, highRatings, hasOffers, budgetFilter, sortBy]);

  // Filter and sort dishes
  const filteredDishes = useMemo(() => {
    let result = [...allDishes];

    // Search query filter (matches dish name or description)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(d => 
        d.name.toLowerCase().includes(query) || 
        d.description.toLowerCase().includes(query) ||
        d.restaurantName.toLowerCase().includes(query)
      );
    }

    // Cuisine filter (matches parent restaurant's cuisines)
    if (categoryFilter && categoryFilter !== "All") {
      result = result.filter(d => 
        d.restaurantObject.cuisines.includes(categoryFilter)
      );
    }

    // Veg / Non-Veg item filter
    if (vegOnly) {
      result = result.filter(d => d.isVeg);
    }
    if (nonVegOnly) {
      result = result.filter(d => !d.isVeg);
    }

    // Fast Delivery filter (parent restaurant delivery <= 22 mins)
    if (fastDelivery) {
      result = result.filter(d => d.restaurantTime <= 22);
    }

    // High Ratings filter (dish rating or restaurant rating >= 4.5)
    if (highRatings) {
      result = result.filter(d => d.rating >= 4.5);
    }

    // Offers filter (parent restaurant has an offer)
    if (hasOffers) {
      result = result.filter(d => d.restaurantObject.offer && d.restaurantObject.offer.trim() !== "");
    }

    // Budget filter (based on item price)
    if (budgetFilter === 'under300') {
      result = result.filter(d => d.price < 150);
    } else if (budgetFilter === '300to600') {
      result = result.filter(d => d.price >= 150 && d.price <= 300);
    }

    // Sorting logic for dishes
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'delivery') {
      result.sort((a, b) => a.restaurantTime - b.restaurantTime);
    } else if (sortBy === 'cost-lth') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'cost-htl') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allDishes, searchQuery, categoryFilter, vegOnly, nonVegOnly, fastDelivery, highRatings, hasOffers, budgetFilter, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('All');
    setVegOnly(false);
    setNonVegOnly(false);
    setFastDelivery(false);
    setHighRatings(false);
    setHasOffers(false);
    setBudgetFilter('all');
    setSortBy('relevance');
  };

  // Helper to check item quantity in cart
  const getItemQty = (itemId) => {
    const cartItem = cart.find(c => c.item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="listing-wrapper">
      {/* Navigation Headers and Back button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <button 
          className="menu-nav-back" 
          onClick={onBackHome}
          style={{ margin: 0, padding: '8px 12px', background: 'white', borderRadius: '8px', border: '1px solid var(--border)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Inline Search bar */}
        <div style={{ display: 'flex', background: 'white', border: '1px solid var(--border)', borderRadius: '25px', padding: '6px 16px', alignItems: 'center', width: '100%', maxWidth: '380px', boxShadow: 'var(--shadow-sm)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--text-light)" strokeWidth="2.5" style={{ marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search restaurants or dishes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ color: 'var(--text-light)', fontSize: '16px', fontWeight: 600 }}>&times;</button>
          )}
        </div>
      </div>

      {/* Cuisine Selector Bar */}
      <div className="cuisine-filters" style={{ marginBottom: '16px' }}>
        {CUISINES_LIST.map((cuisine, index) => (
          <button
            key={index}
            className={`filter-pill ${categoryFilter === cuisine ? 'active' : ''}`}
            onClick={() => setCategoryFilter(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Advanced Quick Filters Row */}
      <div className="filter-bar" style={{ paddingBottom: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* Veg/Non-Veg Consolidated Dropdown */}
          <select 
            className="sort-select"
            value={vegOnly ? 'veg' : (nonVegOnly ? 'non-veg' : 'all')}
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'all') {
                setVegOnly(false);
                setNonVegOnly(false);
              } else if (val === 'veg') {
                setVegOnly(true);
                setNonVegOnly(false);
              } else if (val === 'non-veg') {
                setVegOnly(false);
                setNonVegOnly(true);
              }
            }}
            style={{ 
              borderRadius: '20px', 
              padding: '8px 16px', 
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              border: (vegOnly || nonVegOnly) ? '1px solid var(--primary)' : '1px solid var(--border)',
              color: (vegOnly || nonVegOnly) ? 'var(--primary)' : 'var(--text-body)',
              background: (vegOnly || nonVegOnly) ? 'var(--primary-light)' : 'white'
            }}
          >
            <option value="all">Food Preference: All</option>
            <option value="veg">🥬 Pure Veg Only</option>
            <option value="non-veg">🔴 Non-Veg Only</option>
          </select>

          {/* Fast Delivery */}
          <button 
            className={`filter-pill ${fastDelivery ? 'active' : ''}`}
            onClick={() => setFastDelivery(!fastDelivery)}
          >
            ⏱️ Fast Delivery (≤22m)
          </button>

          {/* Ratings 4.5+ */}
          <button 
            className={`filter-pill ${highRatings ? 'active' : ''}`}
            onClick={() => setHighRatings(!highRatings)}
          >
            ⭐ Ratings 4.5+
          </button>

          {/* Active Offers */}
          <button 
            className={`filter-pill ${hasOffers ? 'active' : ''}`}
            onClick={() => setHasOffers(!hasOffers)}
          >
            🏷️ Has Offers
          </button>

          {/* Budget Filters */}
          <button 
            className={`filter-pill ${budgetFilter === 'under300' ? 'active' : ''}`}
            onClick={() => setBudgetFilter(budgetFilter === 'under300' ? 'all' : 'under300')}
          >
            {activeTab === 'dishes' ? '₹ Under 150' : '₹ Under 300'}
          </button>

          <button 
            className={`filter-pill ${budgetFilter === '300to600' ? 'active' : ''}`}
            onClick={() => setBudgetFilter(budgetFilter === '300to600' ? 'all' : '300to600')}
          >
            {activeTab === 'dishes' ? '₹150 - ₹300' : '₹300 - ₹500'}
          </button>

          {/* Reset Filters */}
          {(vegOnly || nonVegOnly || fastDelivery || highRatings || hasOffers || budgetFilter !== 'all' || categoryFilter !== 'All' || searchQuery !== '') && (
            <button 
              onClick={handleResetFilters}
              style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', padding: '6px 12px' }}
            >
              Reset
            </button>
          )}
        </div>

        {/* Sorting selector */}
        <div className="filter-actions">
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ borderRadius: '12px', padding: '8px 12px' }}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="rating">Sort: High Rating</option>
            <option value="delivery">Sort: Delivery Time</option>
            <option value="cost-lth">Sort: Cost (Low to High)</option>
            <option value="cost-htl">Sort: Cost (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Dual Tab Headers */}
      <div className="listing-tabs-wrapper">
        <button 
          className={`listing-tab-btn ${activeTab === 'restaurants' ? 'active' : ''}`}
          onClick={() => setActiveTab('restaurants')}
        >
          <span>Restaurants</span>
          <span className="tab-count-badge">{filteredRestaurants.length}</span>
        </button>
        <button 
          className={`listing-tab-btn ${activeTab === 'dishes' ? 'active' : ''}`}
          onClick={() => setActiveTab('dishes')}
        >
          <span>Dishes</span>
          <span className="tab-count-badge">{filteredDishes.length}</span>
        </button>
      </div>

      {/* Tab Render: Restaurants Grid */}
      {activeTab === 'restaurants' && (
        filteredRestaurants.length > 0 ? (
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '16px', fontWeight: 600 }}>
              Showing {filteredRestaurants.length} restaurants
            </p>
            
            <div className="restaurants-grid">
              {filteredRestaurants.map((rest) => (
                <div 
                  key={rest.id} 
                  className="restaurant-card"
                  onClick={() => onSelectRestaurant(rest)}
                  style={{ cursor: 'pointer' }}
                >
                  {rest.isPromoted && <span className="promoted-tag">Promoted</span>}
                  
                  <div className="rest-image-wrapper">
                    <img src={rest.image} alt={rest.name} className="rest-image" loading="lazy" />
                    {rest.offer && <div className="offer-overlay">{rest.offer}</div>}
                  </div>

                  {rest.isVeg && (
                    <div className="veg-indicator-card">
                      <div className="veg-tag" style={{ margin: 0 }}></div>
                    </div>
                  )}

                  <div className="rest-info">
                    <div className="rest-name-row">
                      <h3 className="rest-name">{rest.name}</h3>
                      <div className="rating-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <span>{rest.rating}</span>
                      </div>
                    </div>

                    <div className="rest-cuisines">
                      {rest.cuisines.join(', ')}
                    </div>

                    <div className="rest-meta">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {rest.deliveryTime} mins
                      </span>
                      <span>•</span>
                      <span>{rest.distance}</span>
                      <span>•</span>
                      <span>₹{rest.costForTwo} for two</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--text-light)" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3>No Restaurants Found</h3>
            <p>Try resetting filters or clear your search input.</p>
            <button className="back-home-btn" style={{ marginTop: '20px' }} onClick={handleResetFilters}>
              Reset Filters
            </button>
          </div>
        )
      )}

      {/* Tab Render: Dishes Grid */}
      {activeTab === 'dishes' && (
        filteredDishes.length > 0 ? (
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '16px', fontWeight: 600 }}>
              Showing {filteredDishes.length} dishes matching criteria
            </p>
            
            <div className="dishes-grid">
              {filteredDishes.map((dish) => {
                const qty = getItemQty(dish.id);
                return (
                  <div key={dish.id} className="dish-search-card">
                    <div className="dish-details">
                      {dish.isVeg ? <div className="veg-tag" title="Vegetarian"></div> : <div className="nonveg-tag" title="Non-Vegetarian"></div>}
                      
                      <h4 className="item-name" style={{ fontSize: '16px' }}>{dish.name}</h4>
                      <div className="item-price">₹{dish.price}</div>
                      <p className="item-desc" style={{ fontSize: '12px', WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {dish.description}
                      </p>
                      
                      {/* Attributed Restaurant link */}
                      <div 
                        className="dish-rest-attribution"
                        onClick={() => onSelectRestaurant(dish.restaurantObject)}
                      >
                        <span>📍 by {dish.restaurantName}</span>
                        <span>⭐ {dish.restaurantRating}</span>
                      </div>
                    </div>

                    <div className="item-action-wrapper" style={{ width: '90px', height: '90px' }}>
                      {dish.image && <img src={dish.image} alt={dish.name} className="item-img" style={{ borderRadius: '8px' }} />}
                      
                      <div className="item-btn-container" style={{ width: '75px', height: '28px', bottom: '-8px' }}>
                        {qty > 0 ? (
                          <div className="qty-btn-group">
                            <button 
                              className="qty-btn" 
                              style={{ fontSize: '12px', width: '22px' }}
                              onClick={() => onRemoveFromCart(dish.id)}
                            >
                              -
                            </button>
                            <span className="qty-val" style={{ fontSize: '12px' }}>{qty}</span>
                            <button 
                              className="qty-btn" 
                              style={{ fontSize: '12px', width: '22px' }}
                              onClick={() => onAddToCart(dish, dish.restaurantObject)}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button 
                            className="add-btn" 
                            style={{ fontSize: '11px' }}
                            onClick={() => onAddToCart(dish, dish.restaurantObject)}
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
        ) : (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--text-light)" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3>No Dishes Found</h3>
            <p>Try searching for popular foods like "chicken", "biryani", "paneer", "dosa", or "waffle"!</p>
            <button className="back-home-btn" style={{ marginTop: '20px' }} onClick={handleResetFilters}>
              Reset Filters
            </button>
          </div>
        )
      )}
    </div>
  );
}
