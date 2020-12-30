import React from 'react'
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
                                    about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment about statment 
                                 </p>
                             </div>
                             <div class="about__information">
                                 <h3 class="about__information-title">Information</h3>
                                 <div class="about__information-data">
                                     <i class="about__information-icon"><span class="iconify" data-icon="ant-design:user-outlined" data-inline="false"></span></i> 
                                     <span>Razan Abusamra</span> 
                                 </div>

                                 <div class="about__information-data">
                                     <i class="about__information-icon"><span class="iconify" data-icon="bx:bx-phone" data-inline="false"></span></i> 
                                     <span>+970-597476792</span> 
                                 </div>

                                 <div class="about__information-data">
                                     <i class="about__information-icon"><span class="iconify" data-icon="cil:envelope-letter" data-inline="false"></span></i> 
                                     <span>RzanAbusamra@gmail.com</span> 
                                 </div>
                                 <div class="about__information">
                                 <h3 class="about__information-title">Experience</h3>
                                    <div class="about__information-data">
                                        <i class="about__information-icon"><span class="iconify" data-icon="grommet-icons:location-pin" data-inline="false"></span></i> 
                                        <div>
                                            <span class="about__information-subtitle">Year:  </span>
                                            <span class="about__information-subtitle-small">Experience Desription1</span>
                                        </div>
                                    </div>
                                    <div class="about__information-data">
                                        <i class="about__information-icon"><span class="iconify" data-icon="grommet-icons:location-pin" data-inline="false"></span></i> 
                                        <div>
                                            <span class="about__information-subtitle">Year:  </span>

                                            <span class="about__information-subtitle-small">Experience Desription2</span>
                                        </div>
                                    </div>
                                    <div class="about__information-data">
                                        <i class="about__information-icon"><span class="iconify" data-icon="grommet-icons:location-pin" data-inline="false"></span></i> 
                                        <div>
                                            <span class="about__information-subtitle">Year:  </span>
                                            <span class="about__information-subtitle-small">Experience Desription3</span>
                                        </div>
                                    </div>
                                  
                                 </div>
                             </div>
                         </div>
                 </section>
            </main>
        </>
    )
}

export default aboutSection
