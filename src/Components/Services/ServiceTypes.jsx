import { LayoutBox } from "../Box/MyBox";
import CheckBox from "../../img/checkedbox.png";
import { INSPECT_TYPE } from "../Services/Services";
import { Service } from "../Services/ServiceListCard";
import {services} from "../Services/ServiceList";
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Icon} from "@material-ui/core"
export const Services = ({image, ...props}) => {
  return (
    <LayoutBox
      heading="We offer the following specialized inspection services:"
      image={image}
      width="260"
      height="250"
      {...props}
    >
      {INSPECT_TYPE.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </LayoutBox>
  );
};


