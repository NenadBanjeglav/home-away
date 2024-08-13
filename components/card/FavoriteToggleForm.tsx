"use client";

import { usePathname } from "next/navigation";
import React from "react";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";
import { toggleFavoriteAction } from "@/utils/actions";

interface FavoriteToggleFormProps {
  propertyId: string;
  favoriteId: string | null;
}

const FavoriteToggleForm = ({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();

  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
