
import React, { Component } from 'react';

import About from './../About';
import Footer from "./../Footer";
import Home from "./../Home";
import Portfolio from "./../Portfolio";
import Profile from "./../Profile";
import Socialmedia from "./../Socialmedia";
import Work from "./../Work";

const Index =()=>{
 
    return(
      <div>
        <Home></Home>
        <Work></Work>
        <Portfolio></Portfolio>
        <Profile></Profile>
        <About></About>
        <Socialmedia></Socialmedia>
        <Footer></Footer>
      
      </div>
    )
  }



export default Index;
