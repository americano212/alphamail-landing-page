import React from "react";
import Slide from "./Slide"; 

var faqArray = [
{
    key: "1", 
    id: "1", 
    question: "볼트엑스가 무엇인가요?", 
    answer: "볼트엑스(boltX) 는 팀 커피챗이 런칭한 채용 솔루션인 연봉어택의 새로운 이름이에요! 모두가 경험에 걸맞는 보상을 받을 수 있도록 하고, 기업은 핵심인재를 더 빠르게 만날 수 있도록 하는 목표를 이루고 있어요. 연봉으로 제안하고 제안받는 강력한 상승이직 boltX 에 참여하세요!",
},

{
    key: "2", 
    id: "2", 
    question: "어떤 회사가 참여하나요?", 
    answer: "멋진 경험의 인재에게 더 높은 보상을 약속하는 앞서가는 기업들이 함께하고 있어요. 현재는 당근, 토스, 쏘카, 몰로코 등 활발하게 채용을 진행 중인 IT 기업들이 다수 참여하고 있고, 새로운 기업들이 계속 추가될 예정이에요.",
},

{
    key: "3", 
    id: "3", 
    question: "카카오톡 인증이 필수인가요?", 
    answer: "카카오톡으로 3초만에 경력 인증이 가능해요! 건강보험공단과 국세청 인증으로 나의 경력 증명은 필수사항이에요.",
},

{
    key: "4", 
    id: "4", 
    question: "연소득은 왜 불러오나요?", 
    answer: "기업들이 나의 기존 연소득 대비 더 높은 연봉을 제안할 수 있도록 참고 지표로 활용되고 있어요. 내가 재직 중인 기업 또는 열람을 제한한 기업은 절대 나의 정보를 확인할 수 없어요.",
},


]


function Faq(){
    return(
    <div className="Faq">
        <p> FAQ </p>
        <h2> 볼트X FAQ & 유의사항 </h2>
        {faqArray.map((faqItem) => {
            return (
                <Slide
                    key={faqItem.key}
                    id={faqItem.id}
                    question={faqItem.question}
                    answer={faqItem.answer}
                    />
            )


        })}
    </div>); 
}

export default Faq; 