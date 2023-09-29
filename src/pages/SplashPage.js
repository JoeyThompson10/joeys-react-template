import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg'; // Import the logo
import '../css/SplashPage.css';

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Adjusted the timeout to watch the spinning logo

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="splash-page">
      <img src={logo} className="App-logo" alt="logo" /> {/* Added the logo */}
      <h1>Welcome to Joey's React Template!</h1>
      <p>Loading...</p>
    </div>
  );
}

export default SplashPage;
