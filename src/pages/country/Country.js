import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Country.css";
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
      <table className="countryTable">
        <tbody>
          <tr>
            <td>
              <h4>ACTIVE</h4>
              <h5>{numberWithCommas(country?.latest_data.confirmed)}</h5>
            </td>
            <td>
              <h4>TODAY</h4>
              <h5>{numberWithCommas(country?.today.confirmed)}</h5>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <h4>CASES</h4>
              <h5>
                {numberWithCommas(
                  country?.latest_data.recovered +
                    country?.latest_data.confirmed
                )}
              </h5>
            </td>
            <td>
              {" "}
              <h4>DEATHS</h4>
              <h5>{numberWithCommas(country?.latest_data.deaths)}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>RECOVERED</h4>
              <h5>{numberWithCommas(country?.latest_data.recovered)}</h5>
            </td>
            <td>
              <h4>CRITICAL</h4>
              <h5>{numberWithCommas(country?.latest_data.critical)}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;
