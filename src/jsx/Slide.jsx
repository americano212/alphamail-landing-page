import React, {useState} from "react"; 
import Collapse from 'react-bootstrap/Collapse';
import "./Slide.css"; 

function Slide(props){

    const [visible, setVisible] = useState(false); 

    function hanldeClick(event){
        setVisible(!visible); 
    }

    return (
        <div className="Slide">
            <div className="question" onClick={hanldeClick} aria-controls="example-collapse-text" aria-expanded={visible}> 
                <div className="left">{props.question}</div>
                <div className="right"></div>
            </div>
            <div className="answer hidden" >
                <Collapse in={visible}>
                <div id="example-collapse-text">
                    {props.answer}
                </div>
                </Collapse>
            </div>
            
        </div>
    ); 
}

export default Slide; 