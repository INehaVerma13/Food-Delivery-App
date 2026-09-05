import React from 'react';
import { CUISINES_LIST } from '../data/restaurants';

export default function LandingPage({ onSearch, onSelectCuisine, onViewListing }) {
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState('');

  // Show More states
  const [showAllFoodCities, setShowAllFoodCities] = React.useState(false);
  const [showAllGroceryCities, setShowAllGroceryCities] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    } else {
      onViewListing();
    }
  };

  // Maps cuisine names to high-quality food image URLs
  const cuisineImages = {
    "North Indian": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&auto=format&fit=crop&q=60",
    "South Indian": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200&auto=format&fit=crop&q=60",
    "Italian": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&auto=format&fit=crop&q=60",
    "Chinese": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&auto=format&fit=crop&q=60",
    "Burgers": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=60",
    "Healthy Food": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&auto=format&fit=crop&q=60",
    "Desserts": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&auto=format&fit=crop&q=60"
  };

  const deliveryCities = [
    "Bangalore", "New Delhi", "Mumbai", "Pune", "Kolkata", "Chennai", "Hyderabad", 
    "Ahmedabad", "Jaipur", "Noida", "Gurgaon", "Chandigarh", "Lucknow", "Kochi", 
    "Surat", "Indore", "Coimbatore", "Ludhiana", "Patna", "Mangalore", "Bhopal", 
    "Visakhapatnam", "Vadodara", "Nagpur", "Dehradun", "Mysore", "Nashik", "Guwahati"
  ];

  const groceryCities = [
    "Bangalore", "New Delhi", "Mumbai", "Pune", "Noida", "Gurgaon", "Chennai", 
    "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur", "Chandigarh", "Lucknow", 
    "Indore", "Kochi", "Coimbatore", "Surat", "Bhopal", "Patna", "Nagpur"
  ];

  // Limit rendering to 11 items initially so that the 12th slot (3rd row end) is the toggle card
  const visibleFoodCities = showAllFoodCities ? deliveryCities : deliveryCities.slice(0, 11);
  const visibleGroceryCities = showAllGroceryCities ? groceryCities : groceryCities.slice(0, 11);

  return (
    <div className="landing-container">
      {/* Centered Hero layout */}
      <div className="landing-hero">
        {/* Floating food plates peeking from left/right edges */}
        <div className="hero-food-group-left">
          <img 
            src={`${import.meta.env.BASE_URL}salad.png`} 
            alt="Fresh Salad Plate" 
            className="hero-floating-food food-left-salad" 
          />
          <img 
            src={`${import.meta.env.BASE_URL}tomato.png`} 
            alt="Fresh Tomato Slice" 
            className="hero-floating-ingredient food-left-tomato" 
          />
          <img 
            src={`${import.meta.env.BASE_URL}leaf.png`} 
            alt="Green Leaf" 
            className="hero-floating-ingredient food-left-leaf" 
          />
          <img 
            src={`${import.meta.env.BASE_URL}pepper.png`} 
            alt="Lemon Slice" 
            className="hero-floating-ingredient food-left-pepper" 
          />
        </div>
        <img 
          src={`${import.meta.env.BASE_URL}burger.png`} 
          alt="Gourmet Burger Plate" 
          className="hero-floating-food food-right" 
        />

        <div className="hero-content" style={{ maxWidth: '820px' }}>
          <h1>Super Fast Delivery To Your Doorstep</h1>
          <p>Discover the best restaurants, street food, and sweet treats in your town, prepared fresh and delivered warm.</p>
          
          <div className="dual-search-wrapper-centered">
            {/* Box 1: Delivery Location Search */}
            <div className="search-box-individual location-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Enter delivery location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Box 2: Food/Dish Search Form */}
            <form className="search-box-individual food-box" onSubmit={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for restaurants, cuisines, or dishes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>

      {/* Cuisines Mind slider */}
      <div className="landing-section">
        <h2 className="section-title">What's on your mind?</h2>
        <div className="cuisines-slider">
          {CUISINES_LIST.filter(c => c !== "All").map((cuisine, index) => (
            <div 
              key={index} 
              className="cuisine-card-circle"
              onClick={() => onSelectCuisine(cuisine)}
            >
              <img 
                src={cuisineImages[cuisine] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=60"} 
                alt={cuisine} 
                className="cuisine-image-circle"
              />
              <span>{cuisine}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Promotions Banners */}
      <div className="landing-section">
        <h2 className="section-title">Exclusive Offers For You</h2>
        <div className="promo-banners">
          <div className="promo-card" onClick={onViewListing}>
            <span className="promo-tag">NEW USER</span>
            <h3>Flat 50% OFF up to ₹100</h3>
            <p>Use coupon code <strong style={{color: 'white'}}>DELIVERY50</strong> on check out</p>
          </div>
          <div className="promo-card dark" onClick={() => onSelectCuisine("Desserts")}>
            <span className="promo-tag">SWEET DEALS</span>
            <h3>Craving Desserts? Free Delivery!</h3>
            <p>Order fresh gourmet waffles, ice creams & pastries instantly</p>
          </div>
        </div>
      </div>

      {/* Cities directories */}
      <div className="landing-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '22px' }}>Cities with food delivery</h2>
        <div className="cities-grid">
          {visibleFoodCities.map((city, index) => (
            <a key={index} href="#/browse" className="city-link" onClick={onViewListing}>
              Order food in {city}
            </a>
          ))}
          {/* Show More toggle inline card inside the grid */}
          <button 
            className="city-link city-toggle-card"
            onClick={() => setShowAllFoodCities(!showAllFoodCities)}
          >
            {showAllFoodCities ? (
              <>
                Show Less
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Show More
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="landing-section">
        <h2 className="section-title" style={{ fontSize: '22px' }}>Cities with grocery delivery</h2>
        <div className="cities-grid">
          {visibleGroceryCities.map((city, index) => (
            <a key={index} href="#/browse" className="city-link" onClick={onViewListing}>
              Buy groceries in {city}
            </a>
          ))}
          {/* Show More toggle inline card inside the grid */}
          <button 
            className="city-link city-toggle-card"
            onClick={() => setShowAllGroceryCities(!showAllGroceryCities)}
          >
            {showAllGroceryCities ? (
              <>
                Show Less
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Show More
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* About Description Block */}
      <div className="landing-section" style={{ background: 'white', borderRadius: '16px', padding: '32px', border: '1px solid var(--border)', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>About Foodiez</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '12px' }}>
          Foodiez is a premium online food ordering, dining reservation, and grocery delivery platform. Inspired by the convenience of high-end logistics networks, Foodiez bridges the gap between hungry food lovers and local culinary hubs.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
          With real-time courier tracking, zero-contact home delivery, and our newly launched **Dineout Premium Table Bookings**, we provide a complete culinary ecosystem. Book tables at the best restaurants in town to enjoy flat discounts, or add multiple items to your cart for direct home delivery.
        </p>
      </div>
    </div>
  );
}
