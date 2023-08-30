import { useState } from 'react';
import '../App.css';
import Pixel from './Pixel';

const Canvas = () => {

  const changePixelColor = (index) => {
    console.log(index);
  };

  const [pixels, setPixels] = useState([
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
    '#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#174557',
  ]);

  return (
    <div className="grid-cont">
      {pixels.map((pixel, index) => (
      <Pixel key={index} index={index} color={pixel}
        changePixelColor={changePixelColor}/>
      ))}  
    </div>
  );
};

export default Canvas;