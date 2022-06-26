import React,{useState, useEffect} from "react";
import "./Most.css"
const Most = ({ data, time ,countries}) => {
    const [mostCountries, setMostCountries]=useState(countries)
    function sortByKey(array, key) {
        return array.sort(function (a, b) {
          var x = a[key];
          var y = b[key];
          return x < y ? -1 : x > y ? 1 : 0;
        });
      }
      function loop (){
        {for (let i = 0; i < 5; i++) {
            console.log(mostCountries[i]);
            return  <li>{mostCountries[i][time][data]}</li>
    
       }}
      }
   
    console.log(countries);
    useEffect(() => {
        const firstFilter= time==="today"?"today":"latest_data"
        const secondFilter=data==="deaths"?"deaths":"confirmed"
        const filtered=sortByKey(countries, time[data])
        console.log(filtered);
        setMostCountries(filtered)

      /*  let filtered=[]
        time==="today"?filtered=countries.filter((coun)=>coun.today):filtered=countries.filter((coun)=>coun.latest_data)
        const secondFilter=filtered.filter((timedData)=>data)
       console.log(secondFilter);
      */
    }, [])
  return (
    <div className="mostCard">
      <h3>
        Most {data} - {time}
      </h3>
      <ol>
        
       {/*loop()*/}
      </ol>
    </div>
  );
};

export default Most;
