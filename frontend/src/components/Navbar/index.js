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
                       {/*Projects*/}
                       <NavItem>
                          <NavLinks to="projects">Projects</NavLinks>
                      </NavItem>
                        {/*Education*/}
                      <NavItem>
                          <NavLinks to="education">Education</NavLinks>
                      </NavItem>
                      {/*Achievement*/}
                      <NavItem>
                          <NavLinks to="achievement">Achievement</NavLinks>
                      </NavItem>
                    </NavMenu>
                    
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar

