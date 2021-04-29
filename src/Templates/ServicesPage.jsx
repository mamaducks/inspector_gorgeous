import React from "react";
import { ServiceCard } from "../Components/Services/ServiceListCard";
import { Title } from "../Components/App/HeaderTitle";
import { ServicesHeader } from "../Components/Services/ServicesHeader";

export function ServicesPage() {
  return (
    <>
      <Title title="Services" />
      <ServicesHeader />
      <div>
        <ServiceCard />
      </div>
    </>
  );
}
