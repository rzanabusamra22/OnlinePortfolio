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
               <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
               <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
               {/* <SidebarLink to="achievement" onClick={toggle}>Achievements</SidebarLink> */}
             </SidebarMenu>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
