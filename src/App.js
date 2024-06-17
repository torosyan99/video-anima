import { useRef } from 'react';
import Background from './components/Background/Background';
import Slider from './components/Slider/Slider';

import './style/main.css';

function App() {
  const video = useRef();
  return (
    <div className="app">
        <Slider refVideo={video} />
        <Background refVideo={video}/>
    </div>
  );
}

export default App;
