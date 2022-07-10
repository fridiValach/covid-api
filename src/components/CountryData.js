
import React from "react";
import { useNavigate } from "react-router-dom";

const CountryData = ({dataName, number }) => {
  return (
    <div
       <h4>{dataName}</h4>
              <h5>{number}</h5>
    </div>
  );
};

export default CountryData;
