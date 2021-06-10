import { LayoutBox } from "../Box/MyBox";
import { INSPECT_TYPE } from "../Services/Services";
export const Services = ({ image, ...props }) => {
  return (
    <LayoutBox
      heading="We offer the following specialized inspection services:"
      image={image}
      width="515"
      height="309"
      {...props}
    >
      {INSPECT_TYPE.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </LayoutBox>
  );
};
