import { Icon } from "@material-ui/core";
import { FiMail, FiInstagram, FiFacebook } from "react-icons/fi";

export const MailTo = ({ label, icon, color, children, ...props }) => {
  const Mailto = ({ email, subject = "", body = "", label = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a href={`mailto:${email}${params}`} {...props}>
        {/* {children} */}
        <FiMail color={color} />
        {/* <Icon style={{display:"flex"}}>{icon}</Icon> */}
      </a>
    );
  };

  return (
    <Mailto
      email="scrubblies@gmail.com"
      subject="I'm interested in a quote!"
      body="Enter the details of your message and contact information."
    >
      {children}
     
    </Mailto>
  );
};

