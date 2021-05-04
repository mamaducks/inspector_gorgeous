import React from "react";
import { Title } from "../Components/App/HeaderTitle";
import { ContactBody } from "../Components/Contact/ContactBody";

export function ContactPage() {
  return (
    <>
      <Title title="Please feel free to contact us" />
      <ContactBody />
    </>
  );
}
