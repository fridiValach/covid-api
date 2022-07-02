import React,{useState,useEffect, useRef} from 'react';
import axios from 'axios';
import './Home.css'
import Most from '../../components/most/Most';

const Home = ({numberWithCommas, countries}) => {
  const [today, setToday]=useState({})
  const data=["deaths", "confirmed"]
  const time=["today","all time"]
  useEffect(() => {
    async function fetchData(){
      const URL="https://corona-api.com/timeline"
      const {data}=await axios.get(URL)
      console.log(data);
      const todays=data.data[0]
      console.log(data.data[0]);
      setToday(todays)
    }
    fetchData()
  },[])
  return (
    <div>
      <table className='homeTable'>
      <tbody>
      <tr>
        <td colSpan="4">TOTAL CASES <br/>{numberWithCommas(today.confirmed)} </td>
      </tr>
      <tr>
      <td>DEATHS <br/>{numberWithCommas(today.deaths)}</td>
      <td>RECOVERED <br/>{numberWithCommas(today.recovered)}</td>
      <td>NEW CASES <br/>{numberWithCommas(today.new_confirmed)}</td>
      <td>NEW DEATHS <br/>{numberWithCommas(today.new_deaths)}</td>
      </tr>
      </tbody>
     
    </table>
    <div className='most'>
      {data.map((dataEl, dataI)=>
        time.map((timeEl, timeI)=><Most data={dataEl} time={timeEl} countries={countries} key={dataI+timeI} numberWithCommas={numberWithCommas}/>)
      )}
    

    </div>
    </div>
  )
}

export default Home