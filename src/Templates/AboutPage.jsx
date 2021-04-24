import { AboutHeader } from "../Components/About/AboutHeader";
import { AboutBody } from "../Components/About/AboutBody";
import { Title } from "../Components/App/HeaderTitle";

export function AboutPage() {
  return (
    <>
      <Title title="About Us" />
      <AboutHeader />
      <AboutBody />
    </>
  );
}
