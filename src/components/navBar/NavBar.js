import React, { useState, useEffect, useRef } from "react";
import Select from "../select/Select";
import "./NavBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ countries }) => {
  function clickFunc(name) {
    navigate("../" + name);
    setValue(name);
    setIsClick(false);
  }

  const date= new Date();
  const a=date.toDateString()
  const navigate = useNavigate();
  const [mapArr, setMapArr] = useState(countries);
  const [isClick, setIsClick] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [value, setValue] = useState("");
  console.log(mapArr, "mapArr");
  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.name.toLowerCase().includes(value?.toLowerCase())
    );
    setMapArr(newCountries);
    if (mapArr.length < 1){setIsSet(true)}

    console.log(newCountries);
    console.log(value);
    console.log(countries);
  }, [value]);

  return (
    <div>
      <h3 className="covidTitle">COVID 19 CORONAVIRUS TRACKER</h3>
    <div className="link">
      <p>
        <Link to={"/"} style={{ "text-decoration": "none" }}>
          home
        </Link>
      </p>
      <div
        onFocus={() => {
          setIsClick(true);
          isSet 1 && setMapArr([...countries]);
           mapArr.length < 1&& setIsSet(true)

          console.log(isClick);
        }}
      >
        {isClick && (
          <button
            onClick={() => {
              setIsClick(false);
              setValue("");
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
            setIsClick(true);
          }}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              if (mapArr.length===1){
              clickFunc(mapArr[0].name)}
            } else if (e.key === "ArrowDown") {
            } else if (e.key === "ArrowUp") {
            }
          }}
        ></input>

        {isClick && (
          <div className={`${isClick && "display"}`}>
            {mapArr.map((country, i) => (
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
        <Link to={"/about"} style={{ "text-decoration": "none" }}>
          about
        </Link>
      </p>
      </div>
      <h4>Correct data for: {a}</h4>
    </div>
  );
};

export default NavBar;
