import React, { useState, useEffect, useRef } from "react";
import Select from "../select/Select";
import "./NavBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ countries }) => {
  //const date= new Date();
  //date= date.split(" ")[1]+"/"+date.split(" ")[2]+"/"+date.split(" ")[3]
  const navigate = useNavigate();
  console.log(countries);
  const [mapArr, setMapArr] = useState(countries);

  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState("");
  console.log(mapArr);

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    setMapArr(newCountries);

    console.log(newCountries);
    console.log(value);
    console.log(countries);
  }, [value]);
  //{navigate("../country")}
  useEffect(() => {}, [isClick]);
  //{navigate("../country")}
  return (
    <div>
      <div className="navBar">
      <p>
        <Link to={"/"}>home</Link>
      </p>
      <div
        onFocus={() => {
          setIsClick(true);
          console.log(isClick);
        }}
      >
        {isClick && mapArr.length>0 && (
          <button
            onClick={() => {
              setIsClick(false);
            }}
          >
            X
          </button>
        )}
        <input
          type="text"
          placeholder="country"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>

        {isClick && (
          <div className={`${isClick ? "display" : "hide"}`}>
            {mapArr.map((country, i) => (
              <Select
                country={country}
                i={i}
                setValue={setValue}
                setIsClick={setIsClick}
                key={country.code}
              />
            ))}
          </div>
        )}
      </div>

      <p>
        <Link to={"/about"}>about</Link>
      </p>
      </div>
    
      <h3>COVID 19 CORONAVIRUS TRACKER</h3>
      <h4>Correct data for today</h4>
    </div>
  );
};

export default NavBar;
