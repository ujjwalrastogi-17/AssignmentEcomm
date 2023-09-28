// import React from "react";

interface ModelItemProps {
  model: string;
  numOfItems: number;
}

export default function ModelItem({ model, numOfItems }: ModelItemProps) {
  return (
    <div>
      <li className="flex justify-between w-[100%] m-auto">
        <p>{model} </p> <span>{numOfItems}</span>
      </li>
    </div>
  );
}
