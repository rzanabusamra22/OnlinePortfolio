import React from 'react'
import {InfoContainer} from './contactElements'
import './contact.css'
const contactSection = ({id}) => {
    return (
        <>
        <InfoContainer id={id}>
            <h1>hello</h1>
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

export default contactSection
