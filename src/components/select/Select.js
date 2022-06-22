import React from 'react'
import { useNavigate } from 'react-router-dom'

const Select = ({country, setIsClick,setValue}) => {
  const navigate=useNavigate()

  return (
    <div onClick={()=>{navigate("../"+country.name/*, {state:{country}}*/);setValue(country.name); setIsClick(false)}}>
       {country.name}
    
    
    </div>
  )
}

export default Select
/*import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Contries from "../Contries/Contries";
import axios from "axios";
import "./NavBar.css";

const NavBar = () => {
  const [countries, setCountries] = useState([]);
  const [isClick,setIsClick]=useState(false)

  const country=useRef(null)

  async function fetchData() {
    const countriesApiUl = `https://corona-api.com/countries`;
    const { data } = await axios.get(countriesApiUl);
    setCountries(data.data.map((el) => el.name));
  }
  const styleCountry=()=>{
    const style=country.current.style
    style.border="#000 1px solid"
    style.width="200px"
    style.height="700px"
    style.background= "scroll"
  }

  return (
    <>
    <div id="navStyle">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <input onFocus={()=>{setIsClick(true);fetchData();styleCountry()}}
      onBlur={()=>{setIsClick(false)}}
      onKeyDown={(e)=>{console.log(e);e.code==="Enter"??}}></input>
      </div>      
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
    <div ref={country}>
        {isClick?(countries.map((country) => (
          <Contries contries={country} />
        ))):(<></>)}
      </div>
      </>
    
  );
};

export default NavBar;
*/