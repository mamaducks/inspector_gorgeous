import React from "react";
import { Title } from "../Components/App/HeaderTitle";
import { ContactCard } from "../Components/Contact/ContactCard";
import { ContactGrid } from "../Components/Contact/ContactInfoGrid";

export function ContactPage() {
  return (
    <>
    
      <Title title="contact us" />
      <ContactGrid />
      
    </>
  );
}
