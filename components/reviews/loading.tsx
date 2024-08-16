"use client";

import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const loading = () => {
  return (
    <section className="mt-4 grid gap-8 md:grid-cols-2">
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </section>
  );
};

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="size-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="mb-2 h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default loading;
