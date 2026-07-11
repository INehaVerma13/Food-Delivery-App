import React, { useState, useEffect } from 'react';

const MOCK_RIDERS = [
  {
    name: "Ramesh Kumar",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60"
  },
  {
    name: "Amit Patel",
    phone: "+91 99887 76655",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60"
  },
  {
    name: "Suresh Pillai",
    phone: "+91 91234 56789",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60"
  }
];

export default function OrderConfirmation({ placedOrder, onBackHome }) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Confirmed, 1: Preparing, 2: Dispatched, 3: Arrived
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [rider, setRider] = useState(() => {
    // Pick a random rider
    const idx = Math.floor(Math.random() * MOCK_RIDERS.length);
    return MOCK_RIDERS[idx];
  });

  // Steps timing simulation: progress through milestones
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 3) return prev + 1;
        clearInterval(stepInterval);
        return 3;
      });
    }, 8000); // Progress to next step every 8 seconds for preview purposes

    return () => clearInterval(stepInterval);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev > 0) return prev - 1;
        clearInterval(timerInterval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Format time (MM:SS)
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  // Scooter position percentage mapping
  const scooterPositions = ['0%', '33%', '66%', '98%'];

  const milestones = [
    { label: "Confirmed", icon: "✓" },
    { label: "Preparing", icon: "🍳" },
    { label: "Dispatched", icon: "🛵" },
    { label: "Arrived", icon: "🏡" }
  ];

  return (
    <div className="confirmation-wrapper">
      <div className="confirmation-card">
        {/* Animated Checkmark */}
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>

        <h2>Order Placed Successfully!</h2>
        <p style={{ color: 'var(--text-light)', marginTop: '8px', fontSize: '14px' }}>
          Order #{placedOrder?.orderId || "FD-82635"} • Thank you for choosing Foodiez
        </p>

        {/* Live Delivery Countdown */}
        <div className="tracking-eta">
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Estimated Delivery Time
          </span>
          <div className="eta-time">
            {currentStep === 3 ? "Arrived!" : `${formatTime(timeLeft)} mins`}
          </div>
        </div>

        {/* Interactive Delivery Road Tracker */}
        <div className="tracking-road">
          {/* Scooter moving marker */}
          <div 
            className="scooter-animation" 
            style={{ left: scooterPositions[currentStep] }}
          >
            <span className="scooter-icon">🛵</span>
          </div>

          {/* Road milestones */}
          {milestones.map((ms, idx) => (
            <div 
              key={idx} 
              className={`tracking-milestone ${currentStep >= idx ? 'active' : ''}`}
              style={{ left: `${idx * 33.33}%` }}
            >
              <div className="milestone-dot"></div>
              <span className="milestone-label">{ms.label}</span>
            </div>
          ))}
        </div>

        {/* Rider Details Card */}
        <div className="rider-card">
          <img src={rider.avatar} alt={rider.name} className="rider-avatar" />
          <div className="rider-info">
            <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase' }}>
              Your Delivery Executive
            </span>
            <div className="rider-name">{rider.name}</div>
            <div className="rider-phone">{rider.phone}</div>
          </div>
          <a href={`tel:${rider.phone}`} className="rider-call-btn" title="Call Delivery Executive">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        <button className="back-home-btn" onClick={onBackHome}>
          Order Something Else
        </button>
      </div>
    </div>
  );
}
