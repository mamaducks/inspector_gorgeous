import { Box, Divider } from "@material-ui/core";
import { BsHeart } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ContactBox } from "./ContactBox";
import { Social } from "../../Components/Social/SocialMedia";
import { NewContainer } from "../../Components/Box/AppBoxes";

export const ContactSocial = () => {
  return (
    <NewContainer>
      <Box alignSelf="center" style={{ paddingBlock: "5px" }}>
        <ContactBox flexWrap="wrap" fontSize="1.25vw">
          Have any questions? We'd
          <BsHeart fontSize="2vw" color="#c54097" style={{ padding: "8px" }} />
          to hear from you!
        </ContactBox>
        <Divider />

        <Social
          color="#c54097"
          fontSize="2vw"
          style={{ paddingBottom: "12px" }}
        />
      </Box>
    </NewContainer>
  );
};
