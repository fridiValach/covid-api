import React,{useState, useEffect} from "react";
import "./Most.css"
const Most = ({ data, time ,countries}) => {
    const [mostCountries, setMostCountries]=useState(countries)
    console.log(mostCountries);
    useEffect(() => {
        let filtered=[]
        time==="today"?filtered=countries.filter((coun)=>coun.today):filtered=countries.filter((coun)=>coun.latest_data)
        const secondFilter=filtered.filter((timedData)=>data)
       console.log(secondFilter);
    }, [mostCountries])
  return (
    <div className="mostCard">
      <h3>
        Most {data} - {time}
      </h3>
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  );
};

export default Most;
