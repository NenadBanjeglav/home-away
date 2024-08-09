"use client";
import React, { useState } from "react";
import { Amenity, conservativeAmenities } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    defaultValue || conservativeAmenities
  );

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div key={amenity.name} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className="flex items-center gap-x-2 text-sm font-medium capitalize leading-none"
              >
                {amenity.name} <amenity.icon className="size-4" />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AmenitiesInput;
