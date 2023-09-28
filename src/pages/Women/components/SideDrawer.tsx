import { useState } from "react";
import {
  // FormControlLabel,
  // Checkbox,
  // FormGroup,
  // Typography,
  // ToggleButton,
  // ToggleButtonGroup,
  Slider,
} from "@mui/material";

// const toggleButtonArray: string[] = [
//   "2xs",
//   "xs",
//   "s",
//   "m",
//   "l",
//   "xl",
//   "2xl",
//   "3xl",
// ];

export default function SideDrawer() {
  // const [size, setSize] = useState<string[]>([]);
  const [minval, setMinval] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(100);

  const handleChange = (
    _event: Event,
    updatedFormats: number | number[]
  ) => {
    // Check if updatedFormats is an array (for range slider) or a single number
    if (typeof updatedFormats === "number") {
      setMinval(updatedFormats);
    }
  };

  const handleMaxSliderChange = (
    _event: Event,
    updatedFormats: number | number[]
  ) => {
    // Check if updatedFormats is an array (for range slider) or a single number
    if (typeof updatedFormats === "number") {
      setMaxVal(updatedFormats);
    }
  };

  return (
    <div className="flex flex-col w-[400px] border">
      {/* ... (rest of your JSX code) */}
      <div className="flex">
        <Slider
          size="small"
          valueLabelDisplay="auto"
          value={minval}
          onChange={handleChange}
          min={0}
          max={30}
          step={10}
        />
        <Slider
          size="small"
          valueLabelDisplay="auto"
          value={maxVal}
          onChange={handleMaxSliderChange}
          min={50}
          max={100}
          step={10}
        />
      </div>
      {/* ... (rest of your JSX code) */}
    </div>
  );
}
