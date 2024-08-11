import React from "react";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; serach?: string };
}) => {
  return (
    <div>
      <section>
        <CategoriesList
          category={searchParams.category}
          search={searchParams.serach}
        />
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.serach}
        />
      </section>
    </div>
  );
};

export default HomePage;
