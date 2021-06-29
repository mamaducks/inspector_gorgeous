import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export const ProfileListItem = ({ Icon, text }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Icon color="#a71976" fontSize="20px" />
      </ListItemIcon>

      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};
