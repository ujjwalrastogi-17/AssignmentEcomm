import React from 'react'
import LeftImage from '../components/LeftImage'
import RightOffer from '../components/RightOffer'

export default function TopBanner() {
  return (
    <div className='topBanner flex border justify-between '>
        <LeftImage/>
        <RightOffer/>
    </div>
  )
}
