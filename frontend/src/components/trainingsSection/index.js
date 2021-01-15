import React from 'react'
import '../Style.css'

const traningsSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='trainings'>
                 <section class='trainings' >
                     <span class="section-subtitle">Qualifications</span>
                     <h2 class="section-title">My Education</h2>

                     <div class="education__container bd-grid">
                         {/* RBK */}
                         <div class="education__contant">
                             <div>
                                 <h3 class="education__year">2020 - 6 months </h3>
                                 <span class="education__university">RBK: ReBootKamp</span>
                             </div>
                             <div class="education__time">
                                 <span class="education__rounder"></span>
                                 <span class="education__line"></span>
                             </div>
                             <div>
                                 <h3 class="education__race">Junior Trainee-Student</h3>
                                 <span class="education__spec">Nablus - Palestine Territory - Online(Remotely) </span>
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
                         {/* School */}
                         <div class="education__contant">
                             <div>
                                 <h3 class="education__year">2010-2013</h3>
                                 <span class="education__university"></span>
                             </div>
                             <div class="education__time">
                                 <span class="education__rounder"></span>
                                 <span class="education__line"></span>
                             </div>
                             <div>
                                 <h3 class="education__race">High School - Science Section</h3>
                                 <span class="education__spec">Dubai - UAE</span>
                             </div>
                         </div>
                     </div>
                 </section>
            </main>
        </>
    )
}

export default traningsSection
