import React, { useState, useEffect } from "react";

import "./Most.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Pie from "../pie/Pie";

const Most = ({ data, time, countries, numberWithCommas }) => {
  const navigate = useNavigate();

  console.log(countries);
  const [mostCountries, setMostCountries] = useState(countries);
  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  function clickFunc(name) {
    navigate("../" + name);
  }

  useEffect(() => {
    if (countries.length > 0) {
      const firstFilter = time === "today" ? "today" : "latest_data";
      const filtered = countries.map((el) => {
        return { ...el[firstFilter], name: el.name, code: el.code };
      });
      let sorted = sortByKey(filtered, data);
      sorted = sorted.reverse().slice(0, 5);
      setMostCountries(sorted);
      console.log(filtered, "filtered");
      console.log(sorted, "sorted");
      console.log(mostCountries, "mostCountries");
      setMostCountries(sorted);
    }
  }, [countries]);
  const numbers = mostCountries.map((el) => el[data]);
  const names = mostCountries.map((el) => el["name"]);
  return (
    <div className="mostCard">
      <h3>
        Most {data} - {time}
      </h3>
      {/* בתחילה הכנסתי כאן רשימה של שמות המדינות והנתונים שלהן, אך כיון שבהמשך יצרתי זאת בתוך הפאי- היה נראה לי שזו כפילות. האם אני צודקת?
      <ol>
        {mostCountries.length===5&&
        mostCountries.map((el) => (
          <li
            key={el.code}
            onClick={() => {
              clickFunc(el.name);
            }}
            onMouseOver={(e) => {
              e.target.className = "over";
            }}
            onMouseLeave={(e) => {
              e.target.className = "";
            }}
            onMouseDown={() => {
              clickFunc(el.name);
            }}
          >
            {el.name} - {numberWithCommas(el[data])}
          </li>
        ))}
          </ol>*/}
      <Pie
        number={numbers}
        names={names}
        numberWithCommas={numberWithCommas}
      />
    </div>
  );
};

export default Most;
