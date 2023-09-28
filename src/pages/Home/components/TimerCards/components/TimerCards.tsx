// import React from 'react'
import CardList from './components/CardList'

export default function TimerCards() {
  return (
    <div className='w-[90%] m-auto flex flex-col gap-[50px]'>
        <h1 className='text-black font-lato text-4xl font-normal leading-5'>Flash Sales</h1>
        <CardList/>
    </div>
  )
}
