import React from 'react'
import '../Style.css'

const skillsSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='skills'>
                 <section class='skills section' >
                     <span class="section-subtitle">Why choose Me</span>
                     <h2 class="section-title">My Expertise Area</h2>
                     <div class="skills__container bd-grid">
                         <div class="skills__content">
                             <h3 class="skills__subtitle">Skill 1</h3>
                             <div class="skills__data">
                                 <span class="skills_name">type</span>
                                 <span class="skills_number">xx%</span>
                                 <span class="skills_bar skills__html"></span>
                             </div>
                         </div>
                         <div class="skills__content">
                             <h3 class="skills__subtitle">Skill 2</h3>
                             <div class="skills__data">
                                 <span class="skills_name">type</span>
                                 <span class="skills_number">xx%</span>
                                 <span class="skills_bar skills__js"></span>
                             </div>
                         </div>
                         <div class="skills__content">
                             <h3 class="skills__subtitle">Skill 3</h3>
                             <div class="skills__data">
                                 <span class="skills_name">type</span>
                                 <span class="skills_number">xx%</span>
                                 <span class="skills_bar skills__react"></span>
                             </div>
                         </div>
                         <div class="skills__content">
                             <h3 class="skills__subtitle">Skill 4</h3>
                             <div class="skills__data">
                                 <span class="skills_name">type</span>
                                 <span class="skills_number">xx%</span>
                                 <span class="skills_bar skills__angular"></span>
                             </div>
                         </div>
                     </div>
                 </section>
            </main>
        </>
    )
}

export default skillsSection
