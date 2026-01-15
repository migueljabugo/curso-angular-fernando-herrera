import { Routes } from "@angular/router";
import { CountryLayout } from './layout/country-layout/country-layout';
import { ByCapital } from "./pages/by-capital-page/by-capital-page";

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapital
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
]


export default countryRoutes;
