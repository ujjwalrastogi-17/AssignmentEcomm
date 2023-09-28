// import React from 'react';

interface MenuItemProps{
    text:string;
}

export default function MenuItem({text}:MenuItemProps) {
  return (
    <div>
        <p className='text-gray-500 font-lato text-base font-normal leading-5'>{text}</p>
    </div>
  )
}
