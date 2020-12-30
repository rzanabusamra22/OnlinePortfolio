import React from 'react'
import {SidebarContainer,CloseIcon,Icon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
             <CloseIcon/>
           </Icon>
           <SidebarWrapper>
             <SidebarMenu>
               <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
               <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
               <SidebarLink to="trainings" onClick={toggle}>Education and Trainings</SidebarLink>
               <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
             </SidebarMenu>

           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
