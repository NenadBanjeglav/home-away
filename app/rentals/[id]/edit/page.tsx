import React from "react";

import {
  fetchRentalDetails,
  updatePropertyAction,
  updatePropertyImageAction,
} from "@/utils/actions";
import { redirect } from "next/navigation";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import CountriesInput from "@/components/form/CountriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CounterInput from "@/components/form/CounterInput";
import SubmitButton from "@/components/form/Buttons";

const EditRentalPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchRentalDetails(params.id);
  if (!property) redirect("/");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">Edit Property</h1>
      <div className="rounded-md border p-8">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>
        <FormContainer action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="mb-4 mt-8 grid gap-8 md:grid-cols-2">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10 - 100 words)"
            defaultValue={property.description}
          />
          <h3 className="mb-4 mt-8 text-lg font-medium">
            Accommodation Details
          </h3>
          <CounterInput detail="guests" defaultValue={property.guests} />
          <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
          <CounterInput detail="beds" defaultValue={property.beds} />
          <CounterInput detail="baths" defaultValue={property.baths} />
          <SubmitButton text="edit property" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditRentalPage;
