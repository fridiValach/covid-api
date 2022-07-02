import React, { useState, useEffect, useRef } from "react";
import Select from "../select/Select";
import "./NavBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ countries }) => {
  function clickFunc(name) {
    navigate("../" + name /*, {state:{country}}*/);
    setValue(name);
    setIsClick(false);
  }

  //const date= new Date();
  //date= date.split(" ")[1]+"/"+date.split(" ")[2]+"/"+date.split(" ")[3]
  const navigate = useNavigate();
  const [mapArr, setMapArr] = useState(countries);
  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState("");
  console.log(mapArr, "mapArr");
  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setMapArr(newCountries);

    console.log(newCountries);
    console.log(value);
    console.log(countries);

  }, [value]);
  const array = mapArr 

  return (
    <div>
      <p>
        <Link to={"/"}>home</Link>
      </p>
      <div
        onFocus={() => {
          setIsClick(true);
          console.log(isClick);
        }}
      >
        {isClick && (
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
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {/*
              const newCountries = countries.filter((el) =>
                el.name.toLowerCase()===(value.toLowerCase())
              );
              console.log(newCountries);
              if (newCountries.length > 0) {
                console.log("enter");
                clickFunc(newCountries[0].name);
              }*/
              clickFunc(value);

            }
            else if(e.key === "ArrowDown"){}
            else if(e.key === "ArrowUp"){}
          }}
        ></input>

        {isClick && (
          <div className={`${isClick ? "display" : "hide"}`}>
            {array.map((country, i) => (
              <Select
                clickFunc={clickFunc}
                i={i}
                name={country.name}
                setValue={setValue}
                setIsClick={setIsClick}
                code={country.code}
                key={country.code}
              />
            ))}
          </div>
        )}
      </div>

      <p>
        <Link to={"/about"}>about</Link>
      </p>
      <h3>COVID 19 CORONAVIRUS TRACKER</h3>
      <h4>Correct data for today</h4>
    </div>
  );
};

export default NavBar;
