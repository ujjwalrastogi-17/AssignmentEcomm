// import React from "react";
import Card from "../Home/components/Top100/components/Card";
import { NoResults as NoResultsImage } from "../../assets/images";
import { camera } from "../../assets/images";

export default function NoResults() {
  return (
    <div className="w-[100%] my-[100px] flex flex-col gap-[20px]">
      <div className="flex flex-col lg:flex-row justify-between gap-[10%] w-[70%] m-auto items-center">
        <div className="w-[100%] flex justify-center md:w-[50%]">
          <img className="min-w-[360px] sm:w-[100%]" src={NoResultsImage} alt="" />
        </div>
        <div className="flex  w-[300px] sm:min-w-[400px] w-[50%] flex-col border p-6 gap-[20px]">
          <div>
            <h3 className="text-gray-700  font-lato text-base font-semibold leading-5">
              No results were found for searching " Blue Sony Camera ".
            </h3>
          </div>

          <div className="flex gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clip-path="url(#clip0_108_84692)">
                <path
                  d="M13 14L13 6.99997M4 9.13192V14.8681C4 16.3914 4.7923 17.799 6.07846 18.5607L10.9215 21.4288C12.2077 22.1904 13.7923 22.1904 15.0785 21.4288L19.9215 18.5607C21.2077 17.799 22 16.3914 22 14.8681V9.13192C22 7.6086 21.2077 6.20099 19.9215 5.43932L15.0785 2.57125C13.7923 1.80958 12.2077 1.80958 10.9215 2.57125L6.07846 5.43932C4.7923 6.20099 4 7.6086 4 9.13192Z"
                  stroke="#FF7A00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_84692">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="text-gray-500 font-lato text-base font-normal leading-5">
              We recommend you to search different clear key words to get the
              best result.
            </p>
          </div>

          <div className="flex gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clip-path="url(#clip0_108_84692)">
                <path
                  d="M13 14L13 6.99997M4 9.13192V14.8681C4 16.3914 4.7923 17.799 6.07846 18.5607L10.9215 21.4288C12.2077 22.1904 13.7923 22.1904 15.0785 21.4288L19.9215 18.5607C21.2077 17.799 22 16.3914 22 14.8681V9.13192C22 7.6086 21.2077 6.20099 19.9215 5.43932L15.0785 2.57125C13.7923 1.80958 12.2077 1.80958 10.9215 2.57125L6.07846 5.43932C4.7923 6.20099 4 7.6086 4 9.13192Z"
                  stroke="#FF7A00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_84692">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-gray-500 font-lato text-base font-normal leading-5">
              {" "}
              You can see the most related purchased products bellow.
            </p>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-scroll  justify-between w-[70%]  m-auto gap-[20px]">
        <Card width_sm={300} width_lg={350} img={camera} />
        <Card width_sm={300} width_lg={350} img={camera} />
        <Card width_sm={300} width_lg={350} img={camera} />
        <Card width_sm={300} width_lg={350} img={camera} />
      </div>
    </div>
  );
}
