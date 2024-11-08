import React from 'react';
import './Order.css';

const Order = () => (
    <div className="order">
        <h2>Order Now</h2>
        <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Address" required />
            <button type="submit">Place Order</button>
        </form>
    </div>
);

export default Order;
