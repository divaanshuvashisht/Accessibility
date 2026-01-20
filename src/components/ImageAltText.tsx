import React from 'react';

const ImageAltText = () => {
  return (
    <div className="component">
      <h2>3. Image Alt Text</h2>
      <p>Alternative text provides a textual alternative to non-text content in web pages, making images accessible to screen reader users.</p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html" target="_blank" rel="noopener noreferrer">1.1.1 Non-text Content</a>
      </p>

      <hr />

      <h3>❌ Broken Example: Missing `alt` text</h3>
      <p>This image is missing the `alt` attribute. Screen readers might announce the file name, which is not helpful and can be confusing.</p>
      <img src="https://via.placeholder.com/150" />

      <hr />

      <h3>✅ Fixed Example: Descriptive `alt` text</h3>
      <p>This image has a descriptive `alt` attribute. Screen readers will read this text, conveying the purpose and content of the image.</p>
      <img src="https://via.placeholder.com/150" alt="A placeholder image from via.placeholder.com, 150x150 pixels." />
      
      <hr />

      <h3>✅ Fixed Example: Decorative Image</h3>
      <p>If an image is purely decorative and adds no informational value, use an empty `alt` attribute (`alt=""`). This tells screen readers to ignore the image.</p>
      <img src="https://via.placeholder.com/150" alt="" />
    </div>
  );
};

export default ImageAltText;
