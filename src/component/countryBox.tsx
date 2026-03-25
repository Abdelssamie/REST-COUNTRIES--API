import { Country } from "@/types/country";
import { Dispatch, SetStateAction } from "react";

type infoParam = {
 setCountryInfo: Dispatch<SetStateAction<Country>>;
 countryInfo: Country;
 setShowInfoCountry: Dispatch<SetStateAction<boolean>>;
}

function CountryBox({setCountryInfo, countryInfo, setShowInfoCountry}: infoParam) {
    const handelClickBox = () => {
        setCountryInfo(countryInfo);
        setShowInfoCountry(true);
    }
    return (
        <div className="box" onClick={handelClickBox}>
            <img src={countryInfo.flags?.svg} alt="img" />
            <div className="info">
                <h1>{countryInfo.name?.common}</h1>
                <div>
                    <h5>Population: </h5> 
                    <p>{countryInfo.population?.toLocaleString()}</p>
                </div>
                <div>
                    <h5>Region: </h5>
                    <p>{countryInfo.region}</p>
                </div>
                <div>
                    <h5>Capital: </h5> 
                    <p>{countryInfo.capital}</p>
                </div>
            </div>
        </div>
    )
}
export default CountryBox;