import { OurPromise } from "../Components/About/Promise";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import {
  prices,
  priceCard,
  bundlePrice,
} from "../Components/Services/ServiceList";
import { Title } from "../Components/App/HeaderTitle";

const useStyles = makeStyles({
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
    width: "25%",
  },
  listImg: {
    width: 55,
    height: 55,
    paddingBottom: 15,
  },
});

export const PriceCard = () => {
  return (
    <Card>
      <CardContent>
        <PriceListing prices />
      </CardContent>
    </Card>
  );
};

export function PriceListing() {
  const classes = useStyles();

  return (
    <div>
      {prices.map(({ service, price }) => {
        return (
          <div key={service} className={classes.listItem}>
            <h3>{service}</h3>
            <h4 style={{ fontWeight: "lighter" }}>{price}</h4>
          </div>
        );
      })}
    </div>
  );
}

export const SummaryPriceCard = () => {
  return (
    <Card>
      <CardContent>
        <SummaryPriceListing priceCard />
      </CardContent>
    </Card>
  );
};

export function SummaryPriceListing() {
  const classes = useStyles();

  return (
    <div>
      {priceCard.map(({ summary, price }) => {
        return (
          <div key={summary} className={classes.listItem}>
            <h3>{summary}</h3>
            <h4 style={{ fontWeight: "lighter" }}>{price}</h4>
          </div>
        );
      })}
    </div>
  );
}

export const BundlePriceCard = () => {
  return (
    <Card>
      <CardContent>
        <BundlePriceListing bundlePrice />
      </CardContent>
    </Card>
  );
};

export function BundlePriceListing() {
  const classes = useStyles();

  return (
    <div>
      {bundlePrice.map(({ summary, price }) => {
        return (
          <div key={summary} className={classes.listItem}>
            <h3>{summary}</h3>
            <h4 style={{ fontWeight: "lighter" }}>{price}</h4>
          </div>
        );
      })}
    </div>
  );
}

export const PricingPage = () => {
  return (
    <>
          <Title title="Pricing" />

      <div>
        Buyer Beware Home Inspection: A multi-point home inspection includes
        major components and systems at the exterior, roof, and interior.
        Electrical, plumbing, heating and cooling, insulations and ventilations,
        structure, and installed appliances are inspected.
      </div>

      <PriceCard />
      <SummaryPriceCard />
      <BundlePriceCard />
      <OurPromise />
    </>
  );
};
