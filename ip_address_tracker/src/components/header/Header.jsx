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
    <div className='location'>
     <div></div>
     <div></div>
     <div></div>
     <div></div>

    </div>
    </div>
  )
}

export default Header