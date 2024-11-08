import React, { useState } from 'react';
import './Customization.css';

const Customization = () => {
  const [label, setLabel] = useState('');
  const [color, setColor] = useState('#007bff');
  const [preview, setPreview] = useState(false);

  const handleLabelChange = (e) => setLabel(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);
  const handlePreview = () => setPreview(true);

  return (
    <div className="customization">
      <h2>Customize Your Brand Label</h2>
      <input
        type="text"
        placeholder="Enter your brand name"
        value={label}
        onChange={handleLabelChange}
      />
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        title="Choose label color"
      />
      <button onClick={handlePreview}>Preview</button>

      {preview && (
        <div className="label-preview" style={{ backgroundColor: color }}>
          <h3>{label || "Your Brand"}</h3>
        </div>
      )}
    </div>
  );
};

export default Customization;
