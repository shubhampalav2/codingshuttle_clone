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
           <a href="https://www.youtube.com/@codingshuttle" target="_blank" rel="noreferrer" className='link'><CiYoutube size={30} id="youtube" className='icons'/></a>
            </div>
            
            <div className='item2'>
              <a href="https://www.linkedin.com/company/coding-shuttle/"  target="_blank" rel="noreferrer" className='link'><FaLinkedinIn size={30} id="linkedin" className='icons'/></a> 
            </div>
            
            <div className='item3'>
              <a href="https://www.instagram.com/codingshuttle/" target="_blank" rel="noreferrer" className='link'><FaInstagram size={30} id="insta" className='icons'/></a>
            </div>

            <div className='item4'>
             <a href="https://telegram.me/realanujbhaiya" target="_blank" rel="noreferrer" className='link'><FaTelegramPlane size={30} id="telegram" className='icons'/></a> 
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
