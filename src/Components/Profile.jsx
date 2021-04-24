import React from "react";
import { ListItem, ListItemText, ListItemIcon, List } from "@material-ui/core";
import { IoMdPin, IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const ProfileListItem = ({ Icon, text }) => {
  return (
    <>
      <ListItem>
        <ListItemIcon fontSize={24}>
          <Icon color="primary" />
        </ListItemIcon>

        <ListItemText primary={text} />
      </ListItem>
    </>
  );
};

export function ProfileList() {
  return (
    <List>
      <ListItemText
        primary="AA Inspections"
        style={{ display: "flex", justifyContent: "center" }}
      />
      <List style={{ padding: 35 }}>
        <ProfileListItem Icon={IoIosPhonePortrait} text={"6093330400"} />
        <ProfileListItem Icon={AiOutlineMail} text={"boxingmom"} />
        <ProfileListItem Icon={IoMdPin} text={"somewhere south jersey"} />
        <ProfileListItem Icon={IoIosPhonePortrait} text={"more"} />
      </List>
    </List>
  );
}
