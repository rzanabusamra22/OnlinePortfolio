import React from 'react'
import '../Style.css'

const educationSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='education'>
                 <section class='education' >
                     {/* <span class="section-subtitle">Qualifications</span> */}
                     <img class="about__img" src="https://i.imgur.com/HhS6qMY.png"></img>
                     <h2 class="section-title">My Education</h2>

                     <div class="education__container bd-grid">
                         {/* RBK */}
                         <div class="education__contant">
                             <div>
                                 <h3 class="education__year">2020 AUG - 2021 JAN</h3>
                                 <span class="education__university">RBK: ReBootKamp - PLUS West Bank Cohort 1</span>
                             </div>
                             <div class="education__time">
                                 <span class="education__rounder"></span>
                                 <span class="education__line"></span>
                             </div>
                             <div>
                                 <h3 class="education__race">Junior Full Stack Developer - Trainee</h3>
                                 <span class="education__spec">Online(Remotely)</span>
                             </div>
                         </div>
                         {/* University */}
                         <div class="education__contant">
                             <div>
                                 <h3 class="education__year">2012-2017</h3>
                                 <span class="education__university">An Najah National University</span>
                             </div>
                             <div class="education__time">
                                 <span class="education__rounder"></span>
                                 <span class="education__line"></span>
                             </div>
                             <div>
                                 <h3 class="education__race">Mechatronincs Engineering</h3>
                                 <span class="education__spec">Nablus - Palestine Territory</span>
                             </div>
                         </div>
                     </div>
                 </section>
            </main>
        </>
    )
}

export default educationSection
