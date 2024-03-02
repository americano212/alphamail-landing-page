import React, { useState, useEffect } from "react"; 
import Radio from "./Radio";
import RadioGroup from "./RadioGroup"; 

function Submit() {

  /*
    const [state, setState] = useState({
        name: "",
        phoneNum: "", 
        birth: "",
        need: "", 
    }); 

    function handleChange(event){
      const {name, value} = event.target; 
      setState((prevState)=>{
          return {
          ...prevState, 
          [name]: value
          }
      });
      // console.log(name);
      // console.log(typeof(name));
      // console.log(value); 
      // console.log(state.phoneNum); 
  }


    // 자동 하이픈 생성 돛거 
    useEffect(() => {
      if (state.phoneNum.length === 11) {
        setState((prevState)=> {
          return {
            ...prevState, 
            phoneNum: state.phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
        }});
      } else if (state.phoneNum.length === 13) {
        setState((prevState)=> {
          return {
            ...prevState, 
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
            phoneNum: state.phoneNum.replace(/-/g, ''), 
            phoneNum: state.phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      }});
      }
      return () => {}
    }, [state.phoneNum]);

*/ 
    const [stateName, setName] = useState("");
    const [statePhone, setPhone] = useState(""); 
    const [stateBirth, setBirth] = useState(""); 


    function handleName(event){
      const {value} = event.target; 
      setName(value); 
  }

  function handlePhone(event){
    const {value} = event.target; 
    setPhone(value); 
  }

  function handleBirth(event){
    const {value} = event.target; 
    setBirth(value); 
  }


    // 자동 하이픈 생성 돛거 
    useEffect(() => {
      if (statePhone.length === 11) {
        setPhone(()=> {
          return statePhone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        });
      } else if (statePhone.length === 13) {
        setPhone(()=> {
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
            return statePhone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      });
      }
      return () => {};
    }, [statePhone]);



    return (
        <div>
        
    <p>뒤로가기 버튼</p>

    <p>작통단 메일을 가장 먼저 사용해보고 싶으신가요?</p>

    <p>가장 먼저 정보를 얻어보세요!</p>

    <form
      onSubmit={(event) => {
        event.preventDefault();
        // console.log(event.target.need); 
        // console.log(event.target.name); 
        // console.log(event.target.phoneNum); 
        // console.log(event.target.birth); 
        //alert(`${event.target.contact.value}를 고르셨습니다!`);
      }}
    >
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

    <div>
      <p>이름</p>
      <input name="name" placeholder="나의 이름을 입력해주세요." onChange={handleName} value={stateName}></input>
      <p>Tip! 꼭 실명으로 입력해주세요.</p>
    </div>
    
    <div>
      <p>휴대폰 번호</p>
      <input name="phoneNum" placeholder="010-0000-0000" onChange={handlePhone} value={statePhone} maxLength={13}></input>
    </div>

    <div>
      <p>생년월일</p>
      <div>
          <input name="birth" placeholder="생년월일 6자리" onChange={handleBirth} value={stateBirth} maxLength={6}></input> 
      </div>
      <div>
          <input maxLength={1}></input>
          <div>●●●●●●</div>
      </div>
    </div>

      <button type="submit">제출</button>
    </form>
        </div>
    ); 
}

export default Submit; 