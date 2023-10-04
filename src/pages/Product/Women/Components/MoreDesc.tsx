import { useState } from "react";
import { detailArray } from "../../../../utils/dummyData/dummyData";
import DetailCard from "./DetailCard";

export default function MoreDesc() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div className={`flex w-[100%] flex-col justify-start fading-div gap-[20px]`}>
      <div
        className={`${
          showMore ? "h-[300px] overflow-hidden opacity-60" : ""
        } w-[90%] m-auto sm:w-[100%] gap-[30px] grid grid-cols-2`}
      >
        {detailArray.map((item) => {
          return (
            <DetailCard
              title={item.title}
              isList={item.isList}
              para={item.isList ? "" : item.para}
              list={item.isList ? item.list : []}
              bullets={item.bullets ? item.bullets : false}
            />
          );
        })}
      </div>

      <button
        className="w-[150px] text-left uppercase font-lato"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? (
          <div className="flex gap-[10px] w-[100%] items-center justify-center font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>

            {/* <div className="flex justify-between w-[100%]">
              <div className="border-2 h-0 w-[49%]"></div> */}
              <p>Show More </p>
              {/* <div className="border-2 h-0 w-[49%]"></div>
            </div> */}
          </div>
        ) : (
          <div className="flex gap-[10px] opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 10L12 6M12 6L16 10M12 6V18"
                stroke="#262626"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Show Less</p>
          </div>
        )}
      </button>
    </div>
  );
}
