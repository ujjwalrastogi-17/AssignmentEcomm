// import React from 'react';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
// import ComponentCategories from '../../../common/ComponentCategories/ComponentCategories';
import ComponentCard from '../../../common/ComponentCard/ComponentCard';

export default function CardGrid() {

  const productArr = useAppSelector((state)=>state.ProductArray.ProductArray);
  console.log('prodarr',productArr);
  return (
    <div className='flex flex-wrap justify-center xl:justify-end gap-[50px] w-[100%]'>
      {
        productArr.map((card)=>{
          return(
            <ComponentCard Card={card} width_lg={500} width_sm={250}/>
          )
        })
      }
    </div>
  )
}
