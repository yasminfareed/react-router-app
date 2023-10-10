import React, { useState } from 'react';
import Product from './Products';

const Login = () => {
  // Hard-coded credentials
  const hardCodedUsername = 'yasmin';
  const hardCodedPassword = '123';

  // State to track user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered credentials match the hard-coded values
    if (username === hardCodedUsername && password === hardCodedPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // You can also clear the username and password fields here if needed
  };

  if (isLoggedIn) {
    return (
      <div>
        <Product />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className='log'>
      <h2>Login First to Access Our Products</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
