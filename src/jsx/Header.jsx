import React from "react";
import Cta from "./Cta";

function Header(){



    return (<div className="Header">
        <img src="" alt="image" />
        <a href="https://kr.freepik.com/free-vector/transfer-files-concept-for-landing-page_5702639.htm#fromView=search&page=2&position=0&uuid=4379c4a9-b1ea-4cf0-b2bc-2ed3167a81a6">출처 freepik</a>

        <img src="" alt="image" />
        <div>
        <h1>
            이메일에    <br/>
            <b>AI를</b> <br/>
            더하다
        </h1>
        <p>O(ICG)Mail은 이메일의 새로운 경험을 제시합니다.  <br/>메일 자동생성, 스팸 필터와 같은 추가 기능을 한곳에서 활용해 보세요. </p>
        </div>
        <div>
        <Cta 
            key="1" 
            id="1"
            text="지금 바로 이용해보기"
        />
        </div>
        </div>) ; 
}

export default Header; 