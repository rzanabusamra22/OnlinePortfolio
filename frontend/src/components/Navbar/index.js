import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements'
import { FaBars } from 'react-icons/fa';


const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to="/">Razan Abusamra</NavLogo>
                    <MobileIcon  onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        {/* About */}
                      <NavItem>
                          <NavLinks to="about">About</NavLinks>
                      </NavItem>
                        {/* Skills */}
                      <NavItem>
                          <NavLinks to="skills">Skills</NavLinks>
                      </NavItem>
                        {/*Trainings*/}
                      <NavItem>
                          <NavLinks to="trainings">Trainings</NavLinks>
                      </NavItem>
                        {/*Contact*/}
                      <NavItem>
                          <NavLinks to="contact">Contact</NavLinks>
                      </NavItem>
                    </NavMenu>
                    
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar

