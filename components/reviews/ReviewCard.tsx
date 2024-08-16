/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";

interface ReviewCardProps {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
}

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <img
            src={reviewInfo.image}
            alt="profile"
            className=" size-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="mb-1 text-sm font-bold capitalize">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute right-3 top-3">{children}</div>
    </Card>
  );
};

export default ReviewCard;
