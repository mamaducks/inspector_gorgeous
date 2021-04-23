import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
} from "@material-ui/core";
import { IoMdPin, IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const useStyles = makeStyles({
  
  root: {

  }
   
    
  });
  
const ProfileListItem = ({ Icon, text }) => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Icon color="primary" />
        </ListItemIcon>

        <ListItemText primary={text} />
      </ListItem>
    </>
  );
};

export function ProfileList() {
    const classes = useStyles();

  return (
    <>
    
      <List>
      <ListItemText primary="AA Inspections" />
        <ProfileListItem Icon={IoIosPhonePortrait} text={"6093330400"} />
        <ProfileListItem Icon={AiOutlineMail} text={"boxingmom"} />
        <ProfileListItem Icon={IoMdPin} text={"somewhere south jersey"} />
        <ProfileListItem Icon={IoIosPhonePortrait} text={"more"} />
      </List>
    </>
  );
}
