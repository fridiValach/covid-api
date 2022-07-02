import React, { useState, useEffect } from "react";
import "./Most.css";
const Most = ({ data, time, countries, numberWithCommas }) => {
  console.log(countries);
  const [mostCountries, setMostCountries] = useState(countries);
  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  function loop() {
    {
      for (let i = 0; i < 5; i++) {
        console.log(mostCountries[i]);
        return <li>{mostCountries[i][time][data]}</li>;
      }
    }
  }

  useEffect(() => {
    if (countries.length > 0) {
      const firstFilter = time === "today" ? "today" : "latest_data";
      const filtered = countries.map((el) => {
        return { ...el[firstFilter], name: el.name, code: el.code };
      });
      let sorted = sortByKey(filtered, data);
      sorted = sorted.reverse().slice(0,5);
      setMostCountries(sorted);
      console.log(filtered, "filtered");
      console.log(sorted, "sorted");
      console.log(mostCountries, "mostCountries");
      setMostCountries(sorted);
    }
    /* const firstFilter= time==="today"?"today":"latest_data"
        const secondFilter=data==="deaths"?"deaths":"confirmed"
        const filtered=sortByKey(countries, time[data])
        console.log(filtered);
        setMostCountries(filtered)*/

    /*  let filtered=[]
        time==="today"?filtered=countries.filter((coun)=>coun.today):filtered=countries.filter((coun)=>coun.latest_data)
        const secondFilter=filtered.filter((timedData)=>data)
       console.log(secondFilter);
      */
  }, [countries]);
  return (
    <div className="mostCard">
      <h3>
        Most {data} - {time}
      </h3>
      <ol>
        {mostCountries.map((el) => (
          <li>
            {el.name} - {numberWithCommas(el[data])}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Most;
