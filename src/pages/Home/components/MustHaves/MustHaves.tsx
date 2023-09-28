// import React from 'react'
import CardList from './components/CardList'

export default function MustHaves() {
  return (
    <div className='flex w-[90%] m-auto justify-start items-start flex-col gap-[50px]'>
        <h2 className='text-black font-lato text-4xl font-medium leading-5'>Trending must-haves</h2>
        <CardList/>
    </div>
  )
}
