// import React from "react";

export default function Card() {
  return (
    <div>
      <li className="group  relative dropdown  px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
        <a>Dropdown</a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
          <ul className="top-0 w-48 bg-white shadow px-6 py-8">
            <li className="py-1">
              <a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                Item
              </a>
            </li>
            <li className="py-1">
              <a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                Item 2
              </a>
            </li>
            <li className="py-1">
              <a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                Item 3
              </a>
            </li>
            <li className="py-1">
              <a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                Item 4
              </a>
            </li>
            <li className="py-1">
              <a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                Item 5
              </a>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
}
