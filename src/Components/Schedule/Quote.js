export const Quote = ({...props}) => {
  return (
    <iframe
      src="https://widgets.spectora.com/#/my-inspection-company-2f689b3a14/quote"
      style={{ border: "0", height: "1100px", width: "100%" }}
      {...props}
      title="quote"
    ></iframe>
  );
};
