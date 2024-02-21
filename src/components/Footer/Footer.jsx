import React from 'react';
import FooterTop from "./FooterTop";
import logo from "../../images/coding-shuttle-light-theme.a8fb2722.svg";
import { CiYoutube} from "react-icons/ci";
import { FaInstagram, FaTelegramPlane,FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <div className='footer-section'>
          <FooterTop /> 
          <div className="footer-mid">
              <div className="footer-left">
          <img src={logo} alt={"coding-shuttle logo"} />
          <p>#BetterEveryday</p>
              </div>
        <div className="footer-middle">
          <h2>COMPANY</h2>
          <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Pricing & Refund Policy</li>
          <li>Contact Us</li>
          </ul>
              </div>
        <div className="footer-right">
          <h2>FOLLOW US ON</h2>
          <div className="social-icons">
            <div id="item1">
             <CiYoutube size={30} id="youtube"/>
            </div>
            
            <div >
              <FaLinkedinIn size={30} id="linkedin"/>
            </div>
            
            <div>
              <FaInstagram size={30} id="insta"/>
            </div>

            <div>
              <FaTelegramPlane size={30} id="telegram"/>
            </div>
          </div>
              </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © NGU Education Pvt. Ltd.</p>
          </div>
    </div>
  )
}

export default Footer;
