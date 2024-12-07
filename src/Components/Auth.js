// Auth.js
import React, { useState } from "react";
import '../App.css'; // Ensure your CSS is imported here

const Auth = ({ onSignIn }) => {
  const [theme, setTheme] = useState("light");
  const [isSignIn, setIsSignIn] = useState(true); // Initial state set to true for Sign In
  const [email, setEmail] = useState(""); // To store the email input
  const [password, setPassword] = useState(""); // To store the password input
  const [error, setError] = useState(""); // To handle error messages

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSignIn = () => {
    // Simulate an API call to check for the existing account
    const existingAccounts = ["test@example.com"]; // Example existing accounts

    if (existingAccounts.includes(email)) {
      console.log("Signing in with:", { email, password });
      setError(""); // Clear any previous errors
      onSignIn(); // Notify parent component that user has signed in
    } else {
      setError("Account does not exist. Please sign up.");
    }
  };

  const handleSignUp = () => {
    console.log("Signing up with:", { email, password });
    // Add your sign-up logic here (e.g., API call)
    // If sign-up is successful, sign in immediately
    handleSignIn(); // Attempt to sign in after successful sign-up
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (isSignIn) {
      handleSignIn(); // Call the sign-in handler
    } else {
      handleSignUp(); // Call the sign-up handler
    }
  };

  return (
    <div>
      <button onClick={toggleTheme} style={{ position: 'absolute', right: '20px', top: '20px' }}>
        {theme === "light" ? "🌙" : "☀"}
      </button>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="card-container">
          <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Store email input
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Store password input
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p>
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button type="button" onClick={() => setIsSignIn(!isSignIn)}>
                {isSignIn ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Auth;