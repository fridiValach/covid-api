import React from 'react'
import './Country.css'
import { useLocation, useParams } from 'react-router-dom';
const Country = ({ numberWithCommas, countries, i}) => {
//const country=countries[i]
const countryName=useParams().country;

const country=countries.filter((el)=>el.name===countryName)[0]
console.log(country);
console.log(countryName);
//const {code}=country
//const {country}=location.state
  return (
    <div>
      <h3>{countryName}</h3>
      <hr/>
      <table className='countryTable'>
        <tbody>
          <tr>
          <td>
            <h4>ACTIVE</h4>
            <h5>{numberWithCommas(country?.latest_data.confirmed)}</h5>
          </td>
          <td>
          <h4>TODAY</h4>
            <h5>{numberWithCommas(country?.today.confirmed)}</h5>
          </td>
          </tr>
          <tr>
          <td>  <h4>CASES</h4>
            <h5>{numberWithCommas(country?.confirmed)}</h5></td>
          <td>  <h4>DEATHS</h4>
            <h5>{numberWithCommas(country?.latest_data.deaths)}</h5></td>
          </tr>
          <tr>
          <td>
          <h4>RECOVERED</h4>
            <h5>{numberWithCommas(country?.latest_data.recovered)}</h5>
          </td>
          <td>
          <h4>CRITICAL</h4>
            <h5>{numberWithCommas(country?.latest_data.critical)}</h5>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Country