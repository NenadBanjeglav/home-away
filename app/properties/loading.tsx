"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return <Skeleton className="h-[300px] w-full rounded md:h-[500px]" />;
};

export default loading;
