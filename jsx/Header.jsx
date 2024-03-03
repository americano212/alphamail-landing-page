import React from "react";
import Cta from "./Cta";

function Header(){



    return (<div className="Header">
        <img src="" alt="image" />
        <img src="" alt="image" />
        <h1>
            지금 연봉보다 <br/>
            무조건 <b>더 높게</b> <br/>
            제안합니다
        </h1>
        <p>강력한 상승이직의 시작 <br/>볼트엑스로 시작하세요.</p>
        <Cta 
            key="1" 
            id="1"
            text="연봉제안 받아보기"
        />
        </div>) ; 
}

export default Header; 