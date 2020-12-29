import React from 'react'
import {InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle} from './infoElements'

const infoSection = () => {
    return (
        <>
        <InfoContainer id={id}>
           <InfoWrapper>
               <InfoRow>
                   <Column1>
                   <TextWrapper>
                       <TopLine>Top Line</TopLine>
                       <Heading>Headding</Heading>
                       <Subtitle>Sibtitle</Subtitle>           
                   </TextWrapper>
                   </Column1>
               </InfoRow>
           </InfoWrapper>
        </InfoContainer>
         
        </>
    )
}

export default infoSection
