import {
  Paper,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import EmmaLogo from "../../img/newEmmaLogo.png";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";

export function ProfileCard() {
  return (
    <Container style={{ margin: 25 }}>
      <Paper
        style={{
          display: "flex",
        }}
      >
        <img
          alt=""
          src={EmmaLogo}
          width="320"
          height="245"
          style={{ paddingLeft: 25 }}
        />
        <div style={{ padding: 25, paddingRight: 30, alignSelf: "center" }}>
          <List style={{ padding: 3 }}>
            <ListItem>
              <ListItemIcon>
                <IoIosPhonePortrait color="#a71976" fontSize="20px" />
              </ListItemIcon>

              <ListItemText>609-670-0451</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AiOutlineMail color="#a71976" fontSize="20px" />
              </ListItemIcon>

              <ListItemText>Contact@BuyerBeware.com</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <IoMdPin color="#a71976" fontSize="20px" />
              </ListItemIcon>

              <ListItemText>Based in Berlin, NJ</ListItemText>
            </ListItem>
          </List>
        </div>
      </Paper>
    </Container>
  );
}
