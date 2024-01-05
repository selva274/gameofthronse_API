import React from 'react'
import "../App.css"

import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <heder>
  
        <div className='hero'>        
            <div className='hero-banner'>
                <h1>Game of Thrones</h1>
                <p>Description of Game</p>
              <NavLink to={"/characters"} ><button className="hero-btn">characters</button></NavLink>
            </div>
        </div>
    </heder>
  )
}

export default Header