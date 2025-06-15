import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const LOADING_DURATION = 5000;    // 5 seconds

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = useCallback(() => {
    setIsLoading(false);
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    let timer = null;

    try {
      timer = setTimeout(handleNavigation, LOADING_DURATION);
    } catch (error) {
      console.error('Error in preloader timer:', error);
      handleNavigation();
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [handleNavigation]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mx-auto"></div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white animate-pulse">
          Loading...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we prepare your experience
        </p>
      </div>
    </div>
  );
};

export default Preloader;