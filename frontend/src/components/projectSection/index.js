import React from 'react'
import '../Style.css'

const projectSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='projects'>
                 <section class='works section' >
                    <span class='section-subtitle'>My Portfolio</span>
                    <h2 class="section-title">Recent Works</h2>
                    <div class="works__container bd-grid">
                        {/*LafLefni*/}
                        <div class="works__img">
                            <img src="https://i.imgur.com/T6WHKg9.png"/>
                            <div class="works__data">
                                <a href='https://github.com/rzanabusamra22/GreenField5' class="works__link"><span class="iconify" data-icon="bi:link-45deg" data-inline="false"></span></a>
                                <span class='works__title'>LafLefNi</span>
                            </div>
                        </div> 
                        {/* Food Dose */}
                        <div class="works__img">
                            <img src="https://i.imgur.com/Eqbuf6b.png"/>
                            <div class="works__data">
                                <a href='https://github.com/rzanabusamra22/legacy' class="works__link"><span class="iconify" data-icon="bi:link-45deg" data-inline="false"></span></a>
                                <span class='works__title'>Food Dose</span>
                            </div>
                        </div>
                        {/* Kiddo */}
                        {/* <div class="works__img">
                            <img src=""/>
                            <div class="works__data1">
                                <a href='https://github.com/rzanabusamra22/Kiddo' class="works__link"><span class="iconify" data-icon="bi:link-45deg" data-inline="false"></span></a>
                                <span class='works__title'>Kiddo</span>
                            </div>
                        </div> */}
                    </div>
                 </section>
            </main>
        </>
    )
}

export default projectSection
