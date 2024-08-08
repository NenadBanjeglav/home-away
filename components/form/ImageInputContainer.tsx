"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { type actionFunction } from "@/utils/types";
import { LuUser2 } from "react-icons/lu";
import SubmitButton from "./Buttons";

interface ImageInputContainerProps {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
}

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser2 className="mb-4 size-24 rounded bg-primary text-white" />
  );

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mb-4 size-24 rounded object-cover"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className="mt-4 max-w-lg">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
