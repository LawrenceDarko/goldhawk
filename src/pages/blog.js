import React from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import OtherPagesCarousel from '../components/OtherPagesCarousel';
// import TheProjects from '../components/TheProjects';
import {Helmet} from 'react-helmet'


const Blog = () => {

  const Title = "Blogs"

  // const red = "#d42701"
  // const orange = "#e06804"
  // const green = "#1a752c"
  // const blue = "#006c7b"
  // const deepBlue = "#00507b"
  // const lightBlue = "#2a53ab"
  // const pink = "#d437fd"
  // const gold = "#ffb733"

  // const ProjectOneLink = "/caro.jpg"
  // const ProjectTwoLink = "/caro.jpg"
  // const ProjectThreeLink = "/caro.jpg"
  // const ProjectFourLink = "/caro.jpg"
  // const ProjectFiveLink = "/caro.jpg"
  // const ProjectSixLink = "/caro.jpg"
  // const ProjectSevenLink = "/caro.jpg"
  // const ProjectEightLink = "/caro.jpg"




  return (
    <>
      <Helmet>
        <title>Projects | Goldhawkgeo-consult</title>
        <meta name="description" content="Projects Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
          <OurProjectsTextContainer>
            <h1>Minimizing Mining Investment Risk in Ghana</h1>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ducimus tempora reprehenderit soluta quidem! Ipsam non eum ab in veritatis, iste accusamus beatae totam quos dolores omnis ratione doloribus tempore.</p> */}
          </OurProjectsTextContainer>
          <ItemsContainer>
              {/* <TheProjects imageLink={ProjectOneLink} title={"Project 1 title"} color={red}/>
              <TheProjects imageLink={ProjectTwoLink} title={"Project 2 title"} color={orange}/>
              <TheProjects imageLink={ProjectThreeLink} title={"Project 3 title"} color={green}/>
              <TheProjects imageLink={ProjectFourLink} title={"Project 4 title"} color={blue}/>
              <TheProjects imageLink={ProjectFiveLink} title={"Project 5 title"} color={deepBlue}/>
              <TheProjects imageLink={ProjectSixLink} title={"Project 6 title"} color={lightBlue}/>
              <TheProjects imageLink={ProjectSevenLink} title={"Project 7 title"} color={pink}/>
              <TheProjects imageLink={ProjectEightLink} title={"Project 8 title"} color={gold}/> */}
              <HeaderText>
                <p>The keystone pathway to whittling down mining investment risk in Ghana is tackling the centuries-old monster of lack of adequate information. A prospective investor has a leg up if they are able to amass as much wealth of information about the supposed mining prospect/project as possible.</p>
                <p>Often prospective investors are swayed by intrigue and feverishness to have their dream mining projects eventuate, and as a result gloss over immensely pertinent red flags which ultimately morph into debilitating landmines. They are also amenable to falling prey to salted rhetoric by mining promoters and gold exhibits, misleading and railroading them to make poor investment choices and decisions. A series of risks confront the prospective investor in Ghana, some of which are catalogued as follows;</p>
              </HeaderText>
              <ListContainer>
                <ul>
                <li>Scams</li> 
                <li>Host community revolt</li> 
                <li>Geological risk</li>  
                <li>Mineral/Land title risk</li> 
                <li>Government-led environmental crackdown</li> 
                <li>Infiltration by illegal miners</li> 
                <li>Extreme weather</li> 
                <li>Unfriendly fiscal regime</li> 
                <li>Confiscation/Expropriation/Resource Nationalisation</li> 
                </ul>
              </ListContainer>
              <ListContainer>
              <h2>How to mitigate the risks</h2>
                <ul>
                  <li>Undertake Independent due diligence sampling and verification of documentation and technical information covering mineral rights as the necessary first step before consummating a deal.</li> 
                  <li>Be cautious of those who create a sense of urgency and competition, badgering you incessantly about advancing monetary payments.</li> 
                  <li>Secure adequate social license by partnering stakeholders in host communities.</li>  
                  <li>Be cautious of those who unjustifiably and unreasonably opt for outright sale or all-cash transactions instead of stock or obtaining equity interest in their own assets.</li> 
                  <li>Focus on mining jurisdictions that have struck commercial gold in the last five years.</li> 
                  <li>Be cautious whom you trust. A general posture of skepticism (and not cynicism) would be helpful at the inception</li> 
                  <li>Eschew dabbling in local and national political affairs and focus on your core objective and mandate of mining.</li> 
                </ul>
              </ListContainer>
          </ItemsContainer>
          <Footer />
      </PageWrapper>
    </>
    )
};

export default Blog;


const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: space-evenly; */
    width: 88%;
    margin: 0 auto;
    padding-bottom: 50px;
    /* border: 1px solid black; */

    

    @media (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      /* padding-left: 50px;
      padding-right: 50px; */

      > p {
        width: 100%;
        /* margin: 0 auto; */
      }
    }
    
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
`
const OurProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  /* background-color: #403F3E; */
  padding-left: 13vh;
  padding-right: 13vh;
  padding-top: 15vh;

  > h1 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        /* font-family: 'Roboto', sans-serif; */
    }

  > p {
      color: #333;
      font-size: 20px;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
  }

  @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
      padding-left: 35px;
      padding-right: 35px;
      margin-top: 0px;
      /* margin-bottom: 50px; */

      > h1 {
        /* color: #FFB733; */
        font-size: 23px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: white;
        font-size: 18px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }

  }
`
const ListContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: auto;
      /* background-color: #403F3E; */
      padding-left: 3vh;
      padding-right: 13vh;
      /* border: 1px solid black; */

      > h2 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 400;

      }

      > ul li {
        color: #333;
        font-size: 16px;
        font-weight: 400;
        /* change bullet style */
        list-style-type: square;
        letter-spacing: 1px;
      }

      @media only screen and (min-device-width : 0px) and (max-device-width : 768px){
        > h2 {
          font-size: 28px;
        }
      }
`
const HeaderText = styled.div`
      display: flex;
      flex-direction: column;
      width: auto;
      padding-left: 3vh;
      padding-right: 5vh;
      /* border: 1px solid black; */

      > p {
      width: 100%;
      /* margin: 0 auto; */
      /* padding: 0; */
      color: #333;
    }

    > h2 {
      width: 100%;
      /* margin: 0 auto; */
      /* padding: 0; */
      color: #c48d3a;
      font-size: 1.5rem;
      font-weight: 400;
    }

`