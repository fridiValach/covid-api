import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Country.css";
import CountryData from "../../components/countryData/CountryData";
import Pie from "../../components/pie/Pie";
import { useLocation, useParams } from "react-router-dom";
const Country = ({ numberWithCommas, countries, i, setIsClick }) => {
  const countryName = useParams().country;

  const country = countries.filter(
    (el) => el.name.toLowerCase() === countryName.toLowerCase()
  )[0];
  //const {code}=country; הראקט לא מצליח לזהות את הקוד! למה?
  //console.log(code);
  const name = !country ? "Not available country" : country.name;
  const [countryData, setCountryData] = useState({});
  const keys = ["ACTIVE", "TODAY", "CASES", "DEATHS", "RECOVERED", "CRITICAL"];
  const values = [
    country?.latest_data.confirmed,
    country?.today.confirmed,
    country?.latest_data.recovered + country?.latest_data.confirmed,
    country?.latest_data.deaths,
    country?.latest_data.recovered,
    country?.latest_data.critical,
    country?.population,
  ];
  for (i = 0; i < 7; i++) {
    values[7] -= values[i];
  }
  const [dataObj, setDataObj] = useState({
    ACTIVE: country?.latest_data.confirmed,
    TODAY: country?.today.confirmed,
    CASES: country?.latest_data.recovered + country?.latest_data.confirmed,
    DEATHS: country?.latest_data.deaths,
    RECOVERED: country?.latest_data.recovered,
    CRITICAL: country?.latest_data.critical,
  });
  const [names, setNames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const URL = "https://corona-api.com/countries" + country?.code; //רציתי לבצע פניית API מדוייקת על המדינה, אך הראקט בשום אופן לא מזהה את הקוד מדינה, למרות שבתוך הJSX הוא כן מזהה אותו... מה יכולה להיות הסיבה?
      const { data } = await axios.get(URL);
      setCountryData(data.data);
    }
    try {
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  useEffect(() => {
    const keys = Object.keys(dataObj);
    setNames(keys);
  }, [dataObj]);

  return (
    <div>
      <h3>Displays data from {name}</h3>
      <hr />
      <div className="country">
        {keys.map((key, i) => (
          <CountryData
            key={i}
            dataName={key}
            number={numberWithCommas(values[i])}
          />
        ))}
        <h3>
          Segmentation of corona data from the total population of the country
        </h3>
        <Pie
          style={{ width: "70%" }}
          number={values}
          names={[...keys, "THE REST OF THE POPULATION"]}
          numberWithCommas={numberWithCommas}
        />
      </div>
    </div>
  );
};

export default Country;
