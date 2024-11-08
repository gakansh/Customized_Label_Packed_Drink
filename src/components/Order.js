import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) return 'Invalid email format';
    if (!phoneRegex.test(phone)) return 'Phone number must be 10 digits';
    if (!name || !address) return 'All fields are required';

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
    } else {
      alert('Order placed successfully!');
      setError('');
    }
  };

  return (
    <div className="order">
      <h2>Order Now</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Place Order</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Order;
