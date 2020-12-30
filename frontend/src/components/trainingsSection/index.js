import React from 'react'
import '../Style.css'

const traningsSection = () => {
    return (
        <>
            <main class='l-main' id='trainings'>
                 <section class='trainings' >
                     <span class="section-subtitle">Qualifications</span>
                     <h2 class="section-title">My Education</h2>

                     <div class="education__container bd-grid">
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
                         {/*  */}
                         <div class="education__contant">
                             <div>
                                 <h3 class="education__year">2010-2013</h3>
                                 <span class="education__university">High School</span>
                             </div>
                             <div class="education__time">
                                 <span class="education__rounder"></span>
                                 <span class="education__line"></span>
                             </div>
                             <div>
                                 <h3 class="education__race">Science Section</h3>
                                 <span class="education__spec">UAE</span>
                             </div>
                         </div>
                     </div>
                 </section>
                 <section>
                     
                 </section>
            </main>
        </>
    )
}

export default traningsSection
