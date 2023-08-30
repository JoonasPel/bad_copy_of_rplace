import '../App.css';

const Pixel = ({index, color, highlightIdx, selectPixel}) => {
  const highlighted = highlightIdx === index;

  return (
    <div style={{backgroundColor: color}} onClick={() => selectPixel(index)}
    className={highlighted ? "highlighted-grid-item" : "grid-item"}>
    </div>
  );
};

export default Pixel;