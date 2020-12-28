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
               <SidebarLink to="about">About</SidebarLink>
               <SidebarLink to="skills">Skills</SidebarLink>
               <SidebarLink to="trainings">Trainings</SidebarLink>
               <SidebarLink to="contact">Contact</SidebarLink>
             </SidebarMenu>

           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
