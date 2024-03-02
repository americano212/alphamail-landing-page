import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section"; 
import Faq from "./Faq"; 


const sectionArray = [
    {
        key: 2, 
        id: 2, 
        heading: "강력한 연봉제안", 
        content: "당신의 경험에 걸맞는 보상을 받고 있나요? 내가 원하는 페이밴드를 설정하고, 강력한 연봉제안을 받아 보세요!",
        img: "",
        text: "연봉제안 받아보기",
    },
    
    {
        key: 3, 
        id: 3, 
        heading: "페이밴드 분석", 
        content: "지금 나의 위치가 궁금하다면? 나의 페이밴드 분석부터 실시간 페이밴드까지 확인해 보세요!",
        img: "", 
        text: "연봉제안 받아보기",
    },
]

function App(){
    
    return <div className="App">
    <Header />
    {sectionArray.map((sectionItem) => {
        return (
            <Section 
                key={sectionItem.key}
                id={sectionItem.id}
                heading={sectionItem.heading}
                content={sectionItem.content}
                img={sectionItem.img}
                text={sectionItem.text}
            />
        )
    })}
    <Faq/>
    <Footer/>
    </div>; 
}

export default App; 