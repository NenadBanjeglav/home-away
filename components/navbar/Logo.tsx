import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuTent } from "react-icons/lu";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuTent className="size-6" />
      </Link>
    </Button>
  );
};

export default Logo;
