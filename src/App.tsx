import React, { useState } from 'react';
import FormLabels from './components/FormLabels';
import KeyboardAccessibility from './components/KeyboardAccessibility';
import ImageAltText from './components/ImageAltText';
import ColorContrast from './components/ColorContrast';
import ErrorMessages from './components/ErrorMessages';
import ButtonSpacing from './components/ButtonSpacing';
import LandmarkRegions from './components/LandmarkRegions';
import './App.css';

const components = [
  { name: 'Form Labels', component: <FormLabels /> },
  { name: 'Keyboard', component: <KeyboardAccessibility /> },
  { name: 'Image Alt Text', component: <ImageAltText /> },
  { name: 'Color Contrast', component: <ColorContrast /> },
  { name: 'Error Messages', component: <ErrorMessages /> },
  { name: 'Button Spacing', component: <ButtonSpacing /> },
  { name: 'Landmarks', component: <LandmarkRegions /> },
];


function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="app-container">
      <h1>Web Accessibility Best Practices</h1>
      <nav className="tabs">
        {components.map((item, index) => (
          <button
            key={item.name}
            className={`tab-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <main>
        {components.map((item, index) => (
          <div
            key={item.name}
            id={`tab-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={index !== activeIndex}
            className="tab-content"
          >
            {item.component}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
