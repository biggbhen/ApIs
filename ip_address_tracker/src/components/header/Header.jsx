import React from 'react'
import './header.css'



const Header = () => {
  return (
    <div className='header'>
    <h1>IP Address Tracker</h1>
    <form action="submit">
     <input type="text" placeholder='search for any ip address or domain'/>
    <button></button>
    </form>
    <div className='locationInfo'>
     <div className='ipDetails'>
      <h2>IP ADDRESS</h2>
      <h3>192.212.174.101</h3>
      </div>
     <div className='locationDetails'>
      <h2>LOCATION</h2>
      <h3>Brooklyn, NY <br /> 10001</h3>
      </div>
     <div className='timezoneDetails'>
      <h2>TIMEZONE</h2>
      <h3>UTC-05:00</h3>
      </div>
     <div className='ispDetails'>
      <h2>ISP</h2>
      <h3>SpaceX <br /> Starlink</h3>
      </div>

    </div>
    </div>
  )
}

export default Header