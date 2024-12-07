import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar'; // Import Navbar component
import Courses from './Components/Courses'; // Import Courses component
import Payments from './Components/Payments'; // Import Payments component
import SignIn from "./Components/SignIn"; // Import SignIn component
import SignUp from "./Components/SignUp"; // Import SignUp component
import Students from "./Components/Students"; // Import Students component
// import Appbar from "./Components/Appbar"; // Import Appbar component
import Grades from "./Components/Grades"
import Admissions from "./Components/Admissions";
import './App.css';
import Pagenotfound from "./Components/Pagenotfound";
import Home from "./Components/Home";
import Faculty from "./Components/Faculty";
// import Instruct from "./Components/Instruct";
// import Faculty from "./Components/Faculty";
import Attendence from "./Components/Attendence";
import Daashboard from "./Components/Dashboard";
import DiscussionForm from "./Components/DiscussionForm";
function App() {

  const [isSignInPage, setIsSignInPage] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    document.body.classList.toggle("light-theme", !isDarkMode);
  }, [isDarkMode]);


  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  const handleSignIn = (email, password) => {
    return new Promise((resolve) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setIsAuthenticated(true);
        alert("Sign in successful!");
        resolve(true);
      } else {
        alert("Invalid credentials!");
        resolve(false);
      }
    });
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    alert(`User ${newUser.email} registered successfully!`);
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        {/* Always display the Navbar */}
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <Routes>
          {/* Public route for SignIn and SignUp */}
          <Route
            path="/signin"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace />
              ) : isSignInPage ? (
                <SignIn
                  switchToSignUp={() => setIsSignInPage(false)}
                  handleSignIn={handleSignIn}
                />
              ) : (
                <SignUp
                  switchToSignIn={() => setIsSignInPage(true)}
                  isDarkMode={isDarkMode}
                  addUser={addUser}
                />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            path="/signin"
            element={isAuthenticated ? <Navigate to="/home" replace /> : <SignIn />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/home" replace /> : <SignUp />}
          />

          <Route
            path="/Courses"
            element={isAuthenticated ? <Courses /> : <Navigate to="/" replace />}
          />
          <Route
            path="/payments"
            element={isAuthenticated ? <Payments /> : <Navigate isDarkMode={isDarkMode} to="/" replace />}
          />
          <Route
            path="/DiscussionForm"
            element={isAuthenticated ? <DiscussionForm/> : <Navigate to="/" replace />}
          />
          <Route
            path="/admissions"
            element={isAuthenticated ? <Admissions /> : <Navigate to="/" replace />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Daashboard/> : <Navigate to="/" replace />}
          />

          <Route
            path="/Faculty"
            element={isAuthenticated ? <Faculty /> : <Navigate to="/" replace />}
          />

          <Route
            path="/Students/Grades"
            element={isAuthenticated ? <Grades /> : <Navigate to="/" replace />}
          />



          <Route
            path="/home/instructors"
            element={isAuthenticated ? <h1>Instructors</h1> : <Navigate to="/" replace />}
          />

          {/* Catch-all route */}
          <Route path="*" element={<Pagenotfound isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
