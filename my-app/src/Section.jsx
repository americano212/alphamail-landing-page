import React from "react"; 
import Cta from "./Cta"; 

function Section(props){

    return (
    <div className="Section" id={props.id}>
        <p className="BodyPoint">Point.{props.id}</p>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
        <img src={props.img} alt="image" />
        <Cta 
            id={props.id} 
            text={props.text}
        />
    </div>); 
}

export default Section; 

