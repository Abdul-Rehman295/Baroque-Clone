import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Navbar/baroque.css';
function Header() {
  return (
    <>
     <Carousel controls={false} indicators={false}>  
           <Carousel.Item>
                                <p className='text-light bg-black text-center pt-1 pb-1 font-size'>TO CANCLE YOUR ORDER <a href="https://www.baroque.pk/"className='text-secondary pl-1'>(<u>CLICK HERE </u>)</a></p>
           </Carousel.Item>
           <Carousel.Item>
                                <p className='text-light bg-black text-center pt-1 pb-1 font-size'>FREE SHIPPING IN PAKISTAN</p>
           </Carousel.Item>
           <Carousel.Item>
                                <p className='text-light bg-black text-center pt-1 pb-1 font-size'>FREE INTERNATIONAL SHIPPING 
                                <a href="https://www.baroque.pk/"className='text-secondary pl-1'>(<u>CLICK HERE </u>)</a></p>
           </Carousel.Item>
           <Carousel.Item>
                                <p className='text-light bg-black text-center pt-1 pb-1 font-size'>FOR ANY QUERY CONTACT US AT
                                <a href="https://www.baroque.pk/"className='text-secondary pl-2'><u>03244544180</u></a></p>
           </Carousel.Item>
            <Carousel.Item>
                                <p className='text-light bg-black text-center pt-1 pb-1 font-size'>EXCHANGE FORM
                                <a href="https://www.baroque.pk/"className='text-secondary pl-1'>(<u>CLICK HERE </u>)</a></p>
           </Carousel.Item>
    </Carousel>     
    </>
  )
}

export default Header
