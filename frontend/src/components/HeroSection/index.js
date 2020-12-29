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
                                  <img src='' alt=''>
                                  </img>
                              </div>
                              <h1 class='home__title'>Razan Abusamra</h1>
                              <span class='home__profession'>Fulltime Dreamer</span>
                              <div class='home__social'>
                                  <a href='https://www.linkedin.com/in/razan-abu-samra/' class='home__social-link'><span class="iconify" data-icon="bx-bxl-linkedin" data-inline="false"></span></a>
                                  <a href='https://github.com/rzanabusamra22' class='home__social-link'><span class="iconify" data-icon="teenyicons:github-outline" data-inline="false"></span></a>
                              </div>
                               <a href='#' download='' class='button'>Download Resume</a>
                          </div>
                      </div>
                 </section>
            </main>
    )
}

export default HeroSection


{/* <HeroBg>
</HeroBg> */}
{/* <HeroContent>
    {/* Your Picture */}
    //  <HeroH1>
    //   Razan Abusamra 
    //  </HeroH1>
    //  <HeroP>
    //   Fulltime Dreamer 
    //  </HeroP> */}
    {/* We need buttons for linkedin - github  */}

    {/* Download my resume button  */}
    {/* <HeroBtnWrapper>
       
    </HeroBtnWrapper> */}
// </HeroContent>