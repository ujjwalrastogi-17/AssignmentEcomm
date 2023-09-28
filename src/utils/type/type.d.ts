export interface ProductType{
    id:number,
    img:string,
    name:string,
    desc:string,
    rating:number,
    quantity:number
    anyOffer:boolean,
    offerPrice?:number,
    price:number,
    offPercent?:number,
    inCart:boolean,
    inFav:boolean,
}