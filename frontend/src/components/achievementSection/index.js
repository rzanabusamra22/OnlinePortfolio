import React from 'react'
import '../Style.css'

const achievementSection = ({id}) => {
    return (
        <>
            <main class='l-main' id='achievement'>
            <section class='works section' >
                    {/* <span class='section-subtitle'>My Portfolio</span> */}
                    <h2 class="section-title">Achievements</h2>
                    <div class="works__container bd-grid">
                        
                        <div class="works__img">
                            <img src="https://i.imgur.com/T6WHKg9.png"/>
                            <div class="works__data">
                                <span class='works__title'>LafLefNi</span>
                            </div>
                        </div> 
                        
                        <div class="works__img">
                            <img src="https://i.imgur.com/Eqbuf6b.png"/>
                            <div class="works__data">
                                <span class='works__title'>Food Dose</span>
                            </div>
                        </div>
                       
                        <div class="works__img">
                            <img src="https://i.imgur.com/zY6LePt.png"/>
                            <div class="works__data">
                                <span class='works__title'>Kiddo</span>
                            </div>
                        </div>
                    </div>
                 </section>
            </main>
        </>
    )
}

export default achievementSection
