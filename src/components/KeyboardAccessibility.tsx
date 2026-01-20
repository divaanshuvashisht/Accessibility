import React from 'react';

const KeyboardAccessibility = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div className="component">
      <h2>2. Keyboard Accessibility</h2>
      <p>
        This component shows why native HTML elements like <code>&lt;button&gt;</code> are better than generic <code>&lt;div&gt;</code> elements for interactive controls.
      </p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html" target="_blank" rel="noopener noreferrer">2.1.1 Keyboard</a>
      </p>

      <hr />

      <h3>❌ Broken Example: Clickable `div`</h3>
      <p>This `div` is clickable with a mouse, but it's not focusable with the keyboard (try tabbing to it). It also doesn't provide semantic information to screen readers and cannot be activated with the Enter or Space keys.</p>
      <div onClick={handleClick} style={{ cursor: 'pointer', padding: '8px', border: '1px solid black', display: 'inline-block' }}>
        I am a div
      </div>

      <hr />

      <h3>✅ Fixed Example: Using a `button`</h3>
      <p>This `button` is focusable by default, and screen readers announce it as a "button". It can be activated with both Enter and Space keys, making it accessible to keyboard and screen reader users.</p>
      <button onClick={handleClick}>
        I am a button
      </button>
    </div>
  );
};

export default KeyboardAccessibility;
