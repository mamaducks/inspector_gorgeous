import { List } from "@material-ui/core";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";
import { ProfileListItem } from "./ProfileListItem";

export function ProfileList() {
  return (
    <div style={{ padding: 25, paddingRight: 30, alignSelf: "center" }}>
      <List style={{ padding: 3 }}>
        <ProfileListItem
          Icon={IoIosPhonePortrait}
          text={"609-670-0451"}
          style={{ alignSelf: "center" }}
        />
        <ProfileListItem
          Icon={AiOutlineMail}
          text={"Contact@BuyerBeware.com"}
          style={{ alignSelf: "flex-start" }}
        />
        <ProfileListItem
          Icon={IoMdPin}
          text={"Based in Berlin, NJ"}
          style={{ alignSelf: "flex-end" }}
        />
      </List>
    </div>
  );
}