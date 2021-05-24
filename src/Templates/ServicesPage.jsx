import React from "react";
import { ServiceCard } from "../Components/Services/ServiceListCard";
import { NewServiceCard } from "../Components/Services/NewServiceListCard";
import { ContactCard } from "../Components/Services/ContactCard";
import {HeaderBox} from "../Components/Box/MyBox"
import { Title } from "../Components/App/HeaderTitle";
import { ServicesHeader } from "../Components/Services/ServicesHeader";
import { OurPromise } from "../Components/Profile/Promise";
import {ScheduleButton} from "../Components/App/ScheduleButton"

export function ServicesPage() {
  return (
    <>
    
      {/* <Title title="Services" /> */}
      <ServicesHeader />
      <div>
        {/* <NewServiceCard /> */}
        <ServiceCard />
        {/* <ContactCard /> */}
        <ScheduleButton />
        
      </div>
    </>
  );
}
