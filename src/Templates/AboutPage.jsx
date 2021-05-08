import { AboutHeader } from "../Components/About/AboutHeader";
import { AboutBody } from "../Components/About/AreaServe";
import { OurPromise } from "../Components/About/Promise";
import { Title } from "../Components/App/HeaderTitle";

export function AboutPage() {
  return (
    <>
      <Title title="About Us" />
      <AboutHeader />
      <AboutBody />
      <OurPromise />
    </>
  );
}
