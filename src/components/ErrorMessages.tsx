import React, { useState } from 'react';

const ErrorMessages = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [email2, setEmail2] = useState('');
  const [error2, setError2] = useState('');

  const handleSubmitBroken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert('Form submitted!');
    }
  };

  const handleSubmitFixed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email2.includes('@')) {
      setError2('Please enter a valid email address.');
    } else {
      setError2('');
      alert('Form submitted!');
    }
  };

  return (
    <div className="component">
      <h2>5. Error Messages</h2>
      <p>Error messages should be clearly associated with the input they relate to and announced by screen readers in a timely manner.</p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" target="_blank" rel="noopener noreferrer">3.3.1 Error Identification</a>
      </p>

      <hr />

      <h3>❌ Broken Example: Simple Text Error</h3>
      <p>This error message is just a plain text element. Screen reader users may not know an error has occurred, and the error is not programmatically associated with the input.</p>
      <form onSubmit={handleSubmitBroken}>
        <label htmlFor="email-broken">Email</label>
        <input 
          id="email-broken"
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <hr />

      <h3>✅ Fixed Example: Using `aria-describedby` and `role="alert"`</h3>
      <p>This error message is linked to the input with `aria-describedby`, providing context. The `role="alert"` on the error message ensures it is announced immediately by screen readers without interrupting their workflow.</p>
      <form onSubmit={handleSubmitFixed}>
        <label htmlFor="email-fixed">Email</label>
        <input 
          id="email-fixed"
          type="email"
          value={email2} 
          onChange={(e) => setEmail2(e.target.value)}
          aria-describedby="email-error"
          aria-invalid={!!error2}
        />
        <button type="submit">Submit</button>
        {error2 && <p id="email-error" role="alert" style={{ color: 'red' }}>{error2}</p>}
      </form>
    </div>
  );
};

export default ErrorMessages;
