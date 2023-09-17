import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import Pixel from './Pixel';
import ColorPicker from './ColorPicker';

const URL = "https://l0c06d1a03.execute-api.eu-north-1.amazonaws.com"+
"/prod/data";

const Canvas = () => {
  const [pixels, setPixels] = useState([]);
  const [highlightedPixelIdx, setHighlightedPixelIdx] = useState(-1);
  const [hex, setHex] = useState("#FFFFFF");
  const [lastUpdatedTimestamp, setLastUpdatedTimestamp] = useState(0);

  const getData = async () => {
    const res = await axios.get(URL, {
      params: {
        "canvas": 1,
        "timestamp": lastUpdatedTimestamp,
      }
    });
    const pixelsArr = res?.data;
    if (Array.isArray(pixelsArr) && pixelsArr.length > 0) {
      setPixels(pixelsArr);
    }
  }

  const sendChangeColorToServer = async () => {
    try {
      await axios.get(URL, {
        params: {
          "index": highlightedPixelIdx,
          hex,
        }
      });
      await getData();
    } catch (error) {
      console.warn("color change FAILED");
    }
  };

  const changeSelectedColor = (colorHex) => {
    setHex(colorHex);
  }

  const selectPixel = (index) => {
    setHighlightedPixelIdx(index);
  };

  useEffect(() => {
    getData();
    const id = setInterval(() => {getData()}, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    <div className="grid-cont">
      {pixels.map((pixel, index) => (
      <Pixel key={index} index={index} color={pixel}
        highlightIdx={highlightedPixelIdx} selectPixel={selectPixel}/>
      ))}
      <div style={{display: 'flex', width: '40vw'}}>
        <div className='box'>
          <ColorPicker changeSelectedColor={changeSelectedColor}/>
          <button onClick={sendChangeColorToServer} style={{flex: 1}}>
            Change Color
          </button>
        </div>
        <div className='textBox'>
          <p>1. Click Pixel</p>
          <p>2. Click Color</p>
          <p>3. Click "Change Color"</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Canvas;