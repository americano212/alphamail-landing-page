import React from "react"; 
import Cta from "./Cta"; 
import "./Section.css"; 

function Section(props){

    return (
    <div className={`Section Section${props.id}`} id={props.id}>
        <p className="BodyPoint">Point.{props.id -1}</p>
        <h2>{props.heading.slice(0,4)}<b>{props.heading.slice(4,6)}</b>{props.heading.slice(6)}</h2>
        <p>{props.content1}</p>
        <p>{props.content2}</p>
        <img src={props.img} alt={props.alt} />
        <Cta 
            id={props.id} 
            text={props.text}
        />
    </div>); 
}

export default Section; 

