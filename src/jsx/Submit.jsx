import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { useLocation } from 'react-router-dom';
import TallySurvey from "./TallySurvey";
import "./Submit.css"; 
//import Tally from "./Tally"; 


function Submit() {
  /*
    뒤로가기 핸들링 함수. 
  */
  const navigate = useNavigate();
  function handleClick(){
    navigate("/", { replace: true}); 
  }


  /* 
    버튼마다 id가 다름. -> 어떤 버튼을 타고 왔는지 알 수 있게끔. 
    인자로 받은, 버튼의 id 가져오기. 
  */ 
  const location = useLocation();
  const buttonId = location.state.id;
  //console.log(buttonId); 


    return (
        <div className="Submit">
        
    <div className="header">
      <button onClick={handleClick} className="backLink">{"< 뒤로가기"}</button>

      <p className="text">오메일(OMail)을 가장 먼저 사용해보고 싶으신가요?</p>

      <p className="text">가장 먼저 정보를 얻어보세요!</p>
    </div>

    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    > 
      <TallySurvey/>
    </form>
        </div>
    ); 
}

export default Submit; 