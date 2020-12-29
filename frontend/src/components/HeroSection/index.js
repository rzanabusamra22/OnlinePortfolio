import React from 'react'
import {HeroContainer,HeroBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,Button} from './HeroElements'
import {ButtonX} from '../ButtonElement'
const HeroSection = ({id}) => {
    return (
        <HeroContainer id={id}>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                {/* Your Picture */}
                 <HeroH1>
                  Razan Abusamra 
                 </HeroH1>
                 <HeroP>
                  Fulltime Dreamer 
                 </HeroP>
                {/* We need buttons for linkedin - github  */}

                {/* Download my resume button  */}
                <HeroBtnWrapper>
                   <ButtonX primary={true} dark={true}>
                       Download Resume 
                   </ButtonX>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection


                