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
import { PricingPage } from "../Templates/PricingPage"

export function Router() {
  return (
    <ReactRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route path={routes.pages.about} component={AboutPage} />
          <Route path={routes.pages.services} component={ServicesPage} />
          <Route path={routes.pages.pricing} component={PricingPage} />

          <Route path={routes.pages.faq} component={FaqPage} />
          <Route path={routes.pages.contact} component={ContactPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ReactRouter>
  );
}
