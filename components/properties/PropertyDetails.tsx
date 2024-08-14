/* eslint-disable tailwindcss/no-custom-classname */
import { formatQuantity } from "@/utils/format";

import React from "react";

interface PropertyDetailsProps {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
}

const PropertyDetails = ({
  details: { bedrooms, baths, guests, beds },
}: PropertyDetailsProps) => {
  return (
    <p className="text-md font-light">
      <span>{formatQuantity(bedrooms, "bedroom")} &middot; </span>
      <span>{formatQuantity(baths, "bath")} &middot; </span>
      <span>{formatQuantity(guests, "guest")} &middot; </span>
      <span>{formatQuantity(beds, "bed")} </span>
    </p>
  );
};

export default PropertyDetails;
