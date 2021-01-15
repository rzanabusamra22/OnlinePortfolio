import React from 'react'
import '../Style.css'

const footerSection = () => {
    return (
        <>
            <footer class="footer section">
                <div class="footer__container bd-grid">
                 <h1 class="footer__title">Razan Abusamra</h1>
                 <p class="footer__description">You Can Find Me On</p>
                    <div class="footer__social">
                      <a href="https://www.facebook.com/razank.abusamra/" class="footer__link"><span class="iconify" data-icon="bx:bxl-facebook-circle" data-inline="false"></span></a>
                      <a href="https://www.instagram.com/rzan.abusamra/" class="footer__link"><span class="iconify" data-icon="entypo-social:instagram-with-circle" data-inline="false"></span></a>
                      <a href="https://twitter.com/RazankAbuSamra" class="footer__link"><span class="iconify" data-icon="entypo-social:twitter-with-circle" data-inline="false"></span></a>
                      <a href="https://api.whatsapp.com/send/?phone=972597476792&text&app_absent=0" class="footer__link"><span class="iconify" data-icon="dashicons:whatsapp" data-inline="false"></span></a>
                    </div>
                </div>
                
            </footer>
        </>
    )
}

export default footerSection
