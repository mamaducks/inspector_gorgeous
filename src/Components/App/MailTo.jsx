export const MailTo = () => {
  
    const Mailto = ({ email, subject = "", body = "", label = "", children }) => {
      let params = subject || body ? "?" : "";
      if (subject) params += `subject=${encodeURIComponent(subject)}`;
      if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
  
      return (
        <a
          href={`mailto:${email}${params}`}
          style={{ color: "#68a5b9", fontSize: 14, fontWeight: "bolder" }}
        >
          {children}
        </a>
      );
    };
    return (
  
          <Mailto
            email="scrubblies@gmail.com"
            subject="I'm interested in a quote!"
            body="Enter the details of your message and contact information."
          >
            boxingmom@gmail.com
          </Mailto>
     
    );
  };
  