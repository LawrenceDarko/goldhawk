import React from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import {Helmet} from 'react-helmet'

const About = () => {
  const Title = "About US"
  return (
    <>
      <Helmet>
        <title>About | Goldhawk Geoconsult</title>
        <meta name="description" content="About Page of Goldhawk Geoconsult"/>
        <meta name="keywords" content="goldhawk, geoconsult, gold, Goldhawk geoconsult, mining"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title} />
      <PageWrapper>
          <AboutText>
            <h1>Our Mission</h1><hr/>
            <p>To leverage Ghana's foremost position in gold production in Africa and in the global mining space to provide geological and mining support services to miners and prospective investors, all while bridging the technical information gap particularly in the informal mining sector.</p>
            

            <h1>Our Essence</h1>
            <p>To be the vanguard geological and mining consultancy firm bringing the informal mining sector at par with the formal vis-a-vis geological knowledge and mining technical information.</p>
            

            <h1>Our Operative Word</h1>
            <p>is that the decision to mine should go beyond the basis of seeing gold in the pan..</p>


            <h1>Who we serve</h1>
            <p>Our clientele principally involve actors in the mining industry, and prospective investors who want to put some skin in the game. We have carved a niche to nurture players in the informal mining sector, whose mammoth contribution to our mining output can't be plodded on.</p>

            
          </AboutText>
          <Footer />
      </PageWrapper>
    </>
  )
}

export default About;

const PageWrapper = styled.div`
    height: 100%;
    /* width: 100%; */
    /* border-bottom: 1px solid #e6e6e6; */
    
    /* background-color: #333; */

`
const AboutText = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding-left: 20vh;
    padding-right: 20vh;
    /* padding-top: 10vh; */

    > h1 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
    }

    > p {
        color: #333;
        font-size: 20px;
        font-weight: 350;
        /* font-family: 'Roboto', sans-serif; */
    }



    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
      padding-left: 5vh;
      padding-right: 5vh;
        /* width: 80%; */
        > h1 {
            font-size: 20px;
        }

        > h2 {
            font-size: 20px;
        }

        > p {
            font-size: 18px;
        }
    }

`