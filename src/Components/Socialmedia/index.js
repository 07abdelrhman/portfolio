import React from "react";
import axios from "axios";

import {Social,Socialmediasectin,Socialdesc,Span,Spaninfo,Icon} from"./style.js";

class Socialmedia extends React.Component {

    state={
        social:[]
    }

    componentDidMount(){
        axios.get("js/data.json").then(res=>{
            this.setState({social:res.data.social})
            console.log(res.data.social)
        })
    }

render(){

    const{social}=this.state

    const sociallist= social.map((socialitem =>{
        return(
            <Social item ={socialitem.id} key={socialitem.id}>
            <Icon className={socialitem.icon}></Icon>
            <Socialdesc>
                <Span >{socialitem.title}</Span>
                <Spaninfo >{socialitem.body}</Spaninfo>
            </Socialdesc>
        </Social>
        )
    }))
    return(
        <div>
        <Socialmediasectin>
            
            {sociallist}
            
           
        </Socialmediasectin>
        </div>
    )
}

}

export  default Socialmedia;