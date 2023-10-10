import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
        {/* <Link to="/logout">Logout</Link> */}
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
