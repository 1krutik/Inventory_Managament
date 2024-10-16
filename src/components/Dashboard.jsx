import React from 'react';
import InventoryList from './InventoryList';
import Logout from './Logout';

const Dashboard = () => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    return (
        <div className="dashboard">
            <h2 style={{ textAlign: 'center' }}>Inventory Dashboard</h2>
            <InventoryList items={items} suppliers={suppliers} />
            
            <Logout/>
        
        </div>
    );
};


const styles = {
    footer: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
    },
};

export default Dashboard;
