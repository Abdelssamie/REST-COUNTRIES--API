"use client"
import { url } from "inspector";
import Image from "next/image";
import {Country} from "../types/country";
import ShowCountries from "@/component/showCountries";
import ShowCountryInfo from "@/component/showCountryinfo";
import { useState, useEffect } from "react";




export default function Home() {
  const urlsCountries = "https://restcountries.com/v3.1/all?fields=name,flags,borders,capital,currencies,population,languages,region,subregion,tld"
  
const [countries, setCountries] = useState<Country[]>([]);
const [countryInfo, setCountryInfo] = useState<Country>({} as Country);
const [showInfoCountry, setShowInfoCountry] = useState(false);
const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");
const [darkMode, setDarkMode] = useState(true);

const fetchData = async () => {
  return (
    (await (await fetch(urlsCountries)).json())
  )}
useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setCountries(data);
    }
    loadData()
}, []);
useEffect (() => {
  if (darkMode) {
    document.body.className = "dark"
  }
  else {
    document.body.className = ""
  }
}, [darkMode])
console.log(countries)
  return (
    <div className="main">
      <header>
        <div>
          <h3>Where in the world?</h3>
        </div>
        <div className="darkMode" onClick={() => setDarkMode(!darkMode)}> 
          <svg xmlns="http://www.w3.org/2000/svg" fill= "white" viewBox="0 0 25 25" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          <p>Dark Mode</p>
        </div>
        </header>
        {!showInfoCountry && <ShowCountries countries={countries} setCountryInfo={setCountryInfo} setShowInfoCountry={setShowInfoCountry} filter={filter} setFilter={setFilter} setSearch={setSearch} search={search}/>}
        {showInfoCountry && <ShowCountryInfo countryInfo={countryInfo} setShowInfoCountry={setShowInfoCountry}/>}
    </div>
  );
}
