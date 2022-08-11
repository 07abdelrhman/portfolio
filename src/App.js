
import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Index from "./Components/index";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/"component={Index}></Route>
        <Route  path="/contact" component={Contact}></Route>

      </BrowserRouter>
    )
  }

}

export default App;
