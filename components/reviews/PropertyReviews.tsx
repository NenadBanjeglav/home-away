import React from "react";

import { fetchPropertyReviews } from "@/utils/actions";
import Title from "@/components/properties/Title";

import ReviewCard from "./ReviewCard";

const PropertyReviews = async ({ propertyId }: { propertyId: string }) => {
  const reviews = await fetchPropertyReviews(propertyId);
  if (reviews.length < 1) return null;

  return (
    <div className="mt-8">
      <Title text="Reviews" />
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        {reviews.map((review: any) => {
          const { comment, rating } = review;
          const { firstName, profileImage } = review.profile;
          const reviewInfo = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          };

          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
};

export default PropertyReviews;
