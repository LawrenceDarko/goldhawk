// React swiper carousel component

import React from 'react';
import styled from "styled-components"
import {motion} from 'framer-motion'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const PageCarousel = () => {
  return (
    <ImageContainer priority={true}>
        <CarouselTextContainer>
            <motion.h1 initial={{x:-100}} animate={{x:10}} transition={{type: 'spring', duration: 3, damping: 5, stiffness: 150}}>GOLD HAWK</motion.h1>
            <motion.h1 initial={{x:-100}} animate={{x:10}} transition={{type: 'spring', duration: 3, damping: 5, stiffness: 150}}>GEO-CONSULT</motion.h1>
            <motion.h2 initial={{x:100}} animate={{x:10}} transition={{type: 'spring', duration: 3, damping: 10, stiffness: 150}}>Your decision to mine should go beyond the basis of seeing gold in the pan</motion.h2>
            <CustomButton>
                <a href="mailto:">TELL US ABOUT A PROJECT</a>
            </CustomButton>
        </CarouselTextContainer>
        
        <CarouselImageContainer>
            {/* <img src="/header.png" width="auto" height="auto" alt='Carousel' /> */}
        </CarouselImageContainer>
    </ImageContainer>
  )
};

export default PageCarousel;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 120vh;
    padding-left: 18vh;
    /* padding-right: 18vh; */
    padding-top: 10vh;
    padding-bottom: 10vh;
    /* background-color: black; */
    /* position: fixed; */
    /* overflow: hidden; */

    /* background-image: url("/caro.jpg"); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/caros4.jpg");
    /* background-color: #FFAA17; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* object-fit: cover; */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: left;
        align-content: left;
        justify-content: space-around;
        /* padding-left: 5vh; */
  }

  @media only screen and (min-device-width : 10px) and (max-device-width : 314px) {
    padding-left: 0vh;
  }

  @media only screen and (min-device-width : 10px) and (max-device-width : 768px) {
    padding-left: 0vh;
    height: 80vh;
  }

  @media only screen and (min-device-width : 540px) and (max-device-width : 768px) {
    padding-left: 0vh;
    height: 100vh;
  }

  /* Smartphones (portrait and landscape) ----------- */
    
    
`
const CarouselTextContainer = styled.div`
    height: 500px;
    width: 800px;
    /* border: 1px solid black; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25vh;
    /* display: block; */
    /* flex: 0.7; */
    /* padding: 0px; */

    > h1 {
        /* color: #e96b15; */
        color: #c48d3a;
        font-size: 65px;
        font-family: 'Oswald', sans-serif;
        line-height: 1;
        font-weight: 700;
        margin-block-start: 0em;
        margin-block-end: 0em;
        /* font-family: 'Noto Sans', sans-serif; */
        /* font-family: "Roboto", sans-serif; */
    }

    > h2 {
        color: #D6CEBF;
        font-size: 28px;
        font-weight: 300;
        text-transform: capitalize;
        font-family: 'Oswald', sans-serif;
        line-height: 1.1;
        margin-block-start: 1.3em;
        margin-block-end: 1.3em;

    }

    @media (max-width: 768px) {
        padding-top: 150px;
        flex-direction: column;
        align-items: left;
        align-content: left;
        font-size: 18px;
        font-weight: 150;
        height: 420px;
        width: 300px;
        padding-left: 25px;

        > h1 {
            font-size: 30px;
        }

        > h2 {
            font-size: 20px;
        }
        }
    }

    @media only screen and (min-device-width : 482px) and (max-device-width : 1024px) {
        flex-direction: column;
        align-items: left;
        align-content: left;
        font-size: 25px;
        font-weight: 200;
        height: 470px;
        width: 350px;
        padding-left: 25px;

        > h1 {
        font-size: 50px;
        }

        > h2 {
            font-size: 20px;
        }
    }

    /* Ipad Screens portrait and landscape */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
        flex-direction: column;
        align-items: left;
        align-content: left;
        font-size: 25px;
        font-weight: 200;
        height: 470px;
        width: 350px;
        padding-left: 25px;

        > h1 {
        font-size: 50px;
        }

        > h2 {
            font-size: 20px;
        }

        }

    @media only screen and (min-device-width : 100px) and (max-device-width : 314px) {
        flex-direction: column;
        align-items: left;
        align-content: left;
        font-size: 25px;
        font-weight: 200;
        height: 470px;
        width: 200px;
        padding-left: 5px;

        > h1 {
        font-size: 25px;
        }

        > h2 {
            font-size: 15px;
        }

        }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        flex-direction: column;
        align-items: left;
        align-content: left;
        font-size: 18px;
        font-weight: 150;
        height: 420px;
        width: 300px;
        padding-left: 25px;
        justify-content: space-around;

        > h1 {
            font-size: 30px;
        }

        > h2 {
            font-size: 20px;
        }

        }

    /* iPhone XS Max, XR ----------- */
        @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
            flex-direction: column;
            align-items: left;
            align-content: left;
            font-size: 18px;
            font-weight: 150;
            height: 420px;
            width: 300px;
            padding-left: 25px;

            > h1 {
                font-size: 30px;
            }

            > h2 {
                font-size: 20px;
            }
        }
    

    `
const CarouselImageContainer = styled.div`
    height: auto;
    width: auto;
    padding-top: 10vh;
    /* border: 1px solid black; */

    @media (max-device-width : 768px){
        padding-top: 5vh;
        > img {
            height: 320px;
            width: 250px;
            padding-right: 0px;
            padding-bottom: 5vh;
        }
    }
`

const CustomButton = styled.button`
    width: 370px;
    height: 50px;
    
    background-color: #222429;
    margin-left: 15px;
    font-weight: bold;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.8);
    border: 0px;

    &:hover {
        border: 1px solid white;
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.8);
        
    }
    > a {
        color: #fff;
        letter-spacing: 2px;
        text-decoration: none;
    }
    /* make the mouse a pointer */

    @media (max-width: 768px) {
        width: 250px;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (min-device-width : 100px) and (max-device-width : 314px) {
        width: 150px;
    }

`


















