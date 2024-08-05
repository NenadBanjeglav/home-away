/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <Input
      type="search"
      placeholder="find a property..."
      className="dark:bg-muted max-w-xs"
    />
  );
};

export default NavSearch;
