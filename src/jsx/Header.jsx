import React from "react";
import Cta from "./Cta";
import "./Header.css"; 

function Header(){



    return (<div className="Header">
        <div className="left">
        <div>
            <h1>
                <b>꼭</b> 필요한 메일만    <br/>
                <b>집중</b>할 수 있는 <br/>
                <b>포커스</b> 메일
            </h1>
            <p>O(ICG)Mail은 이메일의 새로운 경험을 제시합니다.  <br/>메일 자동 생성, 자동 답장, 스팸 필터와 같은 모든 기능을 한곳에서 활용해 보세요. </p>
        </div>
        <div className="header_cta">
            <Cta 
                key="1" 
                id="1"
                text="지금 바로 이용해보기"
            />
        </div>
        </div>

        <div className="right">
            <img src="/mail.png" alt="image" />
        </div>
        </div>) ; 
}

export default Header; 