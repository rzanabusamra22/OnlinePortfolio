import React,{useState} from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import Footer from '../components/FooterSection/index';

import HeroSection from '../components/HeroSection/index'
import AboutSection from '../components/aboutSection/index'
import SkillsSection from '../components/skillsSection/index'
import EducationSection from '../components/educationSection/index'
import ProjectSection from '../components/projectSection/index'
import AchievementSection from '../components/achievementSection/index'

import {homeObj,homeObjOne,homeObjTwo,homeObjThree,homeObjFour,homeObjFive} from '../components/Scroll'

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
         <ProjectSection  {...homeObjThree}/>
         <EducationSection {...homeObjFour}/>
         <AchievementSection {...homeObjFive}/>
         <Footer/>
        </>
    )
}

export default Home
