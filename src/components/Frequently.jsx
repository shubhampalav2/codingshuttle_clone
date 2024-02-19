import React from 'react'
import FaqCard from "./FaqCard.jsx"
import "./Frequently.css"
const Frequently = () => {
    const arr = [
        {
        "title":"Can I switch my domain from non-technical to technical after learning this program?"
        },
        {
        "title":"What is the duration of this Program and how long will I have access to this program?"
        },
        {
        "title":"How will my doubts get resolved?"
        },
        {
        "title":"Can I pay using EMIs?"
        },
        {
        "title":"Do I need a computer for this program?"
        },
        {
        "title":"Can we download the video content?"
        },
        {
        "title":"I am not from a programming background, is this course fit for me?"
        },
        {
        "title":"I do not know any programming language, can I join this program?"
        },
        {
        "title":"Is there any Placements Assistance with this Program?"
        },
        {
        "title":"Will I get job opportunities after completing this program?"
        },
        {
        "title":"How do the classes take place?"
        },
        {
        "title":"What if I miss any of the LIVE Classes?"
        },
        {
        "title":"Are certifications provided?"
        },
        {
        "title":"Do you provide any other course materials as well?"
        }
    ]
  return (
      <div className='faqs-cards'>
          {arr.map((obj) => (
              <FaqCard obj={obj} />
        ))}
    </div>
  )
}

export default Frequently;
