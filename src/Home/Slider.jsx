import React from 'react'
import './home.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
function Slider() {
  useEffect(() => {    
    document.title ="BAROQUE";  
   });
  return (
    <>   
      <Carousel slide={false} controls={false} indicators={false}>
      <Carousel.Item>
       <div className="dis-max">
       <img srcset="//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_375x.jpg?v=1683271631 375w,//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_550x.jpg?v=1683271631 550w,//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_750x.jpg?v=1683271631 750w,//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_1100x.jpg?v=1683271631 1100w,//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_1500x.jpg?v=1683271631 1500w,//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_1780x.jpg?v=1683271631 1780w,//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6.jpg?v=1683271631 1920w" sizes="100vw" src="//cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktops_8cb932f0-e0a7-452d-92b0-61c944eba7a6_1500x.jpg?v=1683271631" loading="lazy" alt="" width="1920" height="889"></img>
       </div>
       <div className="dis-min">
       <img srcset="//cdn.shopify.com/s/files/1/2277/5269/files/mobile_cbc349b0-1cb7-40a3-910f-e1130821fd56_375x.jpg?v=1683271764 375w,//cdn.shopify.com/s/files/1/2277/5269/files/mobile_cbc349b0-1cb7-40a3-910f-e1130821fd56_550x.jpg?v=1683271764 550w,//cdn.shopify.com/s/files/1/2277/5269/files/mobile_cbc349b0-1cb7-40a3-910f-e1130821fd56.jpg?v=1683271764 600w" sizes="100vw" src="//cdn.shopify.com/s/files/1/2277/5269/files/mobile_cbc349b0-1cb7-40a3-910f-e1130821fd56_1500x.jpg?v=1683271764" loading="lazy" alt="slider-pic"></img>
       </div>
        <Carousel.Caption>  
        <button className=' bg-black sliderBtn'>
            <span >
            <Link to='/unstiched'> 
              SHOP NOW
              </Link>
                </span>
                </button>
        </Carousel.Caption>
      </Carousel.Item>    
    </Carousel>
    <br /><br />
    </>
  )
}

export default Slider