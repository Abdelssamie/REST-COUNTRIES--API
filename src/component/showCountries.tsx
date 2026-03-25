import { Country } from "../types/country";
import Filter from "./filter";
import CountryBox from "./countryBox";
import { Dispatch, SetStateAction } from "react";
type infoProps = {
  countries: Country[];
  setCountryInfo: Dispatch<SetStateAction<Country>>;
  setShowInfoCountry: Dispatch<SetStateAction<boolean>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

function ShowCountries({
  countries,
  setCountryInfo,
  setShowInfoCountry,
  filter,
  setFilter,
  search,
  setSearch,
}: infoProps) {
  return (
    <>
      <Filter setFilter={setFilter} setSearch={setSearch} />
      <div className="showCountries">
        {countries
          .filter((countryInfo) =>
            countryInfo.name.common
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          )
          .filter(
            (countryInfo) =>
              filter === countryInfo.region ||
              filter === "All"
          )
          .map((countryInfo, index) => {
            return (
              <CountryBox
                setCountryInfo={setCountryInfo}
                countryInfo={countryInfo}
                setShowInfoCountry={setShowInfoCountry}
                key={countryInfo.name.common}
              />
            );
          })}
      </div>
    </>
  );
}

export default ShowCountries;
