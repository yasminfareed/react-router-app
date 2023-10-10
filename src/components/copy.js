import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import './App.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
       <div>
        <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
    </div>
    <ProtectedRoute path="/Products" isAuthenticated={isLoggedIn}>
      <Products />
    </ProtectedRoute>
  </Router>
);
}

export default App;




