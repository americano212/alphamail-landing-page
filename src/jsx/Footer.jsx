import React from "react";
import "./Footer.css"; 

function Footer(){
    const date = new Date().getFullYear(); 
    return (
        <div className="Footer">
    <ul> 
        <li>α-mail | (주)알파메일</li>
        <li>Copyright © {date}</li>
    </ul>
        </div>);
}

export default Footer; 