import { useState } from "react";

import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Slider,
} from "@mui/material";

const toggleButtonArray: string[] = [
  "2xs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
  "3xl",
];

interface SideNavProps {
  visible: boolean;
}

export default function SideNavContent({ visible }: SideNavProps) {
  const [size, setSize] = useState<string[]>([]);
  const [minval, setMinval] = useState(0);
  const [maxVal, setMaxVal] = useState<number>(100);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    console.log(e);
    setSize(updatedFormats);
  };

  const handleMinSlider = (
    // event: Event,
    newValue: number | number[],
    // activeThumb: number
  ) => {
    if (typeof newValue === "number") {
      setMinval(newValue);
    }
  };
  
  const handleMaxSlider = (
    // event: Event,
    newValue: number | number[],
    // activeThumb: number
  ) => {
    if (typeof newValue === "number") {
      setMaxVal(newValue);
    }
  };

  return (
    <div
      className={`${
        visible ? "sm:hidden block" : "sm:block hidden"
      } flex flex-col overflow-y-visible py-[30px] w-[300px] border`}
    >
      <div className="w-[80%] flex flex-col gap-[40px] m-auto">
        <div className="heading flex gap-[20px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M17 14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14C11 12.3431 12.3431 11 14 11C15.6569 11 17 12.3431 17 14Z"
              stroke="#434343"
              stroke-width="1.5"
            />
            <path
              d="M11 3C11 1.89543 11.8954 1 13 1H15C16.1046 1 17 1.89543 17 3V5C17 6.10457 16.1046 7 15 7H13C11.8954 7 11 6.10457 11 5V3Z"
              stroke="#434343"
              stroke-width="1.5"
            />
            <path
              d="M1 3C1 1.89543 1.89543 1 3 1H5C6.10457 1 7 1.89543 7 3V5C7 6.10457 6.10457 7 5 7H3C1.89543 7 1 6.10457 1 5V3Z"
              stroke="#434343"
              stroke-width="1.5"
            />
            <path
              d="M1 13C1 11.8954 1.89543 11 3 11H5C6.10457 11 7 11.8954 7 13V15C7 16.1046 6.10457 17 5 17H3C1.89543 17 1 16.1046 1 15V13Z"
              stroke="#434343"
              stroke-width="1.5"
            />
          </svg>
          <p className="text-[var(--text-color-light-primary-text, #262626)] font-lato text-base font-bold leading-5">
            All Categories
          </p>
        </div>

        <div className="brand flex flex-col gap-[30px]">
          <h2 className="text-gray-900 font-lato text-base font-bold leading-5 tracking-wide uppercase">
            BRAND
          </h2>
          <div className="border flex items-center w-[100%] m-auto">
            <input className="w-[90%]" type="text" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_451_1704)">
                <path
                  d="M14.6663 14.6668L13.333 13.3335M1.33301 7.66683C1.33301 4.16903 4.16854 1.3335 7.66634 1.3335C11.1641 1.3335 13.9997 4.16903 13.9997 7.66683C13.9997 11.1646 11.1641 14.0002 7.66634 14.0002C4.16854 14.0002 1.33301 11.1646 1.33301 7.66683Z"
                  stroke="#C4C4C4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_451_1704">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="model flex flex-col gap-[20px]">
          <h2 className="text-gray-900 font-lato text-base font-normal leading-5 tracking-wide uppercase">
            MODEL
          </h2>
          <ul className="flex flex-col gap-[15px]">
            <li className="flex justify-between w-[100%] m-auto">
              <p className="text-gray-500 font-lato text-base font-normal leading-5">
                Short{" "}
              </p>{" "}
              <span className="text-gray-600 text-right font-lato text-sm font-normal leading-4">
                60
              </span>
            </li>

            <li className="flex justify-between w-[100%] m-auto">
              <p className="text-gray-500 font-lato text-base font-normal leading-5">
                Short{" "}
              </p>{" "}
              <span className="text-gray-600 text-right font-lato text-sm font-normal leading-4">
                60
              </span>
            </li>

            <li className="flex justify-between w-[100%] m-auto">
              <p className="text-gray-500 font-lato text-base font-normal leading-5">
                Short{" "}
              </p>{" "}
              <span className="text-gray-600 text-right font-lato text-sm font-normal leading-4">
                60
              </span>
            </li>

            <li className="flex justify-between w-[100%] m-auto">
              <p className="text-gray-500 font-lato text-base font-normal leading-5">
                Short{" "}
              </p>{" "}
              <span className="text-gray-600 text-right font-lato text-sm font-normal leading-4">
                60
              </span>
            </li>

            <li className="flex justify-between w-[100%] m-auto">
              <p className="text-gray-500 font-lato text-base font-normal leading-5">
                Short{" "}
              </p>{" "}
              <span className="text-gray-600 text-right font-lato text-sm font-normal leading-4">
                60
              </span>
            </li>
          </ul>
        </div>

        <div className="style flex flex-col gap-[20px]">
          <h2 className="text-gray-900 font-lato text-base font-normal leading-5 tracking-wide uppercase">
            STYLE
          </h2>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Casual
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Business Casual
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Bohemian
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Minimalist
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Uniqlo
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Zara
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Gucci
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Mango
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Ralph Lauren
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-gray-500 font-lato text-base font-normal leading-5">
                  Calvin Klein
                </Typography>
              }
            />
          </FormGroup>
        </div>
        {/* 
        <div className=" color">
          <div className="flex gap-[15px] w-[100%] justify-start flex-wrap"></div>
        </div> */}

        <div className="size flex flex-col gap-[20px]">
          <h2 className="text-gray-900 font-lato text-base font-normal leading-5 tracking-wide uppercase">
            SIZE
          </h2>
          <ToggleButtonGroup
            aria-label="bold"
            value={size}
            onChange={handleChange}
            className="flex w-[100%] justify-start flex-wrap gap-[10px]"
          >
            {toggleButtonArray.map((item) => {
              return (
                <ToggleButton
                  value={item}
                  className="w-[50px] h-[30px]"
                  // aria-label={item}
                >
                  {item}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>

        <div className="slider flex flex-col gap-[20px]">
          <div className="flex justify-between items-center">
            <input
              value={"$ " + minval}
              className="text-[var(--text-color-light-secondary-text, #555)] font-lato text-base font-normal leading-5 border w-[42%] text-center h-[50px] flex justify-center"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect x="3" y="9" width="14" height="2" rx="1" fill="#C4C4C4" />
            </svg>
            <input
              value={"$ " + maxVal}
              className="text-[var(--text-color-light-secondary-text, #555)] font-lato text-base font-normal leading-5 border w-[42%] h-[50px] text-center flex justify-center"
            />
          </div>

          <div className="flex">
            <Slider
              // className="rotate-180"
              size="small"
              // valueLabelDisplay="auto"
              defaultValue={200}
              min={0}
              max={200}
              value={minval}
              track="inverted"
              step={2}
              onChange={()=>handleMinSlider}
              // onChange={()=>handleMinSlider}
            />

            <Slider
              size="small"
              // valueLabelDisplay="auto"
              defaultValue={300}
              min={200}
              max={500}
              step={10}
              onChange={()=>handleMaxSlider}
            />
          </div>

          <div className="bottom flex justify-between">
            <p className=" text-gray-400 font-lato text-base font-normal text-[12px] leading-5">
              Minimum $200
            </p>
            <p className=" text-gray-400  font-lato text-base font-normal text-[12px] leading-5">
              Maximum $500
            </p>
          </div>
          <p className="text-gray-500  font-lato text-base font-normal text-[12px] leading-5">
            878 products found
          </p>
        </div>
      </div>
    </div>
  );
}
