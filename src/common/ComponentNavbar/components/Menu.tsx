import React from 'react'
import MenuItem from './MenuItem'

const menuArray:Array<string> = ["About Us","Blog","Contact Us","Help & support"]

export default function Menu() {
  return (
    <div className='flex md:visible invisible items-center w-[70%] justify-between'>
        {
            menuArray.map((text)=>{
                return <MenuItem text={text}/>
            })
        }
    </div>
  )
}
