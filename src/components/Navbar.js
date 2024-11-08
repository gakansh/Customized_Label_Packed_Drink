import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <h1>Water Brand</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/customization">Customize Label</Link>
            <Link to="/order">Order Now</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
);

export default Navbar;
