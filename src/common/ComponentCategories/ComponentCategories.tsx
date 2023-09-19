import React from 'react';
import Category from './components/Category';

const categoryArr = ["Woman","Male","Mother-Child","Home & Furniture","Super market","Cosmetics","Shoe & Bag","Electronic","Sport & Outdoor","Best seller"]

export default function ComponentCategories() {
  return (
    <div className='compocategories flex justify-between w-[90%] m-auto'>
        {
            categoryArr.map((item)=>{
                return <Category text={item}/>
            })
        }
    </div>
  )
}
