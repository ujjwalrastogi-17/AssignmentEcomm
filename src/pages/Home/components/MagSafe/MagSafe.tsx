// import React from 'react';
import { Iphone } from '../../../../assets/images';

export default function MagSafe() {
  return (
    <div className=' bg-card-5 min-h-[250px] hidden  md:flex items-center justify-center'>
        <div className='flex justify-center gap-[50px] m-auto w-[70%]'>
            <div className='flex justify-center  flex-col gap-[30px]'>
                <h3 className='text-gray-600 font-lato text-3xl font-bold leading-5 tracking-wider uppercase'>Magsafe</h3>
                <p className='text-gray-500 w-[80%] font-lato text-lg font-medium leading-7'>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
            </div>
            <div>
                <img src={Iphone} alt="" />
            </div>
        </div>
    </div>
  )
}
