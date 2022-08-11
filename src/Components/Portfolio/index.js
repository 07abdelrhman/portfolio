import React from "react";
import {Portfolioitems,Portfoliolist,Portfoliosection,Portfoliotitle,Span,Images,Imagewrapper,Overlay,Overlayspan} from "./style.js";
const Portfolio = ()=>{

    return(
        <Portfoliosection>
            <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
            <Portfoliolist>
                <Portfolioitems>All</Portfolioitems>
                <Portfolioitems>HTML</Portfolioitems>
                <Portfolioitems>Photoshop</Portfolioitems>
                <Portfolioitems>Wordpress</Portfolioitems>
                <Portfolioitems>Mobile</Portfolioitems>
            </Portfoliolist>
            
          <div className="box">
                
                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img1.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>
                
                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img2.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img3.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img4.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img5.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img6.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img7.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                <Imagewrapper>
                    <Images src="images/Portfolio/portfolio-img8.jpg" alt=""/>
                    <Overlay>
                        <Span>
                            Show Image
                        </Span>
                    </Overlay>
                </Imagewrapper>

                
                </div>
        </Portfoliosection>
    )
}

export  default Portfolio;