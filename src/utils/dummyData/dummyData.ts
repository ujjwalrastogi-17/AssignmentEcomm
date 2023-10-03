import { ProductType } from "../type/type";
import {
  girlPhoto,
  WomenCard,
  GirlPhoto,
  // greenDress,
  greenDress1,
  greenDress2,
  // greenDress3,
  blackDress2,
  blackDress3,
  blackDress4,
  // blueDress,
  blueDress1,
  blueDress2,
  blueDress3,
  blueDressMain,
  sweater1,sweater2
  // blueDress4
} from "../../assets/images";
import { DetailProps } from "../../pages/Product/Women/Components/DetailCard";
import A from "../../assets/svgs/bulletSvgs/A";
import B from "../../assets/svgs/bulletSvgs/B";
import C from "../../assets/svgs/bulletSvgs/C";
import D from "../../assets/svgs/bulletSvgs/D";
import E from "../../assets/svgs/bulletSvgs/E";
import F from "../../assets/svgs/bulletSvgs/F";
import {
  Bitcoin,
  MasterCard,
  Paypal,
  Ausff,
  Race,
  Transco,
} from "../../assets/images";

export const ProductArrayOrig: ProductType[] = [
  {
    id: 1,
    img: GirlPhoto,
    imgArray: [GirlPhoto,greenDress1,greenDress2],
    // othrImgs:[],
    name: "Mango",
    desc: "Kimono & Caftan - Colorful - Night club fit",
    rating: 3,
    quantity: 121,
    price: 465,
    offerPrice: 287,
    offPercent: 15,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 2,
    img: WomenCard,
    imgArray: [WomenCard,sweater1,sweater2],
    name: "Zara",
    desc: "Midi top- Daily fit",
    rating: 4,
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
    imgArray: [girlPhoto, blackDress2, blackDress3,blackDress4],
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 3,
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
    imgArray: [GirlPhoto],
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 2,
    quantity: 121,
    price: 157,
    offerPrice: 125,
    offPercent: 8,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 5,
    img: WomenCard,
    imgArray: [WomenCard,sweater1,sweater2],
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 5,
    quantity: 121,
    price: 87,
    offerPrice: 65,
    offPercent: 15,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
  {
    id: 6,
    img: blueDressMain,
    imgArray: [blueDressMain,blueDress1,blueDress2,blueDress3],
    name: "Uniqlo",
    desc: "Midi atlas Slim fit - bohemian",
    rating: 2,
    quantity: 121,
    price: 157,
    offerPrice: 125,
    offPercent: 8,
    anyOffer: true,
    inCart: false,
    inFav: false,
  },
];

export interface CategoryProps {
  title: string;
  navArray: string[];
}

export const Categories: CategoryProps[] = [
  {
    title: "Shoe & Bag",
    navArray: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    title: "Home Textile",
    navArray: ["Bedding", "Pillows", "Handkerchief Towels", "Slippers"],
  },
  {
    title: "Party Supplies",
    navArray: ["Bedding", "Pillows", "Handkerchief Towels", "Slippers"],
  },
  {
    title: "Luxury & designer",
    navArray: ["Bedding", "Pillows", "Handkerchief Towels", "Slippers"],
  },
  {
    title: "Sport & Outdoors",
    navArray: ["Bedding", "Pillows", "Handkerchief Towels", "Slippers"],
  },
  {
    title: "Sport & Outdoors",
    navArray: ["Bedding", "Pillows", "Handkerchief Towels", "Slippers"],
  },
  {
    title: "Clothes",
    navArray: [
      "Bedding",
      "Pillows",
      "Handkerchief Towels",
      "Slippers",
      "Bedding",
      "Pillows",
      "Handkerchief Towels",
      "Slippers",
      "Bedding",
      "Pillows",
    ],
  },
];

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
        content: "Machine wash at max. 30ºC/86ºF with short spin cycle",
        icon: A,
      },
      {
        content: "Iron at a maximum of 110ºC/230ºF",
        icon: B,
      },
      {
        content: "Do not dry clean",
        icon: C,
      },
      {
        content: "Do not tumble dry",
        icon: D,
      },
      {
        content: "Wash inside out",
        icon: E,
      },
      {
        content: "Wash separately",
        icon: F,
      },
    ],
  },
];

export interface CartItem {
  id: number;
  quantity: number;
}

export const cartArray: CartItem[] = [];

export interface PayCardProps {
  id_p?: number;
  id_s?: number;
  img: string;
  title: string;
  desc?: string;
  isList: boolean;
  list?: {
    delType: string;
    shipCost: string;
    insurance: boolean;
  };
}

export const PaymentCards: PayCardProps[] = [
  {
    id_p: 1,
    img: Paypal,
    title: "Paypal",
    isList: false,
    desc: "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically",
  },
  {
    id_p: 2,
    img: MasterCard,
    title: "Mastercard",
    isList: false,
    desc: "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically",
  },
  {
    id_p: 3,
    img: Bitcoin,
    title: "Bitcoin",
    isList: false,
    desc: "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically",
  },
];

export const ShippmentCards: PayCardProps[] = [
  {
    id_s: 1,
    img: Ausff,
    title: "AUSFF",
    isList: true,
    list: {
      delType: "14-21 days",
      shipCost: "$10",
      insurance: false,
    },
  },
  {
    id_s: 2,
    img: Race,
    title: "RaceCouriers",
    isList: true,
    list: {
      delType: "12-20 days",
      shipCost: "$13",
      insurance: true,
    },
  },
  {
    id_s: 3,
    img: Transco,
    title: "TranscoCargo",
    isList: true,
    list: {
      delType: "10-12 days",
      shipCost: "$12",
      insurance: true,
    },
  },
];
