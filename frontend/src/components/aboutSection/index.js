import React from 'react'
import '../Style.css'

const aboutSection = () => {
    return (
        <>
            <main class='l-main' id='about'>
                 <section class='about section' >
                     <br></br>
                     <br></br>
                         {/* <span class='section-subtitle'>My intro</span> */}
                         <h2 class="section-title">About Me</h2>
                         <div class="about__container bd-grid">
                             <div class="about__data">
                                 <p class="about__description">
                                 Self-motivated developer with knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development.
                                 Hard-working individual with strong ability to communicate and work in a team effectively. Writes code as tidy as my personal planner.Hoping to share great skills, expertise, and experiences. 
                                 </p>
                                 <img class="about__img" src="https://i.imgur.com/mdH4KkS.png"></img>
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
                                 {/*  Experience */}
                                 {/* <div class="about__information">
                                 <h3 class="about__information-title">Experience</h3>
                                    <div class="about__information-data">
                                        <i class="about__information-icon"><span class="iconify" data-icon="grommet-icons:location-pin" data-inline="false"></span></i> 
                                        <div>
                                            <span class="about__information-subtitle">6 months</span>
                                            <span class="about__information-subtitle-small">Self Learning projects</span>
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
                                 </div> */}
                             </div>
                         </div>
                 </section>
            </main>
        </>
    )
}

export default aboutSection
