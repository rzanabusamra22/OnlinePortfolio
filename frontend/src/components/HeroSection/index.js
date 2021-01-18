import React from 'react'
import '../Style.css'

const HeroSection = () => {
    return (  
            <main class='l-main' id='home'>
                 <section class='home' >
                      <div className='home__container bd-grid'>
                          <div class='home__data'>
                              <div class='home__img'>
                                  {/* picture */}
                                  <img class='home__img'src='https://i.imgur.com/7fdzTPp.jpg' alt=''>
                                  </img>
                              </div>
                              <h1 class='home__title'>Razan Abusamra</h1>
                              <br></br>
                              <span class='section-subtitle'>Front-end Developer</span>
                              <span class='home__profession'>Fulltime Dreamer & Achiever</span>
                              <br></br>
                              <div class='home__social'>
                                  <a href='https://www.linkedin.com/in/razan-abu-samra/' class='home__social-link'><span class="iconify" data-icon="bx-bxl-linkedin" data-inline="false"></span></a>
                                  <a href='https://github.com/rzanabusamra22' class='home__social-link'><span class="iconify" data-icon="teenyicons:github-outline" data-inline="false"></span></a>
                              </div>
                               <a href='https://drive.google.com/file/d/1TrpOSXdfYDM-GPWGE4w4BkWS3fGIxanW/view?usp=sharing' download='' class='button'>Resume</a>
                          </div>
                      </div>
                 </section>
            </main>
    )
}

export default HeroSection
