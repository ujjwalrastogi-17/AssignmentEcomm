// import React from "react";
import Card from "./Card";

export default function CardList() {
  return (
    <div className="flex md:justify-center items-center gap-[20px] md:justify-between lg:overflow-hidden overflow-x-scroll">
      <Card
        title="Tonny Black"
        desc="Shoulder bag-White-Plain"
        rating={4}
        offerPrice="$69.99"
        price="$129.99"
      />

      <Card
        title="Tonny Black"
        desc="Shoulder bag-White-Plain"
        rating={4}
        offerPrice="$69.99"
        price="$129.99"
      />

      <Card
        title="Tonny Black"
        desc="Shoulder bag-White-Plain"
        rating={4}
        offerPrice="$69.99"
        price="$129.99"
      />

      <Card
        title="Tonny Black"
        desc="Shoulder bag-White-Plain"
        rating={4}
        offerPrice="$69.99"
        price="$129.99"
      />
    </div>
  );
}
