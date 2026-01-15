import { Routes } from "@angular/router";
import { HomePage } from "../shared/pages/home-page/home-page";
import { ByCapital } from "../shared/pages/by-capital-page/by-capital-page";

export const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapital
  }
]


export default countryRoutes;
