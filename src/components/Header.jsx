import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Inventory Management</h1>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Dashboard</Link>
        <Link to="/add-inventory" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add Inventory</Link>
        <Link to="/add-supplier" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add Supplier</Link>
        <Link to="/supplier-list" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Suppliers</Link>
        <Link to="/logout" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Logout</Link>
      </div>
    </nav>
  );
};

// Hover effect functions for smooth transitions
const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = '#0056b3';
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = 'transparent';
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: 'green',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
  },
  linksContainer: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    fontWeight: '500',
  },
};

export default Header;
