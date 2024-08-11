import React from "react";

import { categories } from "@/utils/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

const CategoriesList = ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <section>
      <ScrollArea className="py-6">
        <div className="flex gap-x-4">
          {categories.map((item) => {
            const isActive = item.label === category;
            return (
              <Link
                key={item.label}
                href={`/?category=${item.label}${searchTerm}`}
              >
                <article
                  className={`flex w-[100px] cursor-pointer flex-col items-center p-3 duration-300 hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  <item.icon className="size-8" />
                  <p className="mt-1 text-sm capitalize">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CategoriesList;
