import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet'

const Services = () => {

  const Title = "Services"

  return (
    <>
      <Helmet>
        <title>Services | Goldhawkgeo-consult</title>
        <meta name="description" content="Partnerships Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
         <SponsorshipsContainer>
            <SponsorshipsTextContainer>
              <h1>Professional Services</h1>
            </SponsorshipsTextContainer>
            <SponsorshipsLogosContainer>
                <RowElementOne>
                  <h3>Personalized Services</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae vel ducimus accusamus praesentium officiis quasi dolorem ipsa autem voluptate tempora voluptatem quo recusandae rem illo </p>
                </RowElementOne>
                <RowElementTwo>
                  <h3>Expertise</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quasi, hic distinctio vero ea rem possimus harum ipsa reiciendis, illum unde nobis blanditiis odio earum obcaecati voluptatem temporibus necessitatibus adipisci.</p>
                </RowElementTwo>
                <RowElementThree>
                  <h3>Impact</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In repudiandae, eius ducimus debitis necessitatibus sint animi provident, id ipsum repellat similique perspiciatis deleniti harum sit aliquid quisquam hic reiciendis cumque.</p>
                </RowElementThree>
            </SponsorshipsLogosContainer>
         </SponsorshipsContainer>
         <PresentAndPastSponsorshipsContainer>
            <BigCard>
              <ImageContainer>
                <img src="/caros.jpg" alt="Services"/>
              </ImageContainer>
              <ImageTextContainer>
                <h3>Professional Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae vel ducimus accusamus praesentium officiis quasi dolorem ipsa autem voluptate tempora voluptatem quo recusandae rem illo </p>
              </ImageTextContainer>
            </BigCard>
         </PresentAndPastSponsorshipsContainer>
         <SmallCard>
           <h3>"The PS team was great! They navigate through tough situations with expertise and support. It is my opinion that they are largest contributor to why I would recommend the program."</h3>
           <p>Mr. Edmund Akando</p>
           <p>Director, GoldHawk Geoconsult</p>
         </SmallCard>
         <WhiteSpace>
           <InsightContainer>
              <h3>Insight</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae vel ducimus accusamus praesentium officiis quasi dolorem ipsa autem voluptate tempora voluptatem quo recusandae rem illo </p>
           </InsightContainer>
           <CommentContainer>
              <CommentImage>
                <img src="/co.jpg" alt="Services"/>
              </CommentImage>
              <CommentText>
                <h3>Professional Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae vel ducimus accusamus praesentium officiis quasi dolorem ipsa autem voluptate tempora voluptatem quo recusandae rem illo </p>
              </CommentText>
           </CommentContainer>
         </WhiteSpace>
         <Footer />
      </PageWrapper>
    </>
  )
};

export default Services;

const PageWrapper = styled.div`
    width: 100%;
    /* height: 100vh; */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
`
const SponsorshipsContainer = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px solid black; */
`
const SponsorshipsTextContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-left: 50px;
    padding-right: 50px;
    /* padding-bottom: 50px; */

    > h1 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
    }

    @media (max-width: 768px) {
        > h1 {
            font-size: 25px;
            white-space: nowrap;
        }
    }
`
const SponsorshipsLogosContainer = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    /* padding-left: 50px; */
    /* padding-right: 60px; */
    /* padding-left: 60px; */
    /* justify-content: space-evenly; */
    /* padding-bottom: 100px; */
    margin: 30px 20px 50px;
    /* align-items: center; */
    /* border: 1px solid black; */

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 30px 20px 50px;

    }

`
const PresentAndPastSponsorshipsContainer = styled.div`
    width: auto;
    height: 85vh;
    background-color: #52b1ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    /* padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px; */
    
`
const RowElementOne = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    
    /* border: 1px solid black; */
    
    /* border: 1px solid black; */

    > h3 {
        color: #c48d3a;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
        white-space: nowrap;

    }

    > p {
        color: #333;
        /* font-size: 20px; */
        /* font-weight: 100; */
        /* font-family: 'Roboto', sans-serif; */
        /* margin-block-start: 0em; */
        text-align: center;
        margin-block-start: 0em;
        padding-block-start: 0em;
    }
    /* border: 1px solid black; */

`
const RowElementTwo = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    /* border: 1px solid black; */

    > h3 {
        color: #c48d3a;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;

    }

    > p {
        color: #333;
        /* font-size: 20px; */
        /* font-weight: 100; */
        /* font-family: 'Roboto', sans-serif; */
        /* margin-block-start: 0em; */
        text-align: center;
        margin-block-start: 0em;
        padding-block-start: 0em;
    }
`
const RowElementThree = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    /* border: 1px solid black; */

    > h3 {
        color: #c48d3a;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;

    }

    > p {
        color: #333;
        /* font-size: 20px; */
        /* font-weight: 100; */
        /* font-family: 'Roboto', sans-serif; */
        /* margin-block-start: 0em; */
        text-align: center;
        margin-block-start: 0em;
        padding-block-start: 0em;
    }
`
const BigCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 80%;
    background-color: #fff;
    /* add shadows */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 768px) {
       flex-direction: column;
        /* width: 90%; */
    }
`
const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid black; */

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin-top: 0px; */

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
       }
    }
`

const ImageTextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding-left: 15px;
    padding-right: 15px;

    > h3 {
        color: #c48d3a;
        font-size: 20px;
        font-weight: 600;
        /* font-family: 'Roboto', sans-serif; */
        white-space: nowrap;
        margin-block-end: 0em;
        text-align: left;
    }

    > p {
        color: #333;
        font-size: 14px;
        line-height: 1.5;
        /* font-weight: 100; */
        /* font-family: 'Roboto', sans-serif; */
        /* margin-block-start: 0em; */
        text-align: left;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;

        > p {
            text-align: center;
        }
    }

`
const SmallCard = styled.div`
    width: auto;
    height: 65vh;
    background-color: #00bfa5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    /* border: 1px solid black; */

    > h3 {
        color: #fff;
        font-size: 35px;
        font-weight: 300;
        /* font-family: 'Roboto', sans-serif; */
        /* white-space: nowrap; */
        text-align: center;
    }

    > p {
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        padding-block-end: 0em;
        margin-block-end: 0em;
        line-height: 0.5;
        letter-spacing: 0.5px;


    }

    @media (max-width: 768px) {
        width: auto;

        > h3 {
            font-size: 25px;
        }

        > p {
            font-size: 10px;
        }
    }
`
const WhiteSpace = styled.div`
    width: auto;
    height: auto;
    background-color: #fff;
`

const InsightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    height: 45vh;
    padding-left: 50px;
    padding-right: 50px;

    > h3 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 200;
        margin-block-end: 0em;

    }

    > p {
        color: #333;
        font-size: 18px;
        font-weight: 400;
        padding-block-end: 0em;
        /* margin-block-end: 0em; */
    }
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
    width: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
    }

`

const CommentImage = styled.div`
    width: 50%;
    /* border: 1px solid black; */

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const CommentText = styled.div`
    width: 50%;
    padding-left: 15px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;


    > h3 {
        font-size: 30px;
        color: #c48d3a;
        font-weight: 200;
        margin-block-end: 0em;
        /* font-family: 'Roboto', sans-serif; */
        white-space: nowrap;
    }

    > p {
        color: #333;
        font-size: 18px;
        font-weight: 400;
        padding-block-end: 0em;
        margin-block-end: 0em;
    }

    @media (max-width: 768px) {
        width: auto;
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 50px;

        > h3 {
            font-size: 30px;
            text-align: center;
        }

        > p {
            text-align: center;
        }
    }
`
