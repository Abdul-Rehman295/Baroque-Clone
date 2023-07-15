import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Grid() {
  return (
    <>
      <div className="container f-r">
        <div className="catageory">
        <Link to='/unstiched'><img src="https://cdn.shopify.com/s/files/1/2277/5269/files/banner_copy_550x.jpg?v=1680330542" alt="item_1" /></Link>
        <p className='fw-bold text-center text-secondary my-2 tag'>READY TO WEAR <br />
        <Link to='/unstiched' className='shopNow'>SHOP NOW</Link></p>
        </div>
        <div className="catageory">  
        <Link to='/unstiched'> <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/3a_550x.jpg?v=1680330907" alt="item_2" /></Link>
        <p className='fw-bold text-center text-secondary my-2 tag'>SWISS LAWN <br />
        <Link to="/unstiched" className='shopNow'>SHOP NOW</Link> </p>  
        </div>
        <div className="catageory">
        <Link to='/unstiched'> <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/1aaae_7d70ba70-d270-4620-9607-50539edac36b_550x.jpg?v=1680330708" alt="item_3" /></Link>
        <p className='fw-bold text-center text-secondary my-2 tag'>DUPATTAS <br />
        <Link to="/unstiched" className='shopNow'>SHOP NOW</Link></p>     
        </div>
        <div className="catageory">
        <Link to='/unstiched'> <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/6_b88be7d9-11bf-456b-90a4-2bde9ca3f52f_550x.jpg?v=1680330661" alt="item_4" /></Link>
        <p className='fw-bold text-center text-secondary my-2 tag'>CHANTELLE <br />
        <Link to='/unstiched' className='shopNow'>SHOP NOW</Link></p>  
        </div>
        <div className="catageory">
        <Link to='/unstiched'> <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/bannerbvb_1e0d33ff-1708-4740-9666-f864beb5654b_550x.jpg?v=1679985851" alt="item_5" />
        </Link>
        <p className='fw-bold text-center text-secondary my-2 tag'>BOTTOMS  <br />
        <Link to='/unstiched' className='shopNow'>SHOP NOW</Link></p>
        </div>
        <div className="catageory">
        <Link to='/unstiched'> <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/12_d5a96aaa-b941-4ae2-b5f5-25e2d31f6199_550x.jpg?v=1679985029" alt="item_6" /></Link>   
        <p className='fw-bold text-center text-secondary my-2 tag'>SPECIAL PRICES   <br /> 
        <Link to='/unstiched' className='shopNow'>SHOP NOW</Link></p>
        </div>
        <br /><br />
      </div>
    </>
  )
}

export default Grid
