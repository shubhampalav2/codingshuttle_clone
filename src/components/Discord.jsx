import React from 'react'
import { FaDiscord } from "react-icons/fa";
import img from "../images/discord.png";

const Discord = () => {
  return (
    <div className='discord-container'>
          <div className="discord-container-left">
              <h2>Learn & Grow with a community of learners just like you!</h2>
              <p>Join our Supportive Discord Community for Regular Webinars from Industry Experts and grow together as a Community ❤️</p>
              <a href="https://discord.com/invite/eXh7mjRq4W" target="_blank" rel="noreferrer"> <button><FaDiscord /> Join Discord</button></a>
             
          </div> 
          <div className="discord-container-right">
              <img src={img} alt={"discord logo"} />
          </div>
    </div>
  )
}

export default Discord;
