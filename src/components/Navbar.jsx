import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
           <NavLink to={"/"} style={{textDecoration:"none",color:"black"}}><li>Home</li></NavLink> 
           <NavLink to={"/characters"} style={{textDecoration:"none",color:"black"}}><li>Characters</li></NavLink> 
        </ul>
    </div>
  )
}

export default Navbar