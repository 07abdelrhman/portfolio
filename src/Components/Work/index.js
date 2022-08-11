import React from  "react";
import {WorkPart,Workicon,Worksection,Span,Line,Partdesc,Parttite,Worktitle} from "./style.js";

const Work= ()=>{

    return( <Worksection>
    <div className="container">
        <Worktitle><Span>My</Span> Work</Worktitle>
        <WorkPart frist = "1">
            <Workicon className="icon fa fa-bolt fa-2x"></Workicon>
            <Parttite>Web site</Parttite>
            <Line className="line"/>
            <Partdesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </Partdesc>
        </WorkPart>
        
        <WorkPart>
            <Workicon className="icon fa fa-bolt fa-2x"></Workicon>
            <Parttite>Web site</Parttite>
            <Line className="line"/>
            <Partdesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </Partdesc>
        </WorkPart>
        
        <WorkPart>
            <Workicon className="icon fa fa-bolt fa-2x"></Workicon>
            <Parttite>Web site</Parttite>
            <Line className="line"/>
            <Partdesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </Partdesc>
        </WorkPart>
        
    </div>
</Worksection>
)
}

export  default Work;