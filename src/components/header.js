import './header.css';
import React, { useState} from 'react';
import dota2Logo from './asset/dotaLogo.png';
import {Helmet} from "react-helmet";
import dropdown from'./asset/dropdown.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  function windowClose() {
    window.open('','_parent','');
      window.close();
   }
   function function1(){
     alert("hehe");
   }
  return (
    <div>
    <Helmet>
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
    </Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Navbar expand="md" className = "color-navbar">    
      
        <NavbarBrand href="/" >
        <button className="color-settings"> <i class="fa fa-gear"></i></button>
        </NavbarBrand>

        <div className="dota2-button-border-left"></div>       
        <NavbarBrand href="/" >
        <img src={dota2Logo} className="logo" alt="Girl in a jacket" ></img>
        </NavbarBrand> 
        <div className="dota2-button-border-right"></div>


        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem className="block">
              <NavLink  href="/" className="color-navbrand">HEROS</NavLink>
            </NavItem>     

            <div className="separator"></div>

            <NavItem>
              <NavLink  href="/" className="color-navbrand">STORES</NavLink>
            </NavItem>
            <div className="separator"></div>

            <NavItem>
              <NavLink  href="/" className="color-navbrand">WATCH</NavLink>
            </NavItem>
            <div className="separator"></div>

            <NavItem>
              <NavLink  href="/" className="color-navbrand">LEARN</NavLink>
            </NavItem>
            <div className="separator"></div>

            <NavItem>
            <NavLink  href="/" className="color-navbrand">ARCADE</NavLink>
          </NavItem>
          <div className="separator"></div>
         
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="color-navbrand">
                OPTIONS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

         
            
         
          <Nav>
          <NavItem>
          <div className="separator"></div>
          </NavItem>
          <NavItem>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="color-navbrand">
                
                 <i class="fas fa-envelope power-off"></i>
              </DropdownToggle>
              <DropdownMenu right style={{backgroundColor:" #2d3436"}}>
              <DropdownItem className="dropmessage">
              <img src={dropdown} className="dropdownlogo"></img>
              &nbsp;7.27d patch update
               </DropdownItem>
                <DropdownItem className="dropmessage">
                  <img src={dropdown} className="dropdownlogo"></img>
                  &nbsp;7.27c patch update
                </DropdownItem>

                <DropdownItem className="dropmessage">
                <img src={dropdown} className="dropdownlogo"></img>
                &nbsp;7.27b patch update
                </DropdownItem>
                
                <DropdownItem className="dropmessage">
                <img src={dropdown} className="dropdownlogo"></img>
                &nbsp;7.27a patch update
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <div className="separator"></div>  
            </NavItem>
            <NavItem>
            <NavbarBrand href="/" >          
            <i className='fas fa-power-off power-off'></i>
            </NavbarBrand>
            </NavItem>
          </Nav>
    

        
        </Collapse>

      </Navbar>
      
      </div>
      
  );
  }

  export default Header;