import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "./pages/country/Country";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./components/navBar/NavBar";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function App() {
  function numberWithCommas(x) {
    return (x?.toString())?.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }
  const [countriesData, setCountriesData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const URL = "https://corona-api.com/countries";
      const { data } = await axios.get(URL);
      console.log(data);
      setCountriesData(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar countries={countriesData}/>
        <Routes>
          <Route path="/" element={<Home numberWithCommas={numberWithCommas} countries={countriesData}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/:country" element={<Country  numberWithCommas={numberWithCommas} countries={countriesData}/>}  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
