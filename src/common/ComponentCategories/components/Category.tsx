import React from 'react'

interface CategoryProps{
    text:string
}

export default function Category({text}:CategoryProps) {
  return (
    <div className='hidden md:flex w-31 h-20 justify-center items-center'>
        <p className='text-right text-custom-font text-14 font-normal leading-20'>{text}</p>
    </div>
  )
}
