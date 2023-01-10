import React from 'react'
// import images 
import logo from '../images/troll-face.png'

//=========================================
function Navbar() {
  return (
    <nav>
        <img src={logo} alt= "" className='logo'></img>
        <h2 className='title'>Meme Generator</h2>
        <h4 className='creator'>created by oday</h4>
    </nav>
  )
}


export default Navbar;