import React from "react";
import {BsDot} from 'react-icons/bs';


function Main(){

  const slides=["To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?","This is the text for slide 2","This is the text for slide 3"];
  const[currentIndex,setCurrentIndex] = React.useState(0)
   const maxilari = document.getElementById("maxilari");

  const rotateImage = () =>{
       
       maxilari.style.transform = 'rotate(180deg)'
      }

      const unrotateImage = () =>{
       
        maxilari.style.transform = 'rotate(0deg)'
       }
  
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex)
 
}

    return(
        <div  >
            
            <div className="main" >
            
            
            <p className="title">S.und Co</p>


            <div className="slides">
               <p className="slideText">{slides[currentIndex]}</p>

            </div>

            <div className="dotdiv">
              {slides.map((slide,slideIndex) => (
                <div id="dot" className="dot" onClick={() => goToSlide(slideIndex)} > 
                   <BsDot />
                </div>
              ))}
            </div>

            </div>

            <div className="standard1">
              <img src="images/image2.png" className="image2" alt=""/>
              <div className="p1">
                <h1 className="head1">Since the 1500s</h1>
                <h1 className="head">The standard</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
              </div>
            </div>
            <div className="standard1">
             <div className="p2">
                <p className="head1">Since the 1500s</p>
                <h1 className="head">The standard</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <img src= "images/maxilari.png" id="maxilari"  className="maxilari" alt="" onMouseOver={() => rotateImage()} onMouseOut={() => unrotateImage()} />
            </div>

</div>
           
    ) 
}


export default Main;