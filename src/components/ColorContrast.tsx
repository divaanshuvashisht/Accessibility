import React from 'react';

const ColorContrast = () => {
  return (
    <div>
      <h2>Color Contrast</h2>
      <p>Text should have a contrast ratio of at least 4.5:1 against its background.</p>

      <hr />

      <h3>❌ Broken Example: Low Contrast</h3>
      <p style={{ color: '#aaa' }}>This text has low contrast, making it difficult for some users to read.</p>

      <hr />

      <h3>✅ Fixed Example: High Contrast</h3>
      <p style={{ color: '#000' }}>This text has high contrast, which is much more readable.</p>
    </div>
  );
};

export default ColorContrast;
