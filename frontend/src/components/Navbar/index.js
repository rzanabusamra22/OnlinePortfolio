import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements'
import { FaBars } from 'react-icons/fa';


const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to="home">Razan Abusamra</NavLogo>
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
                          <NavLinks to="trainings">Education and Trainings</NavLinks>
                      </NavItem>
                        {/*Contact*/}
                      <NavItem>
                          <NavLinks to="projects">Projects</NavLinks>
                      </NavItem>
                    </NavMenu>
                    
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar

