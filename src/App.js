import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="/products" element={<ProtectedRoute components={Products}  />} />
        </Routes>
      </div>
    </Router>
);
}

export default App;




