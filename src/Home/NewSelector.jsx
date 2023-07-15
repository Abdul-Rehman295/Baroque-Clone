import React from 'react';
import './home.css';
function NewSelector() {
  return (
    <>
     <div className="container newSelector">
                                    <div className="flex-item">
                                    <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/Style_guide_2_750x.jpg?v=1680255910" alt="BAROQUE" />
                                    </div>
                                    <div className="flex-item new-selector-input">
                                     <h3 className='text-center fw-bold '> GET 5% OFF!</h3>
 <p className='text-center text-secondary '><small>SIGN UP NOW TO OUR NEWSLETTER</small></p>
 <input type="email" className=''/>
 <button className=' bg-black  text-light'>
      <small>
          SING ME UP
          </small>
          </button>
                                    </div>
     </div>
    </>
  )
}

export default NewSelector