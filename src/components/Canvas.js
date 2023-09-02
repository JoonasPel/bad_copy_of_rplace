import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import Pixel from './Pixel';

const URL = "https://l0c06d1a03.execute-api.eu-north-1.amazonaws.com"+
"/prod/data";

const Canvas = () => {
  const [pixels, setPixels] = useState([]);
  const [highlightedPixelIdx, setHighlightedPixelIdx] = useState(-1);
  const [text, setText] = useState("");

  const getData = async () => {
    const res = await axios.get(URL, {params: {"canvas": 1}});
    setPixels(res?.data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(URL, {
        params: {
          "index": highlightedPixelIdx,
          "hex": text,
        }
      });
      await getData();
    } catch (error) {
      console.warn("color change FAILED");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
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

      <form onSubmit={handleSubmit}>
        <label>
          HexColor:
          <input type="text" value={text} onChange={handleChange}/>
        </label>
        <input type="submit" value="Change Color" />
      </form>
    </div>
  );
};

export default Canvas;