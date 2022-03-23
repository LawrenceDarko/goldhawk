// import { useState, useEffect } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import PageCarousel from '../components/PageCarousel';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet';
import MediaComponent from '../components/MediaComponent';
import MediaComponentRight from '../components/MediaComponentRight';

function Home() {

  const BannerOneTitle = "This is the Banner One Title";
  const BannerOneBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismo";
  const BannerTwoTitle = "This is the Banner Two Title";
  const BannerTwoBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod";

  const colorOne = "#00507b"
  const colorTwo = "#006c7b"

  const imgLinkOne = "index1.jpeg"
  const imgLinkTwo = "index2.jpg"

  const bannerheight = "500px";

  return (
    <>
      <Helmet>
        <title>Home | Goldhawkgeo-consult</title>
        <meta name="description" content="Homepage of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <PageCarousel />
      <BodyWrapper>
            <WhoWeAre>
                <ImageHolder>
                  <img src="/about.jpg" alt='Carousel' />
                </ImageHolder>
                <ImageTextContainer>
                  <h1>BEST GEO-AGENCY IN GHANA</h1>
                  <h4>CLITA ELITR ET AMET ET IPSUM SEA. IPSUM STET KASD EA ET NO EST DUO DIAM. LOREM DOLORES EOS UT NONUMY IPSUM SIT CLITA LOREM NO AMET DOLOR DOLORE, STET SIT DOLOR JUSTO.</h4>
                  <p>Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</p>
                </ImageTextContainer>
                
            </WhoWeAre>
          <MediaComponent bannerheight={bannerheight} imgLinkOne={imgLinkOne} color={colorOne} BannerOneTitle={BannerOneTitle} BannerOneBody={BannerOneBody} />
          <MediaComponentRight bannerheight={bannerheight} imgLinkTwo={imgLinkTwo} color={colorTwo} BannerTwoTitle={BannerTwoTitle} BannerTwoBody={BannerTwoBody} />
            <OurServices />
            <UpcomingPrograms>
                {/* This is the text in the notice board */}
                <NoticeText>
                  <h2>This is who we are</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, illo earum totam facere obcaecati alias eos ut ex recusandae deleniti labore laudantium quibusdam commodi error excepturi dolore libero itaque possimus?</p>
                </NoticeText>

                {/* This is the notice board */}
                <NoticeBoard >
                  <p>TSX-V: NCAU <span>$0.52</span>  |  OTCQX: NCAUF <span>US$0.40</span>  |  GOLD: <span>US$1940</span></p>
                </NoticeBoard>

                    {/* <p>This browser does not support the video tag.</p>
                    <p>This browser does not support the video tag.</p> */}
                  <video loop autoPlay muted>
                    <source src="/videos/vid12.mp4" type="video/mp4" />
                  </video>
            </UpcomingPrograms>
            
            <Footer />
      </BodyWrapper>
    </>
  )
}

export default Home;

const BodyWrapper = styled.div`
    height: 100%;
    /* padding-left: 10vh;
    padding-right: 10vh; */
    /* background-color: #333; */
`

const WhoWeAre = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    /* height: 100vh; */
    /* overflow: hidden; */
    background-color: #fff;
    padding: 20vh;
    /* border: 1px solid white; */

    /* background-image: url("/caro.jpg"); */
    background-color: #fff;
    /* background-image: linear-gradient(rgba(255, 183, 51, 0.8), rgba(255, 183, 51, 0.8)), url("/caro.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    line-height: 1.5;
    /* background-color: #333; */

    > h2 {
        color: white;
        font-size: 30px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
/*        
        margin-block-start: 1.3em;
        margin-block-end: 1.3em; */
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
        padding: 5vh;
        flex-direction: column;
      > h2 {
        font-size: 20px;
      }
    }

    @media only screen and (min-device-width : 768px) and (max-device-width : 820px){
        padding: 5vh;
        flex-direction: column;
      > h2 {
        font-size: 20px;
      }
    }
`

const UpcomingPrograms = styled.div`
    align-items: center;
    height: 90vh;
    /* width: 100%; */
    overflow: hidden;
    background-color: #333;
    display: flex;
    justify-content: space-around;
    /* padding-left: 200px;
    padding-right: 200px; */
    overflow: hidden;
    background-color: rgba(0,0,0,0.8);
    z-index: 1;
    /* border: 1px solid white; */
    

    > video { 
      position: absolute;
      object-fit: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      left: 0;
      width: 100%;
      height: 90vh;
      /* background-color: rgba(0,0,0,0.5); */
      z-index: -1;
    }

    > p {
      color: white;
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
        flex-direction: column;
        align-items: left;
        align-content: left;
        justify-content: space-around;
        /* padding: 50px; */
        
    }
    
`
const NoticeBoard = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center;
    justify-content: center; */
    height: 70%;
    width: 400px;
    /* position: relative; */
    border: 1px solid #31302F;
    background-color: rgba(96, 34, 34, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(30px);
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 60px;
    border-radius: 10px;
    /* z-index: 5; */

    > p {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;
      letter-spacing: 1.5px;
      padding-top: 30px;
    }

    > p span {
      color: #FFCB05;
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
        width: 80%;
        height: 60%;
    }
`
const NoticeText = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* border: 1px solid #31302F; */
    width: 500px;
    padding: 18vh;
    /* height: 100%; */
    /* width: 100%; */
    /* background-color: rgba(0,0,0,0.5); */

    > h2 {
        /* color: white; */
        font-size: 30px;
        font-weight: 600;
        color: #FFB733;
        font-family: 'Open Sans', sans-serif;

    }

    > p {
        color: white;
        font-size: 25px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
        width: 80%;
        > h2 {
            font-size: 20px;

        }

        > p {
            font-size: 18px;
        }
    }

`
const ImageHolder = styled.div`
  padding-right: 50px;
  flex: 1;
  > img {
    width: 100%;
     height: 100%;
  }

  @media only screen (max-device-width : 932px){
    > img {
      width: 400px;
      height: 400px;
    }

  @media only screen (max-device-width : 768px){
    > img {
      width: 200px;
      height: 100px;
    }
  }

  }
`
const ImageTextContainer = styled.div`
  justify-content: space-between;
  flex: 1;
  /* border: 1px solid black; */
  flex-direction: column;
  
  > h1 {
      /* color: white; */
      line-height: 2.9rem;
      margin-bottom: 0.3rem;
      text-transform: uppercase;
      /* font-size: calc(1.475rem + 2.7vw); */
      color: #343a40;
      font-size: 2.5rem;
      font-weight: 900;
      font-family: "Oswald", sans-serif;
      display: block;
  }

  > h4 {
      font-size: 1.2rem;
      color: #FFAA17;
      line-height: 1.5rem;
  }

  > p {
      color: #343a40;
      font-size: 100%;
  }
`

