import React, { useState } from 'react';

function SignUp({ switchToSignIn, addUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ email, password });
    switchToSignIn();
  };

  return (
    <div className="signup-card-container">
      <form onSubmit={handleSubmit} className='signup-card'>
      <h1 className="signup-header">Sign Up</h1>
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
        <button className='signup-button' type="submit">Sign Up</button>
        <a onClick={switchToSignIn}>Already have an account? Sign in</a>
      </form>
    </div>
  );
}

export default SignUp;