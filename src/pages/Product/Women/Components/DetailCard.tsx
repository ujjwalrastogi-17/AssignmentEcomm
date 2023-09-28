import React from "react";

// export interface bullet{
//     content:string,
//     icon:ReactNode
// }

type bullet = string[] | { content: string; icon: React.FC }[];

export interface DetailProps {
  title: string;
  isList: boolean;
  para?: string;
  list?: bullet;
  bullets?: boolean;
}


export default function DetailCard({
  title,
  isList,
  para,
  list,
}: 
DetailProps) {
  return (
    <div className="flex flex-col gap-[20px]">
      <h3 className="text-text-color-light-primary-text font-lato text-[15px] sm:text-16 font-bold leading-25">
        {title}
      </h3>
      {isList ? (
        <ul className="flex flex-col gap-[10px]">
          {list?.map((item, index) => (
            <li
              className="text-text-color-light-secondary-text ml-[20px] list-disc font-lato text-14 font-normal leading-20"
              key={index}
            >
              {typeof item === "string" ? (
                item
              ) : (
                <div className="flex gap-[20px]">
                  {item.icon && <item.icon />} {item.content}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-text-color-light-secondary-text font-lato text-14 font-normal leading-20">
          {para}
        </div>
      )}
    </div>
    // </div>
  );
}
