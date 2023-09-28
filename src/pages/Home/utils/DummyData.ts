export interface TrendingCardProps {
  heading: string;
  desc: string;
  color: string;
  img: string;
}

import { TrendCard } from "../../../assets/images";

export const TrendCards1: TrendingCardProps[] = [
  {
    heading: "Never-Ending Summer",
    desc: "Throwback Shirts & all-day dressed",
    color: "bg-red-500",
    img: TrendCard,
  },
  {
    heading: "Never-Ending Summer",
    desc: "Throwback Shirts & all-day dressed",
    color: "bg-teal-500",
    img: TrendCard,
  },
];

export const TrendCards2: TrendingCardProps[] = [
  {
    heading: "Never-Ending Summer",
    desc: "Throwback Shirts & all-day dressed",
    color: "bg-pink-500",
    img: TrendCard,
  },
  {
    heading: "Never-Ending Summer",
    desc: "Throwback Shirts & all-day dressed",
    color: "bg-blue-500",
    img: TrendCard,
  },
];
