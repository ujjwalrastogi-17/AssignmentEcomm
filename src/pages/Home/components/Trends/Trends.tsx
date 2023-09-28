// import React from "react";
import Card from "./components/Card";

import { TrendingCardProps } from "../../utils/DummyData";

interface TrendProps {
  arr:TrendingCardProps[]
}

export default function Trends({arr}:TrendProps) {
  return (
    <div className="flex flex-col gap-[10px] sm:flex-row justify-between w-[90%] m-auto">
      {arr.map((item) => {
        return (
          <Card
            heading={item.heading}
            desc={item.desc}
            color={item.color}
            img={item.img}
          />
        );
      })}
    </div>
  );
}
