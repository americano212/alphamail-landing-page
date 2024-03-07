import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section"; 
import Faq from "./Faq"; 
import { useNavigate } from "react-router-dom";
import Router from "./Router"; 
import section_Array from "../assets/section-Array"


const sectionArray = section_Array; 

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