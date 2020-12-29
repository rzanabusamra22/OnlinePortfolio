import React from 'react'
import {InfoContainer,InfoContainer1} from './aboutElements'
import '../Style.css'

const aboutSection = ({id}) => {
    return (
        <>
        <InfoContainer id={id}>
            <h1>Green</h1>
           {/* <InfoWrapper>
               <InfoRow>
                   <Column1>
                   <TextWrapper>
                       <TopLine>Top Line</TopLine>
                       <Heading>Headding</Heading>
                       <Subtitle>Sibtitle</Subtitle>           
                   </TextWrapper>
                   </Column1>
               </InfoRow>
           </InfoWrapper> */}
        </InfoContainer>
        </>
    )
}

export default aboutSection
