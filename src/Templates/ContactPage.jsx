import React from "react";
import { Title } from "../Components/App/HeaderTitle";
import { ContactBody } from "../Components/Contact/ContactBody";
import { ContactHeader } from "../Components/Contact/ContactHeader";

export function ContactPage() {
  return (
    <>
      <Title />
      <ContactHeader />
      <ContactBody />
    </>
  );
}
