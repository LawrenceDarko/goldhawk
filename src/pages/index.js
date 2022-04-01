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

  const BannerOneTitle = "Alluvial and Hard Rock Gold Prospecting/Exploration";
  const BannerOneBody = "GoldHawk offers avant-garde alluvial and hard rock prospecting and exploration services to help discover and unlock the value of your next deposit.";
  const BannerTwoTitle = "Large/Small Scale Mining Advisory Services";
  const BannerTwoBody = "We are the go-to consultants who offer you nuggets of winning counsel in Ghana's mining industry as well as the broader global mining space.";
  const BannerThreeTitle = "Geological Mapping and Geographic Information System (GIS) Services";
  const BannerThreeBody = "We are at the vanguard in mapping out geological structures, and providing cutting-edge GIS services that help you accurately locate your orebody in three dimensional space.";
  const BannerFourTitle = "Mining Concession Sale/Purchase Facilitation";
  const BannerFourBody = "Do you want sell or buy a mining concession?  Don't hesitate to touch base with us as we hold the key to obtaining substantial value in mining concession sale and acquisition.";
  const BannerFiveTitle = "Large Quantity Gold Bullion Purchase";
  const BannerFiveBody = "Do you want to buy gold in large quantity? Resort to our professional guideposts in making the right choices.";
  const BannerSixTitle = "Tenement Management";
  const BannerSixBody = "Are you seeking agile managers for your mining or mineral property? We at GoldHawk have crafted an enviable reputable in this enterprise.";
  const BannerSevenTitle = "Mineral Resource Estimation";
  const BannerSevenBody = "Quantify and evaluate the value and upside potential of your mineral project by reaching out to us.";
  const BannerEightTitle = "Technical Due Diligence";
  const BannerEightBody = "Check, recheck and cross-check before you make your next mining project acquisition. We are your trusted partner in ensuring your mining project fundamentals and indicators are realistic and robust to anchor your success.";
  const BannerNineTitle = "Metal Detecting";
  const BannerNineBody = "We are the metal detecting Mojos. We will find your next retirement cache, antique, or insitu gold nugget for you.";

  const colorOne = "#00507b"
  const colorTwo = "#006c7b"
  const colorThree = "#2A53AB"
  const colorFour = "#00507b"
  const colorFive = "#1A752C"
  const colorSix = "#2A53AB"
  const colorSeven = "#00507b"
  const colorEight = "#006c7b"
  const colorNine = "#00507b"

  const imgLinkOne = "index1.jpeg"
  const imgLinkTwo = "index2.jpg"

  const bannerheight = "500px";

  return (
    <>
      <Helmet>
        <title>Home | Goldhawk Geoconsult</title>
        <meta name="description" content="Homepage of the Goldhawk Geoconsult"/>
        <meta name="keywords" content="goldhawk, geoconsult, gold, Goldhawk geoconsult, mining"/>
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
                  <h1>LEADING-EDGE GEOLOGICAL AND MINING CONSULTANCY FIRM IN GHANA</h1>
                  <h4>At GoldHawk, we unlock and deliver value through discovery, replenishment, growth and expansion of mineral resource potential and inventories with formidable teams.</h4>
                  <p>Having built versatility in Alluvial, Open-Pit and Underground Mining operations at various phases and in varying portfolios, we jockey for fresh and onerous responsibilities in fast-emerging, deadline-oriented settings where we can leverage our capabilities to make a meaningful and lasting impact!</p>
                </ImageTextContainer>
                
            </WhoWeAre>
            <MediaComponent bannerheight={bannerheight} imgLinkOne={imgLinkOne} color={colorOne} BannerOneTitle={BannerOneTitle} BannerOneBody={BannerOneBody} />
            <MediaComponentRight bannerheight={bannerheight} imgLinkTwo={imgLinkTwo} color={colorTwo} BannerTwoTitle={BannerTwoTitle} BannerTwoBody={BannerTwoBody} />
            <MediaComponent bannerheight={bannerheight} imgLinkOne={imgLinkOne} color={colorThree} BannerOneTitle={BannerThreeTitle} BannerOneBody={BannerThreeBody} />
            <MediaComponentRight bannerheight={bannerheight} imgLinkTwo={imgLinkTwo} color={colorFour} BannerTwoTitle={BannerFourTitle} BannerTwoBody={BannerFourBody} />
            <MediaComponent bannerheight={bannerheight} imgLinkOne={imgLinkOne} color={colorFive} BannerOneTitle={BannerFiveTitle} BannerOneBody={BannerFiveBody} />
            <MediaComponentRight bannerheight={bannerheight} imgLinkTwo={imgLinkTwo} color={colorSix} BannerTwoTitle={BannerSixTitle} BannerTwoBody={BannerSixBody} />
            <MediaComponent bannerheight={bannerheight} imgLinkOne={imgLinkOne} color={colorSeven} BannerOneTitle={BannerSevenTitle} BannerOneBody={BannerSevenBody} />
            <MediaComponentRight bannerheight={bannerheight} imgLinkTwo={imgLinkTwo} color={colorEight} BannerTwoTitle={BannerEightTitle} BannerTwoBody={BannerEightBody} />
            <MediaComponent bannerheight={bannerheight} imgLinkOne={imgLinkOne} color={colorNine} BannerOneTitle={BannerNineTitle} BannerOneBody={BannerNineBody} />
            <OurServices />
            <UpcomingPrograms>
                {/* This is the text in the notice board */}
                <NoticeText>
                  <h2>This is who we are</h2>
                  <p>Vanguard geological and mining consultancy firm bringing the informal mining sector at par with the formal vis-a-vis geological knowledge and mining technical information.</p>
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
    width: auto;
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
    display: flex;
    flex-direction: row;
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

    @media only screen and (max-device-width : 768px){
        flex-direction: column;
        align-items: center;
        /* align-content: left; */
        justify-content: center;

        /* padding: 50px; */
        
    }
    
`
const NoticeBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 400px;
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
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;
      letter-spacing: 1.5px;
      padding-top: 30px;
    }

    > p span {
      color: #c48d3a;
    }

    @media only screen and (min-device-width : 0px) and (max-device-width : 932px){
        width: auto;
        height: auto;
        /* display: flex; */
        margin-left: 12%;
        justify-content: center;
        align-items: center;
        margin-bottom: 20%;
        
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
        font-weight: 700;
        color: #c48d3a;
        font-family: 'Roboto', sans-serif;

    }

    > p {
        color: white;
        font-size: 25px;
        /* font-weight: 200; */
        font-family: 'Roboto', sans-serif;
    }

    @media only screen and (min-device-width : 0px) and (max-device-width : 932px){
        width: 80%;
        height: auto;
        padding-right: 0px;
        padding-left: 20px;
        padding-top: 3vh;
        padding-bottom: 3vh;

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
      line-height: 1.9rem;
      margin-bottom: 0.3rem;
      text-transform: uppercase;
      /* font-size: calc(1.475rem + 2.7vw); */
      color: #343a40;
      font-size: 1.5rem;
      font-weight: 900;
      font-family: "Oswald", sans-serif;
      display: block;
  }

  > h4 {
      font-size: 1.2rem;
      color: #c48d3a;
      line-height: 1.5rem;
      text-transform: uppercase;
  }

  > p {
      color: #343a40;
      font-size: 100%;
      font-family: "Roboto", sans-serif;
  }

  @media only screen and (min-device-width : 0px) and (max-device-width : 768px){
    > h1 {
      font-size: 1.5rem;
      line-height: 1.6rem;
    }
  }
`

