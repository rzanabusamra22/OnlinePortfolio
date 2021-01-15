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
                              <span class='home__profession'>Fulltime Dreamer & Achiever</span>
                              <span class='home__profession1'>Front-end Developer</span>
                              <div class='home__social'>
                                  <a href='https://www.linkedin.com/in/razan-abu-samra/' class='home__social-link'><span class="iconify" data-icon="bx-bxl-linkedin" data-inline="false"></span></a>
                                  <a href='https://github.com/rzanabusamra22' class='home__social-link'><span class="iconify" data-icon="teenyicons:github-outline" data-inline="false"></span></a>
                              </div>
                               <a href='https://docs.google.com/document/d/1rPufxWROWqbSfvy6m9dZCLc_iZuWTDxxzHrM7N46cpo/edit?usp=sharing' download='' class='button'>Resume</a>
                          </div>
                      </div>
                 </section>
            </main>
    )
}

export default HeroSection
