import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClerkProvider, useUser, useClerk } from '@clerk/clerk-react';

const AuthContext = createContext(null);

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Mock accounts list
const MOCK_PROFILES = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@gmail.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=60"
  },
  {
    name: "Priya Patel",
    email: "priya.patel@gmail.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60"
  },
  {
    name: "Guest Explorer",
    email: "guest.explorer@foodiez.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60"
  }
];

// Pure CSS Brand Accounts Chooser Modal
function MockAuthModal({ onClose, onSelect, isLoggingIn }) {
  return (
    <div className="brand-auth-overlay">
      <div className="brand-auth-card">
        <button className="brand-auth-close" onClick={onClose} disabled={isLoggingIn}>&times;</button>
        
        {isLoggingIn ? (
          <div className="brand-auth-loading">
            <div className="brand-auth-spinner"></div>
            <h3>Signing you in...</h3>
            <p>Loading your profile credentials</p>
          </div>
        ) : (
          <>
            <div className="brand-auth-header">
              <div className="brand-auth-logo">F</div>
              <h2>Foodiez Profile Sign In</h2>
              <p>Select a mock account profile to continue to <span className="brand-highlight">Foodiez</span></p>
            </div>
            
            <div className="brand-auth-accounts-list">
              {MOCK_PROFILES.map((profile, index) => (
                <button 
                  key={index}
                  className="brand-auth-account-item"
                  onClick={() => onSelect(profile)}
                >
                  <img src={profile.avatar} alt={profile.name} className="brand-auth-avatar" />
                  <div className="brand-auth-account-details">
                    <span className="brand-auth-name">{profile.name}</span>
                    <span className="brand-auth-email">{profile.brand_auth_email || profile.email}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="brand-auth-footer">
              <span>Demonstration Mode. Tap any profile to access ordering features.</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Mock auth provider logic
function MockAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('food_app_mock_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const loginWithGoogle = () => {
    setShowModal(true);
  };

  const confirmMockLogin = (profile) => {
    setIsLoggingIn(true);
    setTimeout(() => {
      const loggedInUser = {
        id: "mock-" + Date.now(),
        firstName: profile.name.split(' ')[0],
        lastName: profile.name.split(' ').slice(1).join(' ') || '',
        fullName: profile.name,
        primaryEmailAddress: { emailAddress: profile.email },
        imageUrl: profile.avatar
      };
      setUser(loggedInUser);
      localStorage.setItem('food_app_mock_user', JSON.stringify(loggedInUser));
      setIsLoggingIn(false);
      setShowModal(false);
    }, 1500);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('food_app_mock_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isSignedIn: !!user,
      isLoaded: true,
      loginWithGoogle,
      logout,
      isMockMode: true
    }}>
      {children}
      {showModal && (
        <MockAuthModal 
          onClose={() => setShowModal(false)} 
          onSelect={confirmMockLogin} 
          isLoggingIn={isLoggingIn}
        />
      )}
    </AuthContext.Provider>
  );
}

// Clerk auth provider logic
function ClerkAuthWrapper({ children }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut, openSignIn } = useClerk();

  const logout = async () => {
    await signOut();
  };

  const loginWithGoogle = () => {
    if (openSignIn) {
      openSignIn({
        signInOptions: {
          strategy: 'oauth_google'
        }
      });
    }
  };

  const mappedUser = user ? {
    id: user.id,
    firstName: user.firstName || 'User',
    lastName: user.lastName || '',
    fullName: user.fullName || 'User',
    primaryEmailAddress: { emailAddress: user.primaryEmailAddress?.emailAddress || '' },
    imageUrl: user.imageUrl
  } : null;

  return (
    <AuthContext.Provider value={{
      user: mappedUser,
      isSignedIn: !!isSignedIn,
      isLoaded,
      loginWithGoogle,
      logout,
      isMockMode: false
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Main Combined Provider Export
export function AuthProvider({ children }) {
  const hasClerkKey = CLERK_KEY && 
                      (CLERK_KEY.startsWith("pk_test_") || CLERK_KEY.startsWith("pk_live_")) && 
                      !CLERK_KEY.includes("xxxxxxxx");

  if (!hasClerkKey) {
    return <MockAuthProvider>{children}</MockAuthProvider>;
  }

  return (
    <ClerkProvider publishableKey={CLERK_KEY}>
      <ClerkAuthWrapper>{children}</ClerkAuthWrapper>
    </ClerkProvider>
  );
}

export function useFoodAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useFoodAuth must be used within an AuthProvider');
  }
  return context;
}
