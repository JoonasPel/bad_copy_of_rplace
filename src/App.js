import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas />
        <ColorPicker />
      </header>
    </div>
  );
};

export default App;
