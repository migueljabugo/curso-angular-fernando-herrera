import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {

  static fromRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      name: restCountry.translations['spa'].common ?? restCountry.name.common,
      capital: restCountry.capital?.join(', '),
      population: restCountry.population,
      Flag: restCountry.flag,
      FlagSvg: restCountry.flags.svg,
      region: restCountry.region,
      subregion: restCountry.subregion,
    };
  }

  static fromRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(restCountry => CountryMapper.fromRestCountryToCountry(restCountry));
  }
}
