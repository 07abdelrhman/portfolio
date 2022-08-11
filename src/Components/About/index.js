import React from "react";
import {Aboutsection,Aboutinfo,Abouttitlle,Anchor,Span,Infodesc,Infodir} from "./style";
const About = ()=>{

    return(
      
       
        <Aboutsection>
            <div class="container">
                <Aboutinfo>
                    <Abouttitlle><Span>This is</Span> Me</Abouttitlle>
                    <Infodir>Creative Director</Infodir>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                </Aboutinfo>
            </div>
        </Aboutsection>
        
    )
}

export  default About;