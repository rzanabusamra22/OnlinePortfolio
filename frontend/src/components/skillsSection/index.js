import React from 'react'
import '../Style.css'

const skillsSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='skills'>
                 <section class='skills section' >
                     {/* <span class="section-subtitle">Why choose Me</span> */}
                     <h2 class="section-title">My Expertise Area</h2>
                     <div class="skills__container bd-grid">
                         <div class="skills__content">
                             <h3 class="skills__subtitle">Frontend</h3>
                             <div class="skills__data">
                                 <span class="skills_name">HTML/CSS</span>
                                 <span class="skills_number">65%</span>
                                 <span class="skills_bar skills__html"></span>
                             </div>
                         </div>
                         <div class="skills__content">
                             <div class="skills__data">
                                 <span class="skills_name">jAVASCRIPT</span>
                                 <span class="skills_number">75%</span>
                                 <span class="skills_bar skills__js"></span>
                             </div>
                         </div>
                         <div class="skills__content">
                             <div class="skills__data">
                                 <span class="skills_name">REACT</span>
                                 <span class="skills_number">70%</span>
                                 <span class="skills_bar skills__react"></span>
                             </div>
                         </div>
                         <div class="skills__content">
                             <div class="skills__data">
                                 <span class="skills_name">RESPONSIVE DESIGN</span>
                                 <span class="skills_number">60%</span>
                                 <span class="skills_bar skills__angular"></span>
                             </div>
                         </div>
                     </div>
                     <br></br>
                     {/* BACKEND */}
                     <div class="skills__container bd-grid">
                         <div class="skills__content">
                             <h3 class="skills__subtitle">Backend</h3>
                             <div class="skills__data">
                                 <span class="skills_name">NODE.JS</span>
                                 <span class="skills_number">45%</span>
                                 <span class="skills_bar skills__node"></span>
                             </div>
                         </div>
                     </div>
                 </section>
            </main>
        </>
    )
}

export default skillsSection
