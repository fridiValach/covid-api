import React from 'react'
import './Country.css'
import { useLocation } from 'react-router-dom';
const Country = ({ numberWithCommas, countries, i}) => {
  console.log(useLocation());
const country=countries[i]
console.log(countries, i);
//const {country}=location.state
  return (
    <div>
      <h3>{numberWithCommas(country?.name)}</h3>
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