import React from "react";

import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import SubmitButton from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";

const CreatePropertyPage = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">
        create property
      </h1>
      <div className="rounded border p-8 ">
        <h3 className="mb-4 text-lg font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="mb-4 grid gap-8 md:grid-cols-2">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Serbia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000 words)"
          />
          <div className="mt-4 grid gap-8 sm:grid-cols-2">
            <CountriesInput />
            <ImageInput />
          </div>
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreatePropertyPage;
