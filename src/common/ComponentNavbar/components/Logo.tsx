import React from 'react';
import { Logo as LogoImage } from '../../../assets/images/index';

export default function Logo() {
  return (
    <div className='flex justify-between items-center w-[170px] '>
        <img src={LogoImage} />
        <h3 className='text-black  font-lato text-3xl font-bold leading-5'>Luminae  </h3>
    </div>
  )
}
