import React from "react";
import { ServiceCard } from "../Components/Services/ServiceListCard";
import { NewServiceCard } from "../Components/Services/NewServiceListCard";
import { ContactCard } from "../Components/Contact/ContactCard";

import { Title } from "../Components/App/HeaderTitle";
import { ServicesHeader } from "../Components/Services/ServicesHeader";
import { OurPromise } from "../Components/About/Promise";

export function ServicesPage() {
  return (
    <>
      <Title title="Services" />
      <ServicesHeader />
      <div>
        <NewServiceCard />
        <ServiceCard />
        <ContactCard />
        <OurPromise />
      </div>
    </>
  );
}
