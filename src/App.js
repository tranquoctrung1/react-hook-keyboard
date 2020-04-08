import React , { useState, useEffect} from 'react';
import './App.css';
import { useHotkeys } from 'react-hotkeys-hook';
import Square from './components/squares';




function App() {

  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  useHotkeys('Up', () => setTranslateY(translateY => translateY - 10));
  useHotkeys('Down', () => setTranslateY(translateY => translateY + 10));
  useHotkeys('Right', () => setTranslateX(translateX => translateX + 10));
  useHotkeys('Left', () => setTranslateX(translateX => translateX - 10));
  
  return (
    
    <div className="App">
      <header className="App-header">
        <Square translateX={translateX} translateY={translateY}/>
      </header>
    </div>
  );
}

export default App;
