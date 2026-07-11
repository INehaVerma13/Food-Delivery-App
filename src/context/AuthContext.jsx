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

// Pure CSS Google Accounts Chooser Modal
function MockGoogleModal({ onClose, onSelect, isLoggingIn }) {
  return (
    <div className="google-auth-overlay">
      <div className="google-auth-card">
        <button className="google-auth-close" onClick={onClose} disabled={isLoggingIn}>&times;</button>
        
        {isLoggingIn ? (
          <div className="google-auth-loading">
            <div className="google-spinner"></div>
            <h3>Signing you in...</h3>
            <p>Verifying with Google servers</p>
          </div>
        ) : (
          <>
            <div className="google-auth-header">
              <svg className="google-logo" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <h2>Sign in with Google</h2>
              <p>to continue to <span className="brand-highlight">Foodiez</span></p>
            </div>
            
            <div className="google-accounts-list">
              {MOCK_PROFILES.map((profile, index) => (
                <button 
                  key={index}
                  className="google-account-item"
                  onClick={() => onSelect(profile)}
                >
                  <img src={profile.avatar} alt={profile.name} className="google-avatar" />
                  <div className="google-account-details">
                    <span className="google-name">{profile.name}</span>
                    <span className="google-email">{profile.email}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="google-auth-footer">
              <span>To check full Clerk integration, add your key to `.env`</span>
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
        <MockGoogleModal 
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
  const hasClerkKey = CLERK_KEY && CLERK_KEY.trim() !== "" && !CLERK_KEY.includes("xxxxxxxx");

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
