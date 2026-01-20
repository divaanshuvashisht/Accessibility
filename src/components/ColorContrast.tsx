import React from 'react';

const ColorContrast = () => {
  return (
    <div className="component">
      <h2>4. Color Contrast</h2>
      <p>Text should have a sufficient contrast ratio against its background to be readable by people with visual impairments.</p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">1.4.3 Contrast (Minimum)</a>
      </p>

      <hr />

      <h3>❌ Broken Example: Low Contrast</h3>
      <p>This text has a low contrast ratio of 2.2:1, making it difficult for users with moderately low vision to read.</p>
      <div style={{ backgroundColor: '#eee', padding: '10px' }}>
        <p style={{ color: '#aaa' }}>Low contrast text on a light gray background.</p>
      </div>

      <hr />

      <h3>✅ Fixed Example: High Contrast</h3>
      <p>This text has a high contrast ratio of 21:1, which meets the WCAG AAA standard and is much more readable for all users.</p>
      <div style={{ backgroundColor: '#fff', padding: '10px' }}>
        <p style={{ color: '#000' }}>High contrast text on a white background.</p>
      </div>
    </div>
  );
};

export default ColorContrast;
