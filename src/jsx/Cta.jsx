import React from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./Cta.css"; 

function Cta(props){

    const navigate = useNavigate(); 

    function handleClick(){
        //console.log(props.id + "button clicked!");
        navigate("/submit", { replace: true , state:{id: props.id}}); 
    }



    return (
        <div>

                <button className="Cta" id={props.id} onClick={handleClick}>{props.text}</button>

        </div>
    ); 
}

export default Cta; 