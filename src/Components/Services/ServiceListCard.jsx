import {
  Link,
  Box,
  makeStyles,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import { services } from "./ServiceList";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 33,
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  listImg: {
    width: 55,
    height: 55,
    paddingBottom: 15,
  },
  listText: {},
});
export const ServiceCard = () => {
  return (
    <Card>
      <CardActionArea>
        <ServiceListing services />
      </CardActionArea>
    </Card>
  );
};

export function ServiceListing() {
  const classes = useStyles();

  var n = 4;

  // Slice function call
  var items = services.slice(0, n).map(({ text, image }) => {
    return (
      <div key={text} className={classes.listItem}>
        <img alt="" src={image} className={classes.listImg} />
        <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
      </div>
    );
  });
  var itemsBottom = services.slice(4).map(({ text, image }) => {
    return (
      <div key={text} className={classes.listItem}>
        <img alt="" src={image} className={classes.listImg} />
        <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
      </div>
    );
  });
  return (
    <div style={{ padding: 45 }}>
      <div className={classes.list}>{items}</div>
      <div className={classes.list}>{itemsBottom}</div>
    </div>
  );
}

// const ServiceListOld = () => {
//   return (
//     <>
//       <Service head=" Electrical Panels & Breakers" body="" />
//       <Service head=" Drainage Sump Pumps" />
//       <Service head=" Inspectors Code of Ethics" body="" />

//       <Service head=" GFCIs" body="" />
//       <Service head=" Meter Boxes" body="" />
//       <Service head=" Water intrusion" body="" />

//       <Service head=" Fireplace Damper Door" body="" />
//       <Service head=" Basement, Foundation" body="" />
//       <Service head=" Heating Inspection" body="" />

//       <Service head=" Insulation and Ventilation " body="" />
//       <Service
//         head=" Crawlspace
//           Examination"
//         body=""
//       />
//       <Service head=" Commercial Inspection" body="" />

//       <Service head="  Garage Doors & openers" body="" />
//       <Service
//         head=" Grading
//           and Drainage"
//       />
//       <Service head=" Roofing Inspection" body="" />

//       <Service head=" Roof, Flashings, and Trim" body="" />
//       <Service head=" Basement, Foundation" body="" />
//       <Service
//         head="HVAC
//           Inspection"
//         body=""
//       />

//       <Service head="  Radon Measurement" body="" />
//       <Service head=" Gutters and Downspouts" body="" />
//       <Service
//         head="Exterior
//           Inspection"
//         body=""
//       />
//     </>
//   );
// };

// export function ServicesBody() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Box component="span" fontSize={24} textAlign="center">
//         <div> FULL SERVICE INSPECTIONS include:</div>

// <ServiceListing  />
//         <Typography>
//           WE ALSO INCLUDE THE FOLLOWING SERVICES WITH EVERY HOME INSPECTION:
//         </Typography>
//       </Box>
//       <Container>
//         <div>
//           <Link href="/sellerLogin">Service A</Link>
//           <div>Home Inspection</div>
//           <Typography>
//             We are DMV’s most reviewed inspection company! We understand how
//             important family is and we always inspect properties with this in
//             mind!
//           </Typography>
//         </div>
//       </Container>
//     </div>
//   );
// }

// const ServiceAlsos = () => {
//   return (
//     <>
//       <Link href="/buyerLogin">Service B</Link>
//       <div>Home Inspection</div>
//       <Typography>
//         Before you set out to buy or lease a commercial space rely on ProTec to
//         perform a property condition assessment.
//       </Typography>

//       <div>New Construction</div>
//       <Typography>
//         Our experienced new construction specialists understand how the building
//         should be built and know where to look!
//       </Typography>
//       <div>Radon Testing</div>
//       <Typography>
//         Most of our customers include Radon testing! Be safe, our area is known
//         to have high radon levels.
//       </Typography>
//       <div>Mold Testing</div>
//       <Typography>
//         Exposure to mold can be both dangerous and costly. We provide you with
//         results quickly.
//       </Typography>
//       <div>Sewer Scope</div>
//       <Typography>
//         Sewer cameras will help ensure the main sewer line is free of problems
//         that can cause headaches after you move in. Avoid expensive repairs!
//       </Typography>
//       <div>Termite Inspection</div>
//       <Typography>
//         90% of lenders require a termite inspection we can take care of that
//         too!
//       </Typography>
//       <div>Walk & Talk</div>
//       <Typography>
//         Competition for contracts can be fierce. Get a walk & talk when an
//         inspection is not feasible.
//       </Typography>
//       <div>Re-Inspection</div>
//       <Typography>
//         Send us your list of repairs and we will verify they have been
//         completed.
//       </Typography>
//       <div>Pool Inspection</div>
//       <Typography>
//         We will not only assess the condition of the pool but will also give you
//         the information necessary to take care of your pool.
//       </Typography>
//       <div>Generator Testing</div>
//       <Typography>
//         Does your new home have a whole house generator? We can inspect that
//         too!
//       </Typography>
//       <div>Infrared Scan</div>
//       <Typography>
//         FREE with full home inspections. Infrared scans offer a way to observe
//         things that cannot be detected with the naked eye.
//       </Typography>
//       <div>EIFS Inspection</div>
//       <Typography>
//         On our team, we have inspectors that are specifically certified to
//         conduct Exterior insulation and finish system (EIFS) inspections!
//       </Typography>
//       <div>EMF Inspection</div>
//       <Typography>Electro Magnetic Frequency? We can test for it.</Typography>
//       <div>Lawn Irrigation</div>
//       <Typography>
//         Our inspectors can check your lawn irrigation system!
//       </Typography>
//     </>
//   );
// };
