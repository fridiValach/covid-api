import React, { useState, useEffect, useRef } from "react";
import Select from "../select/Select";
import "./NavBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ countries, isClick, setIsClick }) => {
  function clickFunc(name) {
    navigate("../" + name);
    setValue(name);
    setIsClick(false);
  }

  const date = new Date();
  const a = date.toDateString();
  const navigate = useNavigate();
  const [mapArr, setMapArr] = useState(countries);

  const [value, setValue] = useState("");
  useEffect(() => {
    setMapArr(countries);
  }, [countries]);
  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.name.toLowerCase().includes(value?.toLowerCase())
    );
    setMapArr(newCountries);
  }, [value]);

  return (
    <div>
      <h3 className="covidTitle">COVID 19 CORONAVIRUS TRACKER</h3>
      <div className="link">
        <p>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            home
          </Link>
        </p>
        <div
          onFocus={() => {
            setIsClick(true);
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
              if (e.key === "Enter") {
                /*בתחילה רשמתי כך שרק אם יש ערך בודד שתואם להקלדה- זה יעבוד, אך אח"כ שיניתי שיעבוד תמיד עם הערך הראשון התואם. מה נכון יותר?
                if (mapArr.length === 1) {
                  clickFunc(mapArr[0].name);
                }*/
                clickFunc(mapArr[0].name);
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
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            about
          </Link>
        </p>
      </div>
      <h4>Correct data for: {a}</h4>
    </div>
  );
};

export default NavBar;
