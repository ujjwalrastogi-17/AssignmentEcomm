import React from 'react';

interface CardProps{
    title:string,
    desc:string,
    rating:string,
    offerPrice:string,
    price:string
}

export default function Card({title,desc, rating,offerPrice, price}:CardProps) {
  return (
    <div>
        <h5>DEAL OF THE DAY</h5>
        <h3>12 : 43 : 12</h3>
        <img/>
        <p>{title}</p>
        <p>{desc}</p>
        <p>{rating}</p>
        <p>{offerPrice}</p>
        <p>{price}</p>
    </div>
  )
}
