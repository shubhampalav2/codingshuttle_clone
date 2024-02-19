import React from 'react'
import { FaPlus } from "react-icons/fa6";
const FaqCard = ({obj}) => {
  return (
    <div className='faqCard'>
      <h3 className='faq-text'>{obj.title}</h3>
      <div className='puls-icon'>
      <FaPlus/>
      </div>
    </div>
  )
}

export default FaqCard;
