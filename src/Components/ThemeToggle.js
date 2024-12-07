import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Style for the icon

const ThemeToggle = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize the theme on load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      toggleTheme(true); // Apply dark mode initially if stored
    }
  }, [toggleTheme]);

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    toggleTheme(newDarkMode); // Call the parent's theme toggle function

    // Store the user's preference in localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle" onClick={handleToggle}>
      {isDarkMode ? (
        <span role="img" aria-label="Light Mode" >🌞</span> // Light mode icon
      ) : (
        <span role="img" aria-label="Dark Mode">🌙</span> // Dark mode icon
      )}
    </div>
  );
};

export default ThemeToggle;