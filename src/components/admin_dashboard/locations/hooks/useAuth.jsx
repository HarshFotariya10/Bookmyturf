import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock admin data
        setAdmin({
          id: 1,
          name: "Admin User",
          email: "admin@bookmyturf.com",
          role: "admin",
          isOnline: true
        });
      } catch (error) {
        console.error('Auth check failed:', error);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const adminData = {
        id: 1,
        name: "Admin User",
        email: credentials.email,
        role: "admin",
        isOnline: true
      };
      
      setAdmin(adminData);
      return { success: true, admin: adminData };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: 'Invalid credentials' };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Simulate logout API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setAdmin(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    admin,
    loading,
    login,
    logout,
    isAuthenticated: !!admin
  };
};