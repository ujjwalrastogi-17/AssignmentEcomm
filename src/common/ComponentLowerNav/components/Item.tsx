import { ReactNode } from 'react';

interface ItemProps{
    icon:ReactNode,
    text:string
}

export default function Item({icon, text}:ItemProps) {
  return (
    <div className='flex w-[70px] justify-between'>
        <p>{icon}</p>
        <p className='text-white font-lato text-base font-bold leading-5'>{text}</p>
    </div>
  )
}
