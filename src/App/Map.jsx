import React from "react";
import "./map.css";
import { IoMdPin } from "react-icons/io";
import { Icon } from "@iconify/react";
import GoogleMapReact from "google-map-react";
import { Box } from "@material-ui/core";

export const OldMap = ({ location, zoomLevel }) => (
  <Box height="80vh" width="100vh" paddingTop="20px" paddingBottom="18px">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDuDzTgYQvF19BISfjfbL4Qzah2kb9aRGY" }}
      defaultCenter={{ lat: 39.7912, lng: 74.9291 }}
      defaultZoom={11}
    >
      <LocationPin lat={39.7912} lng={74.9291} text={"Buyer Beware"} />
    </GoogleMapReact>

    {/* <Box letterSpacing={1.2} alignSelf="center"> Monday thru Friday 8:00 am - 7:00 pm Saturday 9:00 am - 5:00 pm
            Sunday Closed</Box> */}
  </Box>
);

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={IoMdPin} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);
