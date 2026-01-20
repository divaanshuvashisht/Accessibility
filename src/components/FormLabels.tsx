import React from 'react';

const FormLabels = () => {
  return (
    <div className="component">
      <h2>1. Form Labels</h2>
      <p>
        This component demonstrates the importance of programmatically associating labels with form inputs. 
        This ensures that screen reader users understand the purpose of the input.
      </p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" target="_blank" rel="noopener noreferrer">3.3.2 Labels or Instructions</a>
      </p>
      
      <hr />

      <h3>❌ Broken Example: Placeholder as Label</h3>
      <p>This input uses a placeholder attribute instead of a `label`. Screen readers may not announce the purpose of the input, and the text disappears when the user starts typing.</p>
      <form>
        <input type="text" placeholder="Enter your name" />
      </form>

      <hr />

      <h3>✅ Fixed Example: Using `htmlFor` and `id`</h3>
      <p>This input is correctly associated with a `label` using the `htmlFor` and `id` attributes. This ensures screen readers announce the label when the input is focused.</p>
      <form>
        <label htmlFor="name">Enter your name</label>
        <input type="text" id="name" />
      </form>
    </div>
  );
};

export default FormLabels;
