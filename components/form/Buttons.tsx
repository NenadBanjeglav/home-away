"use client";

import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import React from "react";

type btnSize = "default" | "lg" | "sm";

interface SubmitButtonProps {
  className?: string;
  text?: string;
  size?: btnSize;
}

const SubmitButton = ({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 size-4 animate-spin" />
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="cursor-pointer p-2"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="cursor-pointer p-2"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};
