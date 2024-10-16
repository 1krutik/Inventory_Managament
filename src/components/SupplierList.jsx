import React from 'react';

const SupplierList = () => {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Supplier List</h2>
            <ul style={styles.list}>
                {suppliers.map((supplier) => (
                    <li key={supplier.id} style={styles.listItem}>
                        <strong style={styles.name}>{supplier.name}</strong> 
                        <span style={styles.contact}> - {supplier.contact}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    heading: {
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '1.8rem',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        backgroundColor: '#ffffff',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1rem',
    },
    name: {
        fontWeight: 'bold',
        color: '#007bff',
    },
    contact: {
        fontStyle: 'italic',
        color: '#555',
    },
};

export default SupplierList;
