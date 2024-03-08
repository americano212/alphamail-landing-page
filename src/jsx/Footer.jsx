import React from "react";
import "./Footer.css"; 

function Footer(){
    const date = new Date().getFullYear(); 
    return (
        <div className="Footer">
    <ul> 
        <li>Omail | (주)오메일</li>
        <li>Copyright © {date}</li>
    </ul>
        </div>);
}

export default Footer; 