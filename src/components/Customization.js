import React, { useState } from 'react';
import './Customization.css';

const Customization = () => {
    const [label, setLabel] = useState('');

    const handleLabelChange = (e) => setLabel(e.target.value);
    const handleSubmit = () => alert(`Customized Label: ${label}`);

    return (
        <div className="customization">
            <h2>Customize Your Brand Label</h2>
            <input type="text" placeholder="Enter your brand name" value={label} onChange={handleLabelChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Customization;
