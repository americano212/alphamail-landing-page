import React, { useState, useEffect } from "react"; 
import Radio from "./Radio";
import RadioGroup from "./RadioGroup"; 
import { useNavigate } from "react-router-dom"; 
import { useLocation } from 'react-router-dom';



function Submit() {
  /* 
    state 변수 + 함수들. 
  */
    const [stateName, setName] = useState("");
    const [statePhone, setPhone] = useState(""); 
    const [stateBirth, setBirth] = useState(""); 
    const [stateSex, setSex] = useState(""); 
    

  /* 
    이름 state 바꾸는 함수 
  */
    function handleName(event){
      const {value} = event.target; 
      setName(value); 
  }


  /* 
    핸드폰 번호 11자리 수 state 바꾸는 함수 - 값: 0~9 
    자동 하이픈 기능. 
    숫자만 입력 가능. 
  */
  function handlePhone(event){
    const {value, keyCode, maxLength} = event.target; 
    
    // 자동 하이픈 돛거 
    let rawPhone = value.replace(/-/g, '');
    rawPhone = rawPhone.replace(/[a-z]/gi, '');
    let formattedPhone = '';
  
    if (rawPhone.length < 4) {
      formattedPhone = rawPhone
    } else if (rawPhone.length < 8) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`
    } else if (rawPhone.length < 11) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7,
      )}-${rawPhone.slice(7)}`
    } else {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7,
      )}-${rawPhone.slice(7, 11)}`
    }
  
    const displayPhone = formattedPhone.length > 0 ? formattedPhone : '';
    setPhone(displayPhone);
  }


  /* 
    주민등록번호 앞자리 6자리 수 state 바꾸는 함수 - 값: 0~9 
    숫자만 입력 가능. 
  */
  function handleBirth(event){
    const {value, keyCode, maxLength} = event.target; 
    // 백스페이스를 누르고, 현재 입력값이 최대 길이인 경우
    if (keyCode === 8 && value.length === maxLength) {
      setBirth(value);
    } 
    // 숫자로만 이루어진 값이거나 빈 문자열이며, 최대 길이 이하일 때 상태를 업데이트
    else if ((/^\d*$/.test(value) || value === '') && value.length <= maxLength) {
      setBirth(value);
    }
  }


  /* 
    주민등록번호 뒷자리 1번째 수 state 바꾸는 함수 - 값: 1~4 
    숫자만 입력 가능. 
  */
  function handleSex(event){
    const {value, keyCode, maxLength} = event.target; 
    // 백스페이스를 누르고, 현재 입력값이 최대 길이인 경우
    if (keyCode === 8 && value.length === maxLength) {
      setSex(value);
    } 
    // 숫자로만 이루어진 값이거나 빈 문자열이며, 최대 길이 이하일 때 상태를 업데이트
    else if ((/^[1-4]$/.test(value) || value === '') && value.length <= maxLength) {
      setSex(value);
    }
  }


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






    // 숫자의 개수가 부족할 때, 정확한 휴대폰 번호를 입력해주세요, 정확한 생년월일을 입력해주세요 형성. 

    // 버튼 눌렀을 때, 데이터 전송 구현. 



    return (
        <div className="Submit">
        
    <section>
    <div className="header">
    <p onClick={handleClick} className="backLink">뒤로가기 버튼</p>

    <p className="text">작통단 메일을 가장 먼저 사용해보고 싶으신가요?</p>

    <p className="text">가장 먼저 정보를 얻어보세요!</p>
    </div>
    </section>

    <form class="w-50 p-3"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target.need.value); 
        console.log(event.target.name); 
        console.log(event.target.phoneNum); 
        console.log(event.target.birth); 
        console.log(event.target.sex); 
        console.log(buttonId); 
        //alert(`${event.target.contact.value}를 고르셨습니다!`);
      }}
    >

    <div className="submitName">
      <p className="personname">이름</p>
      <input type="text" name="name" placeholder="나의 이름을 입력해주세요." onChange={handleName} value={stateName}></input>
      <p className="warning">Tip! 꼭 실명으로 입력해주세요.</p>
    </div>
    
    <div className="submitPhone">
      <p>휴대폰 번호</p>
      <input type="text" name="phoneNum" placeholder="010-0000-0000" onChange={handlePhone} value={statePhone} maxLength={13}></input>
    </div>

    
    <div className="submitBirthSexParag">생년월일</div>
    <div className="submitBirthSex">
      <div className="submitBirth">          
          <input type="text" name="birth" placeholder="생년월일 6자리" onChange={handleBirth} value={stateBirth} maxLength={6}></input> 
      </div>
      <div className="between">-</div>
      <div className="submitSex">
          <input type="text" name="sex" onChange={handleSex} value={stateSex} maxLength={1}></input>
      </div>
      <div className="blackCircle">●●●●●●</div>
    </div>





    <RadioGroup label="자동으로 스팸 메일을 분류하는 시스템이 필요하다고 생각하시나요?">
        <Radio name="need" value="100%" defaultChecked>
          매우 그렇다
        </Radio>
        <Radio name="need" value="75%">
          그렇다
        </Radio>
        <Radio name="need" value="50%">
          보통이다 
        </Radio>
        <Radio name="need" value="25%">
          아니다
        </Radio>
        <Radio name="need" value="0%">
          매우 아니다
        </Radio>
      </RadioGroup>






    <div><button className="submitButton" type="submit">제출</button></div>
    </form>
        </div>
    ); 
}

export default Submit; 