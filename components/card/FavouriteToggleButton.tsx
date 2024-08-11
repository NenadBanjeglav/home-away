import React from "react";

import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavouriteToggleButton = ({ propertyId }: { propertyId: string }) => {
  return (
    <Button size="icon" variant="outline" className="cursor-pointer p-2">
      <FaHeart />
    </Button>
  );
};

export default FavouriteToggleButton;
