import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Services = () => {

  const Title = "Services"

  // useEffect(() => {
  //   const myId = window.location.hash.slice(1);
  //   const myIdElement = document.getElementById(myId);
  //   if (myIdElement) {
  //     myIdElement.scrollIntoView({behavior: "smooth", block: "start"});
  //   }
  // }, [])
  

  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Services | Goldhawk Geoconsult</title>
        <meta name="description" content="Services Page of Geohawk Consult"/>
        <meta name="keywords" content="goldhawk, geoconsult, gold, Goldhawk geoconsult, mining"/>
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
                  <p>No two mining operations or projects are created equal. Each comes with it's own nuances and intricacies. We provide tailor-made solutions and services catered to your needs. Let's have that conversation that will flip the fortunes of your operation or project around.</p>
                </RowElementOne>
                <RowElementTwo>
                  <h3>Expertise</h3>
                  <p>Our expertise is nestled around a spectrum of top-notch professionals and high achievers in the fields of surveying, exploration, mining, geotechniques and metallurgy. Perfection and excellence are our benchmark, and we strive at all times to attain it.</p>
                </RowElementTwo>
                <RowElementThree>
                  <h3>Impact</h3>
                  <p>Our impact resonates through our diverse host of clientele across the globe, who solicit our services on a sub-daily basis, and in our catchment communities where we operate. We are always welcome with open arms because of our identity. Be part of us today!</p>
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
                <p>No two mining operations or projects are created equal. Each comes with its own nuances and intricacies. We provide tailor-made solutions and services catered to your needs. Let's have that conversation that will flip the fortunes of your operation or project around.</p>
              </ImageTextContainer>
            </BigCard>
         </PresentAndPastSponsorshipsContainer>
         <SmallCard>
           <h3>"Exploration is a game of probabilities, and mining is inherently risky; hence your mining decision should be predicated on verifiable, empirical and compelling technical information. Our knack for pragmatic and systematic approach to exploration and mining is what birthed us. We attain our greatest gratification when are clients succeed. This is who we are!"</h3>
           <p>Edmund Ampofo Akondo</p>
           <p>Managing Director, GoldHawk Geoconsult</p>
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
           <CommentContainer id='AGP'>
              <CommentText>
                <h3>Alluvial gold prospecting</h3>
                <p>Alluvial gold prospecting can be a formidable task given the nature of this type of deposit. Alluvial deposits are inherently scant, relatively, and occur at lower concentrations. It is very easy to be swayed by gold particles obtained after panning of alluvial concentrates and jump hurriedly into decision to exploit. It is a catchphrase at GoldHawk that "Mining decision should always go beyond the basis of seeing gold in the pan". GoldHawk advocates additional work be carried out to establish critical indices like grade, overburden thickness and gravel width before taking a mining decision. A preponderant number of investors have suffered phenomenal cashburn due to failure to undertake comprehensive assessment of their mineral prospects through detailed prospecting and other sampling work.</p>
                <p>We at GoldHawk ensure value creation through derisking of prospects through adequate prospecting and pitting to obtain profound information on the deposit to be mined, and issue an advisory accordingly. Our prospecting team come with unmatched experience and profile in the alluvial mining space and are credited with numerous gold discoveries.</p>
              </CommentText>
              <CommentImage>
                <img src="/slider/as1.jpg" alt="Services"/>
              </CommentImage>
           </CommentContainer>
           <CommentContainer>
              <CommentImage>
                <img src="/slider/as2.jpg" alt="Services"/>
              </CommentImage>
              <CommentText>
                <h3>Alluvial Large/Small scale Mining Advisory Services</h3>
                <p>Placer (Alluvial) Mining has become a staple method of extraction of fluvial deposits in Ghana's contemporary history owing to its relative upside in domains like capital intensity, recoverability, return on investment and environmental footprint. </p>
                <p>Obtain firsthand, tried-and-true, industry-specific business advisory from GoldHawk before you jump headfirst into your mining operation. Mining can be extremely rewarding but utterly punishing when due process is not followed. GoldHawk is fixated on arming prospective mining investors with the proper business intelligence and trade secrets peculiar to the mining industry, particularly in Ghana. We illuminate your pathway and equip you with the proper knowledge to help optimise and obtain the most value from your prospective operation. </p>
              </CommentText>
           </CommentContainer>
           <CommentContainer>
              <CommentText>
                <h3>Gold bullion purchase</h3>
                <p>Don't get fleeced by gold scammers before you knock on our door. We are trusted suppliers and brokers in the value chain who will deliver your bullion orders to your utmost satisfaction. We have curated a reputation of credibility and originality, which has scored us more opportunities. We leverage our contacts to deliver high purity bullion that are hassle-free and issues-free. Our consignment come with assay certificate from reputable institutions, ensuring that our deliveries are tailored to your exact specifications and needs.</p>
              </CommentText>
              <CommentImage>
                <img src="/slider/as3.jpg" alt="Services"/>
              </CommentImage>
           </CommentContainer>
           <CommentContainer>
              <CommentImage>
                <img src="/slider/as4.jpg" alt="Services"/>
              </CommentImage>
              <CommentText>
                <h3>Geological Mapping and GIS Services</h3>
                <p>Geological mapping and the deployment of Geographic Information System (GIS) tools are integral in contemporary mining and straddles the entire gamut of the mining cycle. At GoldHawk our cutting-edge mapping techniques and expertise have enabled us to make discoveries that have eluded others in the past. No deposit evades us due to our attention to detail and geocoding competencies.  Our services span a broad spectrum including;</p>
                <ul style={{listStyleType: "square", lineHeight: "1.5"}}>
                    <li> Mineral rights cadastral mapping</li>
                    <li> Target generation</li>
                    <li> Reconnaissance surveys</li>
                    <li> Detailed prospecting of mineral property</li>
                    <li> Thematic mapping</li>
                    <li> Service area estimation</li>
                    <li> Optimal location allocation</li>
                    <li> Sustainability assessment </li>
                    <li> Network analysis and vehicle routing</li>
                    <li> Project monitoring and evaluation</li>

                </ul>
              </CommentText>
           </CommentContainer>
           <CommentContainer>
              <CommentText>
                <h3>Mineral Resource Estimation</h3>
                <p>Define, quantify, analyze, optimize and derisk before taking the ultimate decision to mine. Having foreknowledge of metrics such as grade, volume, contained and recoverable ounces are extremely crucial in mining decision making, as they are directly related to viability and overall profitability. At GoldHawk we deem the decision to mine sacred, and invest a lot of effort and pragmatism in ensuring that decision is worthwhile. After a comprehensive prospecting or exploration program, the deposit is delimited, statistically analyzed, modeled, classified and evaluated. We're able to characterize the ore body in 3-dimensions and make grade and tonnage (volume) predictions that serve as a model and a guide for extraction. We are able to determine upfront the viability, upside and optionality your deposit holds and advise accordingly. </p>
              </CommentText>
              <CommentImage>
                <img src="/slider/as2.jpg" alt="Services"/>
              </CommentImage>
           </CommentContainer>
           <CommentContainer>
              <CommentImage>
                <img src="/slider/as11.jpg" alt="Services"/>
              </CommentImage>
              <CommentText>
                <h3>Metal Detecting</h3>
                <p>There's a lot of wealth to be generated in gold detecting in Ghana. Vast swathes of nugget patches bearing substantial amounts of large size, consolidated native gold, otherwise referred to as nuggets exist undiscovered and untapped. These nuggets, though sometimes excavated and fed into alluvial mining processing equipment also eventually get dislodged and discarded into tailings piles, thereby causing phenomenal collateral loss.</p>
                <p>GoldHawk's business model and strategy is couched around addressing this pain point by creation and delivery of value to alluvial mining operations and individual permit holders through recovery of a preponderant proportion of these nuggets, including the subgram ones. Our modus operandi essentially comprises sweeping a metal detector coil over lateritic soil layers, spoil banks and gold-bearing gravel stockpiles and tailings by our highly experienced geologists and detectorists. Gold detecting is executed under security supervision and scrutiny provided by site management. Nuggets recovered are presented to site management and the requisite appropriation protocols are applied.</p>
                <p>No stringent terms and conditions are imposed except for those mutually enacted and agreed to be binding on parties (concessionaire and detectorist). 
                  GoldHawk metal detecting has established an enviable legacy of effectively retrieving discarded and residual gold nuggets in an atmosphere of openness and transparency, and generating considerable earnings for concessionaires. Our technologies are avant-garde, and our techniques are non-disruptive and run synchronously with regular production activities. 
                  </p>
              </CommentText>
           </CommentContainer>
           <CommentContainer>
              <CommentText>
                <h3>Tenement Management</h3>
                <p>The process of mineral rights acquisition in Ghana can be convoluted, jarring and frustrating at times, but GoldHawk, with years of engaging in license and permit acquisitions has mastered the craft of  securing permits seamlessly despite the hurdles. Our competitive advantage lies in our contacts and wealth of experience amassed in going through this grueling process in the past. Partner with us to make your mineral rights acquisition an effortless one.</p>
              </CommentText>
              <CommentImage>
                <img src="/slider/as13.jpg" alt="Services"/>
              </CommentImage>
           </CommentContainer>
           <CommentContainer>
              <CommentImage>
                <img src="/slider/as8.jpg" alt="Services"/>
              </CommentImage>
              <CommentText>
                <h3>Mining concession sale/purchase facilitation</h3>
                <p>Do you want to dispose of your mineral asset or add a new one to your portfolio? GoldHawk is adept at mineral portfolio management and transactions with exposure and footprint spanning several years.  It is imperative to ensure you are obtaining value and not a stranded asset that will wind up weighing down your mining aspirations. We are the go-to experts in mining concession outright sale, joint ventureships, option agreements, etc.</p>
              </CommentText>
           </CommentContainer>
           <CommentContainer>
              <CommentText>
                <h3>Technical Due diligencet</h3>
                <p>Every miner and prospective investor must err on the side of conducting technical due diligence prior to an acquisition or joint venture partnership to sift through the bells and whistles to ensure value is obtained. GoldHawk delivers this service expertly through meticulous assessment of mineral titles and other concession documentation, empirical data acquisition, cross verification of claims, among others. Due diligence exercises are extremely pivotal to navigate fatal flaws associated with projects and ensure maximization of value, which is our primary calling and mandate.</p>
              </CommentText>
              <CommentImage>
                <img src="/slider/as14.jpg" alt="Services"/>
              </CommentImage>
           </CommentContainer>
         </WhiteSpace>
         <Footer />
      </PageWrapper>
    </>
    </HelmetProvider>
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
        font-size: 30px;
        font-weight: 200;
        /* margin-block-end: 0em; */
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
    height: auto;
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
        /* padding-block-end: 0em;
        margin-block-end: 0em; */
        line-height: 0.5;
        letter-spacing: 0.5px;
    }

    > p:nth-child(2) {
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
        height: auto;

        > h3 {
            font-size: 25px;
        }

        > p {
            font-size: 10px;
        }
    }
`
const WhiteSpace = styled.div`
    width: 100%;
    height: auto;
    /* padding-left: 20px;
    padding-right: 20px; */
    background-color: #fff;
    /* border: 1px solid red; */
    /* margin-right: 50px; */
`

const InsightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    height: auto;
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
    /* width: 100%; */
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 70px;
    /* border: 1px solid red; */

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-left: 10px;
        padding-right: 10px;
    }

`

const CommentImage = styled.div`
    width: 100%;
    object-fit: cover;
    /* border: 1px solid black; */

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const CommentText = styled.div`
    width: 100%;
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
        /* white-space: nowrap; */
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
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 50px;

        > h3 {
            font-size: 30px;
            text-align: center;
        }

        > p {
            text-align: center;
            /* padding-left: 5px;
            padding-right: 5px; */
        }
    }
`
