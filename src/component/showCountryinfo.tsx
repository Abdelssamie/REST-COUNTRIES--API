import { Country } from "@/types/country";
import { count } from "console";
import { Dispatch, SetStateAction } from "react";

type countryInfoParam = {
  countryInfo: Country;
  setShowInfoCountry: Dispatch<SetStateAction<boolean>>;   
}


function ShowCountryInfo({countryInfo, setShowInfoCountry}: countryInfoParam) {
  const handelClickBack = () => {
    setShowInfoCountry(false)
  }
  return (
    <div className="showCountryInfo">
      <button className="back" onClick={handelClickBack}>← Back</button>
      <div className="countryInfo">
        <img src={countryInfo.flags?.svg} alt="img" />
        <div className="info">
          <h1>{countryInfo.name?.common}</h1>
          <div>
            <div>
              <div>
                <h5>Native name: </h5>
                <span>{Object.values(countryInfo.name?.nativeName)[0].common}</span>
              </div>
              <div>
                <h5>Population: </h5>
                <span>{countryInfo.population?.toLocaleString()}</span>
              </div>
              <div>
                <h5>Region: </h5>
                <span>{countryInfo.region}</span>
              </div>
              <div>
                <h5>Sub Region: </h5>
                <span>{countryInfo.subregion}</span>
              </div>
              <div>
                <h5>Capital: </h5>
                <span>{countryInfo.capital}</span>
              </div>
            </div>

            <div>
              <div>
                <h5>Tab Level Domain: </h5>
                <span>{countryInfo.tld?.map((tld)=>`${tld} `)}</span>
              </div>
              <div>
                <h5>Currencies: </h5>
                <span>{Object.values(countryInfo.currencies).map((currency)=>`${currency.name}, `)}</span>
              </div>
              <div>
                <h5>language: </h5>
                <span>{Object.values(countryInfo.languages).map((lang)=>`${lang}, `)}</span>
              </div>
            </div>
          </div>
          <div className="border">
            <h5>Border Countries: </h5>
            {countryInfo.borders?.map((count?)=><span>{count}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowCountryInfo;
