import React, { useState, useMemo } from 'react';

const DINEOUT_RESTAURANTS = [
  {
    id: "dine-1",
    name: "Toscano UB City",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Italian", "Fine Dining", "Pasta"],
    rating: 4.6,
    discount: "Flat 25% OFF on total bill",
    costForTwo: 1800,
    address: "UB City, Vittal Mallya Road, Bangalore",
    type: "Fine Dining"
  },
  {
    id: "dine-2",
    name: "Punjab Grill",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
    cuisines: ["North Indian", "Mughlai", "Biryani"],
    rating: 4.5,
    discount: "30% OFF on Buffet pre-booking",
    costForTwo: 1600,
    address: "Preet Vihar, New Delhi",
    type: "Buffet & Barbecue"
  },
  {
    id: "dine-3",
    name: "Mamagoto Asian",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Asian", "Chinese", "Sushi"],
    rating: 4.4,
    discount: "Flat 20% OFF on pre-booking",
    costForTwo: 1200,
    address: "Koramangala 5th Block, Bangalore",
    type: "Casual Dining"
  },
  {
    id: "dine-4",
    name: "The Bier Library",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Finger Food", "Continental", "Burgers"],
    rating: 4.7,
    discount: "Flat 15% OFF on total bill",
    costForTwo: 2200,
    address: "Koramangala 6th Block, Bangalore",
    type: "Microbrewery"
  },
  {
    id: "dine-5",
    name: "Barbeque Nation",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Barbecue", "North Indian", "Buffet"],
    rating: 4.3,
    discount: "Buy 1 Get 1 Free on Buffet (Mon-Tue)",
    costForTwo: 1500,
    address: "Bandra West, Mumbai",
    type: "Buffet & Barbecue"
  },
  {
    id: "dine-6",
    name: "Asia Kitchen by Mainland China",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Chinese", "Asian", "Momos"],
    rating: 4.5,
    discount: "Flat 25% OFF on pre-booking",
    costForTwo: 1400,
    address: "Salt Lake, Kolkata",
    type: "Casual Dining"
  }
];

export default function DineoutPage({ onBackHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  
  // Booking Form State
  const [guests, setGuests] = useState(2);
  const [bookingDate, setBookingDate] = useState('Today');
  const [bookingTime, setBookingTime] = useState('7:30 PM');
  
  // Confirmed Receipt State
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Filter dineout restaurants
  const filteredOutlets = useMemo(() => {
    if (!searchQuery.trim()) return DINEOUT_RESTAURANTS;
    const query = searchQuery.toLowerCase().trim();
    return DINEOUT_RESTAURANTS.filter(o => 
      o.name.toLowerCase().includes(query) ||
      o.cuisines.some(c => c.toLowerCase().includes(query)) ||
      o.address.toLowerCase().includes(query) ||
      o.type.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleBookClick = (outlet) => {
    setSelectedOutlet(outlet);
    // Reset defaults
    setGuests(2);
    setBookingDate('Today');
    setBookingTime('7:30 PM');
  };

  const handleConfirmBooking = () => {
    const bookingId = "DIN-" + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBooking({
      bookingId,
      outlet: selectedOutlet,
      guests,
      date: bookingDate,
      time: bookingTime
    });
    setSelectedOutlet(null); // Close booker modal
  };

  return (
    <div className="listing-wrapper" style={{ paddingBottom: '80px' }}>
      {/* Top Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
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
        </div>

        <div style={{ display: 'flex', background: 'white', border: '1px solid var(--border)', borderRadius: '25px', padding: '6px 16px', alignItems: 'center', width: '100%', maxWidth: '380px', boxShadow: 'var(--shadow-sm)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--text-light)" strokeWidth="2.5" style={{ marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search dine-out restaurants, areas..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' }}
          />
        </div>
      </div>

      {/* Dineout Hero Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #2b1055 0%, #7597de 100%)', color: 'white', borderRadius: '20px', padding: '40px 32px', marginBottom: '40px', boxShadow: 'var(--shadow-md)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '500px', position: 'relative', zIndex: 2 }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Dineout Premium</span>
          <h1 style={{ color: 'white', fontSize: '32px', marginTop: '12px', lineHeight: 1.2 }}>Book Tables. Get Flat Bill Discounts.</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginTop: '10px', lineHeight: 1.5 }}>
            Enjoy up to 30% OFF at top-rated fine-dining, casual dining restaurants, and microbreweries in your city. Seamless digital reservations.
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: '-40px', right: '10px', opacity: 0.15, fontSize: '160px', userSelect: 'none', pointerEvents: 'none' }}>🍽️</div>
      </div>

      <h2 className="section-title">Discover Dining Outlets</h2>
      
      {/* Restaurant Cards */}
      {filteredOutlets.length > 0 ? (
        <div className="restaurants-grid" style={{ marginTop: '24px' }}>
          {filteredOutlets.map((outlet) => (
            <div key={outlet.id} className="restaurant-card">
              <div className="rest-image-wrapper">
                <img src={outlet.image} alt={outlet.name} className="rest-image" />
                <div className="offer-overlay" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                  {outlet.discount}
                </div>
              </div>

              <div className="rest-info" style={{ display: 'flex', flexDirection: 'column', height: '180px', justifyContent: 'space-between' }}>
                <div>
                  <div className="rest-name-row">
                    <h3 className="rest-name">{outlet.name}</h3>
                    <div className="rating-badge" style={{ background: '#7c3aed' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <span>{outlet.rating}</span>
                    </div>
                  </div>
                  <div className="rest-cuisines">{outlet.cuisines.join(', ')}</div>
                  <p style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '4px' }}>📍 {outlet.address}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-body)' }}>
                    ₹{outlet.costForTwo} for two
                  </span>
                  <button 
                    className="add-btn" 
                    style={{ position: 'relative', bottom: 0, left: 0, transform: 'none', width: 'auto', padding: '6px 16px', background: '#7c3aed', color: 'white', borderRadius: '20px', fontSize: '12px', height: 'auto', fontWeight: 600 }}
                    onClick={() => handleBookClick(outlet)}
                  >
                    Book Table
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No Dineout Outlets Found</h3>
          <p>Try searching for cuisines like "Italian" or restaurant names.</p>
        </div>
      )}

      {/* Guest/Slot Booker Modal */}
      {selectedOutlet && (
        <div className="google-auth-overlay" style={{ zIndex: 1100 }}>
          <div className="google-auth-card" style={{ maxWidth: '420px', padding: '24px' }}>
            <button className="google-auth-close" onClick={() => setSelectedOutlet(null)}>&times;</button>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Book a Table</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '20px' }}>{selectedOutlet.name}</p>

            {/* Guests selection */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-body)', display: 'block', marginBottom: '8px' }}>Number of Guests</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[2, 4, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGuests(num)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '13px',
                      fontWeight: 600,
                      background: guests === num ? '#7c3aed' : 'white',
                      color: guests === num ? 'white' : 'var(--text-body)',
                      borderColor: guests === num ? '#7c3aed' : 'var(--border)'
                    }}
                  >
                    {num} Guests
                  </button>
                ))}
              </div>
            </div>

            {/* Date selection */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-body)', display: 'block', marginBottom: '8px' }}>Select Date</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Today', 'Tomorrow', 'Day After'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setBookingDate(d)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '13px',
                      fontWeight: 600,
                      background: bookingDate === d ? '#7c3aed' : 'white',
                      color: bookingDate === d ? 'white' : 'var(--text-body)',
                      borderColor: bookingDate === d ? '#7c3aed' : 'var(--border)'
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot selection */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-body)', display: 'block', marginBottom: '8px' }}>Available Slots</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['12:30 PM', '1:30 PM', '7:30 PM', '8:30 PM', '9:30 PM'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setBookingTime(t)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: bookingTime === t ? '#7c3aed' : 'white',
                      color: bookingTime === t ? 'white' : 'var(--text-body)',
                      borderColor: bookingTime === t ? '#7c3aed' : 'var(--border)'
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="checkout-btn"
              style={{ margin: 0, width: '100%', background: '#7c3aed', boxShadow: '0 4px 10px rgba(124, 58, 237, 0.25)' }}
              onClick={handleConfirmBooking}
            >
              Confirm Reservation
            </button>
          </div>
        </div>
      )}

      {/* Booking Invoice Voucher with SVG QR Code */}
      {confirmedBooking && (
        <div className="google-auth-overlay" style={{ zIndex: 1100 }}>
          <div className="google-auth-card" style={{ maxWidth: '420px', padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
            {/* Header Voucher */}
            <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)', color: 'white', padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '4px' }}>🎟️</div>
              <h3 style={{ color: 'white', fontSize: '20px' }}>Table Reserved!</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginTop: '4px' }}>
                Booking ID: {confirmedBooking.bookingId}
              </p>
            </div>

            {/* Voucher Body details */}
            <div style={{ padding: '24px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h4 style={{ fontSize: '18px', color: 'var(--text-title)' }}>{confirmedBooking.outlet.name}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>{confirmedBooking.outlet.address}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '16px 0', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '10px', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase' }}>GUESTS</span>
                  <div style={{ fontWeight: 700, color: 'var(--text-title)', fontSize: '14px', marginTop: '2px' }}>{confirmedBooking.guests} People</div>
                </div>
                <div>
                  <span style={{ fontSize: '10px', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase' }}>DATE & TIME</span>
                  <div style={{ fontWeight: 700, color: 'var(--text-title)', fontSize: '14px', marginTop: '2px' }}>{confirmedBooking.date}, {confirmedBooking.time}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase' }}>PRE-BOOKING DISCOUNT</span>
                  <div style={{ fontWeight: 700, color: '#10b981', fontSize: '14px', marginTop: '2px' }}>{confirmedBooking.outlet.discount}</div>
                </div>
              </div>

              {/* Digital Check-in SVG QR Code representation */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <svg width="120" height="120" viewBox="0 0 100 100" style={{ background: '#f8fafc', padding: '8px', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  {/* Outer Frame */}
                  <rect x="5" y="5" width="90" height="90" fill="none" stroke="#7c3aed" strokeWidth="2"/>
                  {/* Position detection patterns (corners) */}
                  <rect x="10" y="10" width="20" height="20" fill="#7c3aed"/>
                  <rect x="13" y="13" width="14" height="14" fill="white"/>
                  <rect x="16" y="16" width="8" height="8" fill="#7c3aed"/>
                  
                  <rect x="70" y="10" width="20" height="20" fill="#7c3aed"/>
                  <rect x="73" y="13" width="14" height="14" fill="white"/>
                  <rect x="76" y="16" width="8" height="8" fill="#7c3aed"/>

                  <rect x="10" y="70" width="20" height="20" fill="#7c3aed"/>
                  <rect x="13" y="73" width="14" height="14" fill="white"/>
                  <rect x="16" y="76" width="8" height="8" fill="#7c3aed"/>

                  {/* Dummy noise/data blocks */}
                  <rect x="35" y="10" width="6" height="6" fill="#7c3aed"/>
                  <rect x="45" y="15" width="8" height="4" fill="#db2777"/>
                  <rect x="60" y="12" width="4" height="8" fill="#7c3aed"/>
                  
                  <rect x="38" y="30" width="12" height="6" fill="#7c3aed"/>
                  <rect x="55" y="32" width="6" height="12" fill="#db2777"/>
                  <rect x="72" y="38" width="10" height="4" fill="#7c3aed"/>

                  <rect x="10" y="45" width="8" height="8" fill="#db2777"/>
                  <rect x="24" y="42" width="6" height="14" fill="#7c3aed"/>
                  
                  <rect x="35" y="55" width="25" height="4" fill="#7c3aed"/>
                  <rect x="42" y="65" width="10" height="12" fill="#db2777"/>
                  <rect x="70" y="60" width="16" height="16" fill="#7c3aed"/>
                  <rect x="75" y="65" width="6" height="6" fill="white"/>
                  
                  <rect x="15" y="60" width="4" height="4" fill="#7c3aed"/>
                  <rect x="22" y="62" width="8" height="4" fill="#7c3aed"/>
                  
                  <rect x="40" y="82" width="15" height="4" fill="#7c3aed"/>
                  <rect x="60" y="85" width="8" height="6" fill="#db2777"/>
                </svg>
                <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: 600 }}>Present QR code at restaurant desk</span>
              </div>

              <button 
                className="checkout-btn" 
                style={{ margin: 0, width: '100%', background: 'var(--text-title)' }}
                onClick={() => setConfirmedBooking(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
