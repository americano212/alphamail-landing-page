import React from "react"; 
import { useNavigate } from "react-router-dom"; 

function Cta(props){

    const navigate = useNavigate(); 

    function handleClick(){
        //console.log(props.id + "button clicked!");
        navigate("/submit", { replace: true}); 
    }



    return (
        <div>

                <button className="Cta" id={props.id} onClick={handleClick}>{props.text}</button>

        </div>
    ); 
}

export default Cta; 