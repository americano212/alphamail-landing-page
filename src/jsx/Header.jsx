import React from "react";
import Cta from "./Cta";
import "./Header.css"; 

function Header(){



    return (<div className="Header">
        <div className="left">
        <div>
            <h1>
                이메일에    <br/>
                <b>AI를</b> <br/>
                더하다
            </h1>
            <p>O(ICG)Mail은 이메일의 새로운 경험을 제시합니다.  <br/>메일 자동생성, 스팸 필터와 같은 추가 기능을 한곳에서 활용해 보세요. </p>
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
            <img src="" alt="image" />
        </div>
        </div>) ; 
}

export default Header; 