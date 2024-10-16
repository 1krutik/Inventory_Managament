import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Inventory Management</h1>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/add-inventory" style={styles.link}>Add Inventory</Link>
        <Link to="/add-supplier" style={styles.link}>Add Supplier</Link>
        <Link to="/supplier-list" style={styles.link}>Suppliers</Link>
        
        <Link to="/logout" style={styles.link}>Logout</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color:'white'
  },
  linksContainer: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Header;
