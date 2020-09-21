import React, { useState } from 'react';
import Canvas from './components/canvas';
import Button from './components/button';

import './App.css';

function App({ props }) {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };
  const makeFile = () => {
    return {
      mime: 'application/mp4',
      filename: 'video.mp4',
      contents: 'all of the exports',
    };
  };

  return (
    <div className='App'>
      <Canvas display={display} />
      <div className='button-container'>
        <Button type='submit' text='Play' handleClick={handleClick} />
        <Button type='click' text='Download' handleClick={makeFile} download />;
      </div>
    </div>
  );
}

export default App;
