import React from 'react';
import Header from './MainHeader/Header';
import Navigation from './MainHeader/Navbar/Navigation';
import First from './Home/First';
import Footer from './Footer/Footer';
import Lfoot from './Footer/Lfoot';
function Baroque() {
  return (
    <>
    <Header /> 
    <First/>
    <Navigation /> 
  <Footer />
  <Lfoot /> 
    </>
  )
}

export default Baroque
