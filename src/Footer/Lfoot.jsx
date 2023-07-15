import React from 'react'
function Lfoot() {
                const date = new Date().getFullYear();                
  return (
    <>
      <p className='bg-black text-light text-center pt-1 pb-1 '><small>
        ALL RIGHTS RESERVED TO BAROQUE -
        <span> {date}</span></small></p>
    </>
  )
}
  
export default Lfoot
