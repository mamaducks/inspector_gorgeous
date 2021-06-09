import React from "react";
import {
  BrowserRouter,
  Route,
  Router as ReactRouter,
  Switch,
} from "react-router-dom";
import routes from "./Routes";
import { HomePage } from "../Templates/HomePage";
import { ServicesPage } from "../Templates/ServicesPage";
import { FaqPage } from "../Templates/FaqPage";
import { ContactPage } from "../Templates/ContactPage";
import { history } from "../_helpers/helpers";
import { AboutPage } from "../Templates/AboutPage";
import { PricingPage } from "../Templates/PricingPage";

export function Router() {
  return (
    <ReactRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route path={routes.about.link} component={AboutPage} />
          <Route path={routes.services.link} component={ServicesPage} />
          {/* <Route path={routes.pricing.link} component={PricingPage} /> */}

          <Route path={routes.faq.link} component={FaqPage} />
          <Route path={routes.contact.link} component={ContactPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ReactRouter>
  );
}
