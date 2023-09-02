import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import Pixel from './Pixel';

const URL = "https://l0c06d1a03.execute-api.eu-north-1.amazonaws.com"+
"/prod/data";

const Canvas = () => {
  const [pixels, setPixels] = useState([]);
  const [highlightedPixelIdx, setHighlightedPixelIdx] = useState(-1);

  const getData = async () => {
    const res = await axios.get(URL, {params: {"canvas": 1}});
    setPixels(res?.data);
  }

  const selectPixel = (index) => {
    console.log(index);
    setHighlightedPixelIdx(index);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid-cont">
      {pixels.map((pixel, index) => (
      <Pixel key={index} index={index} color={pixel}
        highlightIdx={highlightedPixelIdx} selectPixel={selectPixel}/>
      ))}  
    </div>
  );
};

export default Canvas;