import React from "react";
import { Link } from "react-router-dom";
import {Navbarsection,Logo,Logotext,Ullist,Listitem,Anchor,Anchorlink} from "./style.js";
const Navbar = ()=>{

    return(
        
            <Navbarsection>
            
            <div className="container">
                
                <Logo>
                    <Logotext>Ultra Profile</Logotext>
                </Logo>
                
                
                
                <Ullist>
                     <Listitem><Anchorlink to ="/">Home</Anchorlink></Listitem>
                    <Listitem><Anchor href="#">Work</Anchor></Listitem>
                    <Listitem><Anchor href="#">Portfolio</Anchor></Listitem>
                    <Listitem><Anchor href="#">Resume</Anchor></Listitem>
                    <Listitem><Anchor href="#">About</Anchor></Listitem>
                    <Listitem><Anchorlink to="/contact">Contact</Anchorlink></Listitem>
                    
                </Ullist>
                
            </div>
        </Navbarsection>
    )
}

export  default Navbar;