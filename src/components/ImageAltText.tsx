import React from 'react';

const ImageAltText = () => {
  return (
    <div>
      <h2>Image Alt Text</h2>
      <p>Alternative text provides a textual alternative to non-text content in web pages.</p>

      <hr />

      <h3>❌ Broken Example: Missing `alt` text</h3>
      <p>This image is missing the `alt` attribute. Screen readers might announce the file name, which is not helpful.</p>
      <img src="https://via.placeholder.com/150" />

      <hr />

      <h3>✅ Fixed Example: Descriptive `alt` text</h3>
      <p>This image has a descriptive `alt` attribute. Screen readers will read this text, making the image accessible.</p>
      <img src="https://via.placeholder.com/150" alt="A placeholder image from via.placeholder.com"     />
      
      <hr />

      <h3>✅ Fixed Example: Decorative Image</h3>
      <p>If an image is purely decorative, use an empty `alt` attribute. This tells screen readers to ignore the image.</p>
      <img src="https://via.placeholder.com/150" alt="" />
    </div>
  );
};

export default ImageAltText;
