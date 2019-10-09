import React from 'react';
import { Fade } from 'react-slideshow-image';
import "./slideShow.scss"
import 'bootstrap/dist/css/bootstrap.css'

const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("got", false, /\.(png|jpe?g|svg)$/)
);


// const fadeImages = [];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
}
 
const slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['1.jpg']} alt='hhh'/>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['2.jpg']} />
        </div>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['3.jpg']} />
        </div>
        
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['4.jpg']} />
        </div>
        
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['5.jpg']} />
        </div>
       
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['6.jpg']} />
        </div>
         
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['7.jpg']} />
        </div> 
      </div>
      
      <div className="each-fade">
        <div className="image-container">
          <img src={images['8.jpg']} />
        </div> 
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={images['9.jpg']} />
        </div>
        
      </div>
    </Fade>
     

  )
}

export default slideshow;