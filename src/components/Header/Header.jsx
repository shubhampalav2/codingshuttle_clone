import React from 'react'
import logo from "../../images/codingshuttle.svg"
import googleLogo from "../../images/google-signup.91be9f22.svg"
import "./Header.css"
const Header = () => {
  return (
      <div className='header'>
      <nav className='top-navbar'>
        <div className="nav-left">
                  <a href="#"><img src={logo}></img></a>
                  <a href="" className='nav-links hide'>Testimonials</a>
                  <a href="#" className='nav-links hide'>Curriculum</a>
                  <a href="#" className='nav-links hide'>FAQs</a>
              </div>      
              <div className="nav-right">
          <img src={googleLogo} className='sign-google' alt="googleLogo" />
              </div>
      </nav>  

      <div className="nav-heading">
      <p>The next Prime batch will be launching soon!🎉</p>
      </div>
          
      </div>
  )
}

export default Header;
