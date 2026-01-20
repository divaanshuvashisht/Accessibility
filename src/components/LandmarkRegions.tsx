import React from 'react';

const LandmarkRegions = () => {
  return (
    <div className="component">
      <h2>7. Landmark Regions</h2>
      <p>
        Landmark regions programmatically define the purpose of different sections on a page. Using semantic HTML elements like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> creates a navigable structure for screen reader users.
      </p>
      <p>
        <strong>WCAG Guideline:</strong> <a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" target="_blank" rel="noopener noreferrer">1.3.1 Info and Relationships</a> & <a href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html" target="_blank" rel="noopener noreferrer">2.4.1 Bypass Blocks</a>
      </p>

      <hr />

      <h3>❌ Broken Example: Generic `div` Elements</h3>
      <p>
        This layout uses only <code>&lt;div&gt;</code> elements. While visually correct, it provides no semantic information, forcing screen reader users to navigate content linearly without understanding the page structure.
      </p>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', fontWeight: 'bold' }}>
          Page Header
        </div>
        <div style={{ padding: '20px 0' }}>
          Main page content goes here.
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', fontSize: 'small' }}>
          Copyright 2026
        </div>
      </div>

      <hr />

      <h3>✅ Fixed Example: Using Semantic Landmark Elements</h3>
      <p>
        This layout uses <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>. Screen readers can now identify these regions, allowing users to jump directly to the main content or other sections, significantly improving navigation efficiency.
      </p>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <header style={{ backgroundColor: '#f0f0f0', padding: '10px', fontWeight: 'bold' }}>
          Page Header
        </header>
        <main style={{ padding: '20px 0' }}>
          Main page content goes here.
        </main>
        <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', fontSize: 'small' }}>
          Copyright 2026
        </footer>
      </div>
    </div>
  );
};

export default LandmarkRegions;
