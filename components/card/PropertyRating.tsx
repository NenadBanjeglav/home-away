import { fetchPropertyRating } from "@/utils/actions";
import React from "react";
import { FaStar } from "react-icons/fa";

const PropertyRating = async ({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) => {
  const { rating, count } = await fetchPropertyRating(propertyId);
  if (count === 0) return null;

  const className = `flex gap-1 item-center ${inPage ? "text-md" : "text-xs"}`;

  const countText = count > 1 ? "reviews" : "review";

  const countValue = `(${count}) ${inPage ? countText : ""}`;

  return (
    <span className={className}>
      <FaStar className={`size-3 ${inPage ? "mt-1" : "mt-px"}`} />
      {rating} {countValue}
    </span>
  );
};

export default PropertyRating;
