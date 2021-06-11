import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export const ProfileListItem = ({ Icon, text }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Icon color="#a71976" />
      </ListItemIcon>

      <ListItemText primary={text} />
    </ListItem>
  );
};
