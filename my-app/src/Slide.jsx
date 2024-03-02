import React, {useState} from "react"; 

function Slide(props){

    const [visible, setVisible] = useState(false); 

    function hanldeClick(event){
        setVisible(!visible); 
    }

    return (
        <div className="Slide">
            <div className="question" onClick={hanldeClick}> 
                <b>{props.question}</b>
            </div>
            <div className="answer hidden" >
                {visible && <p>{props.answer}</p>}
            </div>
            
        </div>
    ); 
}

export default Slide; 