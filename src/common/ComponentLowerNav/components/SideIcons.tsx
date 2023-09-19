import React from 'react';
import SignIn from '../../../assets/svgs/SignIn';
import FavIcon from '../../../assets/svgs/FavIcon';
import Bag from '../../../assets/svgs/Bag';
import Item from './Item';
const itemArr= [{
    icon:<SignIn/>,
    text:"SignIn",
},
{
    icon:<FavIcon/>,
    text:"Favourite"
},{
    icon:<Bag/>,
    text:"Bag"
}]

export default function SideIcons() {
  return (
    <div className='flex justify-between w-[40%]'>
        {
            itemArr.map((item)=>{
                return <Item icon={item.icon} text={item.text}/>
            })
        }
    </div>
  )
}
