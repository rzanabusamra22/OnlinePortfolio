import React,{useState} from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index'

import HeroSection from '../components/HeroSection/index'
import AboutSection from '../components/aboutSection/index'
import SkillsSection from '../components/skillsSection/index'
import TrainingsSection from '../components/trainingsSection/index'
import ContactSection from '../components/contactSection/index'

import {homeObj,homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from '../components/Scroll'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection {...homeObj}/>
         <AboutSection {...homeObjOne}/>
         <SkillsSection {...homeObjTwo}/>
         <TrainingsSection {...homeObjThree}/>
         <ContactSection {...homeObjFour}/>
        </>
    )
}

export default Home
