import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
  const handleLogout = () => {
    signOut(auth);
    alert('Logged out successfully!');
  };

  return (
    <div>
      <h2>Welcome to your Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
