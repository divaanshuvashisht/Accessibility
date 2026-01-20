import React from 'react';

const ButtonSpacing = () => {
  return (
    <div className="component">
      <h2>6. Button Spacing</h2>
      <p>
        This component demonstrates the difference between poorly spaced buttons
        and accessible button spacing for touch, motor, and keyboard users.
      </p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" target="_blank" rel="noopener noreferrer">2.5.5 Target Size</a>
      </p>

      <hr />

      <h3>❌ Broken Example: Buttons Too Close</h3>
      <p>
        These buttons are placed too close together. This increases the risk of
        accidental clicks, especially for users with motor impairments or on touch devices.
      </p>

      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>

      <hr />

      <h3>✅ Fixed Example: Accessible Button Spacing</h3>
      <p>
        These buttons have sufficient spacing and minimum touch target size (44x44 CSS pixels).
        This reduces accidental activation and improves usability.
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button style={{ minHeight: '44px', minWidth: '44px' }}>Save</button>
        <button style={{ minHeight: '44px', minWidth: '44px' }}>Cancel</button>
      </div>
    </div>
  );
};

export default ButtonSpacing;
