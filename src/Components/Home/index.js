import React from "react";
import  {Homesection,Homeinformation,Homeinfo,Hometitle,HomeDesc,HomeBtn,Span} from "./style.js";
const Home = ()=>{

    return(
        <Homesection>
        <div className="container">
            <Homeinformation>
                <Hometitle>Abdel Rhman Emad </Hometitle>
                <Homeinfo>Creative Director</Homeinfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web Applcations. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </Homeinformation>
        </div>
    </Homesection>
    )
}

export  default Home;