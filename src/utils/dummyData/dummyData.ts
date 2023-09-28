import { ProductType } from "../type/type";
import { girlPhoto, WomenCard, GirlPhoto } from "../../assets/images";
import { DetailProps } from "../../pages/Product/Women/Components/DetailCard";
import A from "../../assets/svgs/bulletSvgs/A";
import B from "../../assets/svgs/bulletSvgs/B";
import C from "../../assets/svgs/bulletSvgs/C";
import D from "../../assets/svgs/bulletSvgs/D";
import E from "../../assets/svgs/bulletSvgs/E";
import F from "../../assets/svgs/bulletSvgs/F";

export const ProductArrayOrig: ProductType[] = [
  {
    id: 1,
    img: GirlPhoto,
    name: "Mango",
    desc: "Kimono & Caftan - Colorful - Night club fit",
    rating: 5,
    quantity: 121,
    price: 365,
    offerPrice: 487,
    offPercent: 15,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 2,
    img: WomenCard,
    name: "Zara",
    desc: "Midi top- Daily fit",
    rating: 5,
    quantity: 121,
    price: 145,
    offerPrice: 95,
    offPercent: 7,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 3,
    img: girlPhoto,
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 5,
    quantity: 121,
    price: 487,
    offerPrice: 365,
    offPercent: 15,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 4,
    img: GirlPhoto,
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 5,
    quantity: 121,
    price: 487,
    offerPrice: 365,
    offPercent: 15,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 5,
    img: WomenCard,
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 5,
    quantity: 121,
    price: 487,
    offerPrice: 365,
    offPercent: 15,
    anyOffer: true,
    inCart: false,
    inFav: false,
  }
];


// const ComponentCategories=[
//   {
//     title:"Shoe & Bag",
//     navArray:["Casual Shoes", "Boots","Sandals","Slippers"]
//   },
//   {
//     title:"Home Textile",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   },
//   {
//     title:"Party Supplies",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   },
//   {
//     title:"Clothes",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   },
//   {
//     title:"Home Textile",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   },
//   {
//     title:"Luxury & designer",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   },
//   {
//     title:"Sport & Outdoors",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   },
//   {
//     title:"Home Textile",
//     navArray:["Bedding", "Pillows","Handkerchief Towels","Slippers"]
//   }
// ]

export const detailArray: DetailProps[] = [
  {
    title: "Product Description",
    isList: false,
    para: "Short dress with a plunging V-neckline and tie detail. Wide sleeves falling below the elbow. Contrast bead details. Invisible back zip fastening.",
  },
  {
    title: "Composition",
    isList: false,
    para: "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans OUTER SHELL 90% cotton10% linen",
  },
  {
    title: "Product Description",
    isList: true,
    list: [
      "Length | Regular",
      "Pattern | Floral",
      "Fit | Regular fit",
      "Age group | Adult",
      "Age group | Adult",
      "Leg opening | Wide leg",
      "Sleeve length | Long sleeve",
      "Package contents | 2 pcs",
    ],
  },
  {
    title: "Care Instructions",
    isList: true,
    list: [
        {
            content:"Machine wash at max. 30ºC/86ºF with short spin cycle",
            icon:A,
        },
        {
            content:'Iron at a maximum of 110ºC/230ºF',
            icon:B
        },
        {
            content:'Do not dry clean',
            icon:C,
        },
        {
            content:'Do not tumble dry',
            icon:D,
        },
        {
            content:'Wash inside out',
            icon:E,
        }
        ,
        {
            content:'Wash separately',
            icon:F
        }
    ],
  },
];


export  interface CartItem{
    id:number;
    quantity:number;
}


export const cartArray: CartItem[]=[];