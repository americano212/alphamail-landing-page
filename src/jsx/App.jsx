import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section"; 
import Faq from "./Faq";
import section_Array from "../assets/section-Array"
import { useAirBridge } from "../lib/airbridge";


const sectionArray = section_Array; 

function App(){
    useAirBridge();
    return <div className="App">
    <Header />
    {sectionArray.map((sectionItem) => {
        return (
            <Section 
                key={sectionItem.key}
                id={sectionItem.id}
                heading={sectionItem.heading}
                content1={sectionItem.content1}
                content2={sectionItem.content2}
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