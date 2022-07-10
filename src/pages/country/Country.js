import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Country.css";
import "../Country.css";
import { useLocation, useParams } from "react-router-dom";
const Country = ({ numberWithCommas, countries, i }) => {
  let countryName = useParams().country;

  const country = countries.filter(
    (el) => el.name.toLowerCase() === countryName.toLowerCase()
  )[0];
  //const {code}=country;
  //console.log(code);
  const name = !country ? "Not available country" : country.name;
  //const {code}=country
  const keys=["ACTIVE", "TODAY","CASES","DEATHS","RECOVERED","CRITICAL"]
  const values=[country?.latest_data.confirmed,country?.today.confirmed,country?.latest_data.recovered + country?.latest_data.confirmed,country?.latest_data.deaths,country?.latest_data.recovered,country?.latest_data.critical]
  const [countryData, setCountryData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const URL = "https://corona-api.com/countries" + country.code; //רציתי לבצע פניית API מדוייקת על המדינה, אך הראקט בשום אופן לא מזהה את הקוד מדינה, למרות שבתוך הJSX הוא כן מזהה אותו... מה יכולה להיות הסיבה?
      const { data } = await axios.get(URL);
      console.log(data);
      setCountryData(data.data);
    }
    try {
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  return (
    <div>
    <h3>Displays data from {name}</h3>
      <hr />
    {keys.map((key, i)=><CountryData key={i} dataName={key} number={numberWithCommas(values[i])} />)
        

    
    </div>
  );
};

export default Country;
