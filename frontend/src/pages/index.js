import React,{useState} from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index'

import HeroSection from '../components/HeroSection/index'
import AboutSection from '../components/aboutSection/index'
import SkillsSection from '../components/skillsSection/index'
import TrainingsSection from '../components/trainingsSection/index'
import ContactSection from '../components/contactSection/index'

import {homeObj} from '../components/HeroSection/HeroElements'
import {homeObjOne} from '../components/aboutSection/aboutElements'
import {homeObjTwo} from '../components/skillsSection/skillsElements'
import {homeObjThree} from '../components/trainingsSection/trainingsElements.js'
import {homeObjFour} from '../components/contactSection/contactElements'


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
