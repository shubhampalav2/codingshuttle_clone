import React,{useState} from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
const FaqCard = ({ obj, idx }) => {
  const [isPresent,setIsPresent]=useState(false);
  function addAnswer() {
    const ans = document.querySelector("#faq"+idx);
    if (ans.style.display === 'none') {
      ans.style.display = 'block';
      setIsPresent(true);
    }
    else {
      ans.style.display = 'none';
      setIsPresent(false);
    }
  }
  return (
    <div className='faqCard'>
      <div className='faq-question'>
        <h3 className='faq-text'>{obj.title}</h3>
        <div className="faq-answer" id={"faq"+idx}>
          <p>{obj.ans}</p>
        </div>
      </div>
      

      <div className='plus-icon' onClick={addAnswer}>
        {isPresent===false? (<FaPlus className='plus-hover' color={"#04A978"} fontWeight={"600"} />) :
          (<FaMinus className='plus-hover' color={"#04A978"} fontWeight={"600"} />)  
        }
         
      </div>
    </div>
  )
}

export default FaqCard;
