import FormLabels from './components/FormLabels';
import KeyboardAccessibility from './components/KeyboardAccessibility';
import ImageAltText from './components/ImageAltText';
import ColorContrast from './components/ColorContrast';
import ErrorMessages from './components/ErrorMessages';
import './App.css';

function App() {
  return (
    <>
      <h1>Accessibility Demo</h1>
      <FormLabels />
      <KeyboardAccessibility />
      <ImageAltText />
      <ColorContrast />
      <ErrorMessages />
    </>
  );
}

export default App;
