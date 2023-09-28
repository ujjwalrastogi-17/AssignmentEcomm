// import React from 'react'
import TopBanner from './components/TopBanner/TopBanner'
import TimerCards from './components/TimerCards/components/TimerCards'
import MustHaves from './components/MustHaves/MustHaves'
import Trends from './components/Trends/Trends'
import { TrendCards1,TrendCards2 } from './utils/DummyData'
import MagSafe from './components/MagSafe/MagSafe'
import Top100 from './components/Top100/Top100'


export default function Home() {
  return (
    <div className='flex flex-col gap-[50px]'>
        <TopBanner/>
        <TimerCards/>
        <MustHaves/>
        <Top100/>
        <Trends arr={TrendCards1}/>
        <MagSafe/>
        <Trends arr={TrendCards2}/>
    </div>
  )
}
