import React from 'react';
import './baroque.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';
function Test() {
  const [mini , setMini] = useState("+");
  const Min = ()=>{ 
setMini("-")   
  }
  window.addEventListener("scroll",()=>{
    var a = document.getElementById("change");
   if(window.scrollY >= 20 ){
    a.style.backgroundColor="white";
    a.style.top="0px";
   }else{
    a.style.backgroundColor="transparent";
    a.style.top="35px";
   } 
  })
  return (
    <>
      <div className="navBar" id="change">
        {/* Navbar start */}
        <div id='naviGation'>
        {[false].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mt-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}   
              placement="start"
            >
           <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MENU <span style={{position:"fixed",left:"368px",cursor:"pointer"}}>X</span>
                </Offcanvas.Title>
              </Offcanvas.Header> 
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='pl-5' style={{background:"rgba( 0, 0,227, 0.1)"}}>COLLECTIONS &ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='pl-5 fw-bold'style={{fontSize:"26px"}} onClick={Min}>{mini}</span></Nav.Link>
                  <Nav.Link href="#action2">SHAWLS</Nav.Link>
                  <Nav.Link href="/">UNSTICHED</Nav.Link>
                  <Nav.Link href="#action2" style={{color:"red"}}><i>SPECIAL PRICE &ensp;&ensp; <small>NEW</small></i> </Nav.Link>
                  <Nav.Link href="#action2">READY TO WEAR</Nav.Link>
                  <Nav.Link href="#action2">DUPATTAS</Nav.Link>
                  <Nav.Link href="#action2">BOTTOMS</Nav.Link>
                  <div style={{position:"fixed",top:"450px"}}> HELPLINE : <span style={{fontSize:"26px",cursor:"pointer"}}><i class='bx bx-phone'></i> &ensp;<i class='bx bxl-whatsapp text-success'></i></span></div>
                  <div style={{position:"fixed",top:"500px",fontSize:"30px",left:"125px",cursor:"pointer"}}><i class='bx bxl-facebook-square'></i>&ensp;<i class='bx bxl-instagram'></i>&ensp;<i class='bx bxl-tiktok'></i></div>
                  <NavDropdown
                    title="🇵🇰 PKR "
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">🇵🇰 PKR</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    🇺🇸  USD
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                    🇬🇧 GBP
                    </NavDropdown.Item>
                  </NavDropdown>
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
        {/* Navbar End */}

        {/* Logo  Start */}
        <div id='logo'>
        <img src="https://cdn.shopify.com/s/files/1/2277/5269/t/79/assets/baroque-01.svg?v=173726269846380996331680069541" alt="BAROQUE"  style={{position:"absolute",top:"30px"}} width="150px"/>
        </div>
        {/* Logo End */}
        {/* Icons Start */}
        <div>
        <div id='icons'>
        <div><i class='bx bx-search text-secondary'></i></div>
            <div><i class='bx bx-heart text-secondary' ></i></div>
            <div><i class='bx bx-user text-secondary icon'></i></div>
            <div><i class='bx bx-shopping-bag text-secondary'><sub id='f-s'>(1)</sub></i></div>
        </div>
        </div> 
        {/* Icons End */}
      </div>
    </>
  )
}

export default Test
