import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
// import OurTeamGallery from '../components/OurTeamGallery';
import {Helmet} from 'react-helmet'

const Contact = () => {

  const Title = "Contact"

  // const ImageOneLink = "/team/caro1.webp"
  // const ImageTwoLink = "/team/caro1.webp"
  // const ImageThreeLink = "/team/caro1.webp"
  // const ImageFourLink = "/team/caro1.webp"
  // const ImageFiveLink = "/team/caro1.webp"
  // const ImageSixLink = "/team/caro1.webp"
  // const ImageSevenLink = "/team/caro1.webp"
  // const ImageEightLink = "/team/caro1.webp"
  // const ImageNineLink = "/team/caro1.webp"


  return (
    <>
      <Helmet>
        <title>Contact | Goldhawkgeo-consult</title>
        <meta name="description" content="contact Page of the Goldhawkgeo-consult"/>
        <meta name="keywords" content="gold, goldhawk, goldhawkgeo, goldhawkgeoconsult, consession, mining, gold bullion"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
        {/* <h2>Gallery</h2> */}
         <GalleryImagesContainer>
            {/* <OurTeamGallery imageLink={ImageOneLink}/>
            <OurTeamGallery imageLink={ImageTwoLink}/>
            <OurTeamGallery imageLink={ImageThreeLink}/>
            <OurTeamGallery imageLink={ImageFourLink}/>
            <OurTeamGallery imageLink={ImageFiveLink}/>
            <OurTeamGallery imageLink={ImageSixLink}/>
            <OurTeamGallery imageLink={ImageSevenLink}/>
            <OurTeamGallery imageLink={ImageEightLink}/>
            <OurTeamGallery imageLink={ImageNineLink}/> */}
            <p>Please contact our office via phone at +1 (604) 484-4399, or by email at info@newcoregold.com. <br/>You can also schedule an update with us here.</p>
            <h4>Corporate Office:</h4>
            <p>Suite 413 - 595 Burrard Street <br/>Vancouver, BC <br/>V7X 1J1 Canada</p>
            {/* <h4>Corporate Office:</h4> */}
            <p><span>Telephone:</span> (604) 484 4399 <br/>info@newcoregold.com</p>
         </GalleryImagesContainer>
         <Footer />
      </PageWrapper>
    </>
  )
};

export default Contact;

const PageWrapper = styled.div`
  /* height: 100%; */
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  /* padding-left: 30px;
  padding-right: 10px; */

  > h2 {
    color: #333;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 0px;
    padding-bottom: 0px;
    text-align: center;

  }

`
const GalleryImagesContainer = styled.div`
  width: auto;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding-top: 90px;
  padding-left: 100px;
  padding-right: 50px;
  padding-bottom: 50px;
  /* flex-wrap: wrap; */
  > h4 {
    padding-block-end: 0em;
    margin-block-end: 0em;
    color: #333;
  }

  > p {
    padding-block-start: 0em;
    margin-block-start: 0em;
    color: #333;
  }

  > p > span {
    font-weight: 700;
  }
`
