import { findCountryByCode } from "@/utils/countries";
import React from "react";

const CountryName = ({ countryCode }: { countryCode: string }) => {
  const validCountry = findCountryByCode(countryCode)!;

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name;

  return (
    <span className="flex items-center justify-between gap-2 text-sm">
      {countryName}
    </span>
  );
};

export default CountryName;
