import Circle from "@uiw/react-color-circle";
import { useState } from "react";

const ColorPicker = ({changeSelectedColor}) => {
  const [hex, setHex] = useState("#fff");

  const handleChange = (color) => {
    changeSelectedColor(color?.hex);
    setHex(color?.hex);
  };

  return (
    <Circle
      colors={[
        "#FF5733",
        "#FFC300",
        "#7D3C98",
        "#94618E",
        "#3F88C5",
        "#009B77",
        "#3EA055",
        "#00FF00",
        "#FF6F61",
        "#FF8C00",
        "#654321",
        "#2E2E2E",
        "#FFFFFF",
        "#4B0082",
        "#8A2BE2",
        "#00CED1",
        "#FF1493",
        "#FF4500",
        "#FF69B4",
    ]}
      style={{marginTop: "20px", width: "200px"}}
      color={hex}
      onChange={(color) => handleChange(color)}
    />
  );
};

export default ColorPicker;