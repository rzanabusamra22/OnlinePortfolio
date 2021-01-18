import React from 'react'
import '../Style.css'

const projectSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='projects'>
                 <section class='works section' >
                    {/* <span class='section-subtitle'>My Portfolio</span> */}
                    <h2 class="section-title">Recent Work</h2>
                    <div class="works__container bd-grid">
                        {/*LafLefni*/}
                        <div class="works__img">
                            <img src="https://i.imgur.com/T6WHKg9.png"/>
                            <div class="works__data">
                                <div>
                                <a href='https://github.com/rzanabusamra22/GreenField5' class="works__link"><span class="iconify" data-icon="ant-design:github-outlined" data-inline="false"></span></a>
                                <a href='' class="works__link"><span class="iconify" data-icon="bx:bxl-youtube" data-inline="false"></span></a>
                                <a href='https://laflefne.herokuapp.com/' class="works__link"><span class="iconify" data-icon="bi:globe" data-inline="false"></span></a>
                                </div>
                                <span class='works__title'>LafLefNi</span>
                            </div>
                        </div> 
                        {/* Food Dose */}
                        <div class="works__img">
                            <img src="https://i.imgur.com/Eqbuf6b.png"/>
                            <div class="works__data">
                                <div>
                                  <a href='https://github.com/rzanabusamra22/legacy' class="works__link"><span class="iconify" data-icon="ant-design:github-outlined" data-inline="false"></span></a>
                                  <a href='https://www.youtube.com/watch?v=7sA0WyEdNOY&feature=youtu.be' class="works__link"><span class="iconify" data-icon="bx:bxl-youtube" data-inline="false"></span></a>
                                  <a href='https://fooddosezero.herokuapp.com/' class="works__link"><span class="iconify" data-icon="bi:globe" data-inline="false"></span></a>
                                </div>
                                <span class='works__title'>Food Dose</span>
                            </div>
                        </div>
                        {/* Kiddo */}
                        <div class="works__img">
                            <img src="https://i.imgur.com/zY6LePt.png"/>
                            <div class="works__data">
                                <div>
                                  <a href='https://github.com/rzanabusamra22/Kiddo' class="works__link"><span class="iconify" data-icon="ant-design:github-outlined" data-inline="false"></span></a>
                                  <a href='https://youtu.be/wdzQ6ISNqeI' class="works__link"><span class="iconify" data-icon="bx:bxl-youtube" data-inline="false"></span></a>
                                  <a href='https://kiddoi.web.app/' class="works__link"><span class="iconify" data-icon="bi:globe" data-inline="false"></span></a>
                                </div>
                                <span class='works__title'>Kiddo</span>
                            </div>
                        </div>
                    </div>
                 </section>
            </main>
        </>
    )
}

export default projectSection
