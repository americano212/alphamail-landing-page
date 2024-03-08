import React from "react";
import Slide from "./Slide"; 
import "./Faq.css"; 
import faqArray from "../assets/faq-Array"; 


function Faq(){
    return(
    <div className="Faq">
        <div className="faqHeader">
            <p> FAQ </p>
            <h2> OMail FAQ & 유의사항 </h2>
        </div>
        {faqArray.map((faqItem) => {
            return (
                <Slide
                    key={faqItem.key}
                    id={faqItem.id}
                    question={faqItem.question}
                    answer={faqItem.answer}
                    />
            )


        })}
    </div>); 
}

export default Faq; 