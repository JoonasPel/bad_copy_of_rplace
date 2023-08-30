import '../App.css';

const Pixel = ({index, color, changePixelColor}) => {
  return (
    <div className="grid-item" style={{backgroundColor: color}} 
      onClick={() => changePixelColor(index)} />
  );
};

export default Pixel;