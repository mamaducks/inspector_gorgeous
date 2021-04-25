import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Card,
} from "@material-ui/core";
import { IoMdPin, IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const ProfileListItem = ({ Icon, text }) => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>

        <ListItemText primary={text} />
      </ListItem>
    </>
  );
};

export function ProfileList() {
  return (
    <Card style={{ padding: 55 }}>
      <ListItemText
        primary="IG Inspections"
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 18,
          color: "#18566b",
        }}
      />
      <List style={{ padding: 25 }}>
        <ProfileListItem
          Icon={IoIosPhonePortrait}
          text={"6093330400"}
          style={{ alignSelf: "center" }}
        />
        <ProfileListItem
          Icon={AiOutlineMail}
          text={"boxingmom"}
          style={{ alignSelf: "flex-start" }}
        />
        <ProfileListItem
          Icon={IoMdPin}
          text={"somewhere south jersey"}
          style={{ alignSelf: "flex-end" }}
        />
        <ProfileListItem Icon={IoIosPhonePortrait} text={"more"} />
      </List>
    </Card>
  );
}
