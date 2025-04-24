import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { context } from 'newrelic/lib/symbols';

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
  isLoading: false,
  logout: () => {},
  checkAuth: () => {},
});

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const buildUrl = (endpoint) => `${process.env.REACT_APP_BACKEND_URL.replace(/\/$/, '')}${endpoint}`;

  const checkAuth = async() => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(buildUrl('/auth/me'), {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Auth check failed');
      }

      const userData = await response.json();
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Auth check error:', error);
      setUser(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, pass) => {
    try {
      const response = await fetch(buildUrl('/auth/login'), {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Login failed');
      }

      const { token } = await response.json();
      console.log('received token', token);
      localStorage.setItem('authToken', token);
      await checkAuth();
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(buildUrl('/auth/logout'), {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      localStorage.removeItem('authToken');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  useEffect( () => {
    checkAuth();
  }, []);

  const contextValue = {
    user,
    setUser,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return (
    <UserContext.Provider value={contextValue}> {children} </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}