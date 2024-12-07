import React, { useState } from 'react';

function SignIn({ switchToSignUp, handleSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(email, password);
  };

  return (
    <div className="signup-card-container">
      <form className='signup-card' onSubmit={handleSubmit}>
      <h1 >Sign In</h1>,
      
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='signup-button' type="submit">Sign In</button>
        <a onClick={switchToSignUp}>Don't have an account? Sign up</a>
      </form>
    </div>
  );
}

export default SignIn;