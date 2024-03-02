import React from "react"; 

function Cta(props){

    function handleClick(){
        console.log("button clicked!"); 
    }

    return (
        <div>
            <button className="Cta" id={props.id} onClick={handleClick}>{props.text}</button>
        </div>
    ); 
}

export default Cta; 