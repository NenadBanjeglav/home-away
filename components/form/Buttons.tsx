"use client";

import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

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
