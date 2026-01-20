import React from 'react';

const KeyboardAccessibility = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div>
      <h2>Keyboard Accessibility</h2>
      <p>This component shows why native HTML elements like `button` are better than generic `div` elements for interactive controls.</p>

      <hr />

      <h3>❌ Broken Example: Clickable `div`</h3>
      <p>This `div` is clickable, but it's not focusable with the keyboard (try tabbing to it). It also doesn't provide semantic information to screen readers.</p>
      <div onClick={handleClick} style={{ cursor: 'pointer', padding: '8px', border: '1px solid black', display: 'inline-block' }}>
        I am a div
      </div>

      <hr />

      <h3>✅ Fixed Example: Using a `button`</h3>
      <p>This `button` is focusable by default, and screen readers announce it as a "button". It can be activated with both Enter and Space keys.</p>
      <button onClick={handleClick}>
        I am a button
      </button>
    </div>
  );
};

export default KeyboardAccessibility;
