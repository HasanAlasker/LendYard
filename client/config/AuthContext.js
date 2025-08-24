import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth state on app start
  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      
      // Here you would typically make an API call to authenticate
      // For now, I'll simulate a successful login
      
      // Mock user data - replace with actual API response
      const userData = {
        id: Date.now().toString(), // In real app, this comes from backend
        email: email,
        name: extractNameFromEmail(email), // Helper function
        profileImage: null, // Will be set when user uploads profile picture
        rating: 5.0,
        joinDate: new Date().toISOString(),
        phone: '',
        location: {
          city: '',
          area: ''
        },
        stats: {
          itemsPosted: 0,
          itemsBorrowed: 0,
          itemsLent: 0
        }
      };

      // Save to AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (email, password, name, phone) => {
    try {
      setIsLoading(true);
      
      // Here you would typically make an API call to register
      // For now, I'll simulate a successful registration
      
      const userData = {
        id: Date.now().toString(),
        email: email,
        name: name,
        phone: phone,
        profileImage: null,
        rating: null, // New users don't have ratings yet
        joinDate: new Date().toISOString(),
        location: {
          city: '',
          area: ''
        },
        stats: {
          itemsPosted: 0,
          itemsBorrowed: 0,
          itemsLent: 0
        }
      };

      // Save to AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      const updatedUser = { ...user, ...updates };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update profile error:', error);
      return { success: false, error: error.message };
    }
  };

  // Update profile image
  const updateProfileImage = async (imageUri) => {
    try {
      const updatedUser = { ...user, profileImage: imageUri };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update profile image error:', error);
      return { success: false, error: error.message };
    }
  };

  // Update user stats (when they post, borrow, or lend items)
  const updateStats = async (statType) => {
    try {
      const updatedStats = { ...user.stats };
      if (statType === 'itemsPosted') {
        updatedStats.itemsPosted += 1;
      } else if (statType === 'itemsBorrowed') {
        updatedStats.itemsBorrowed += 1;
      } else if (statType === 'itemsLent') {
        updatedStats.itemsLent += 1;
      }

      const updatedUser = { ...user, stats: updatedStats };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update stats error:', error);
      return { success: false, error: error.message };
    }
  };

  // Helper function to extract name from email
  const extractNameFromEmail = (email) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    updateProfileImage,
    updateStats,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;