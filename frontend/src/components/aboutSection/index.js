import React from 'react'
import {InfoContainer,InfoContainer1} from './aboutElements'
import '../Style.css'

const aboutSection = () => {
    return (
        <>
            <main class='l-main' id='about'>
                 <section class='about section' >
                         <span class='section-subtitle'>My intro</span>
                         <h2 class="section-title">About Me</h2>
                         <div class="about__container bd-grid">
                             <div class="about__data">
                                 <p class="about__description">
                                 The most effective people are those who understand their strengths. 
                                 Here are my top 5: Futuristic – Empathy – Discipline – Significance – Responsibility.
                                 (As a result of-The Clifton Strengths Assessment-Gallup)
                                 </p>
                             </div>
                         </div>
                 </section>
            </main>
        </>
    )
}

export default aboutSection
