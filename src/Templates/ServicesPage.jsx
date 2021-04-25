import React from "react";
import { ServicesBody } from "../Components/Services/ServiceBody";
import { Title } from "../Components/App/HeaderTitle";
import { ServicesHeader } from "../Components/Services/ServicesHeader";

export function ServicesPage() {
  return (
    <>
      <Title title="Services" />
      <ServicesHeader />
      <div>
        <ServicesBody />
      </div>
    </>
  );
}
