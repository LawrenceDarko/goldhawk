import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
// import OurTeamGallery from '../components/OurTeamGallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
    <>
      <Helmet>
        <title>Contact | Goldhawk Geoconsult</title>
        <meta name="description" content="contact Page of the Goldhawk Geoconsult"/>
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
            <p>Please contact our office via phone at (+233) 5930 13134, or by email at info@goldhawkgeoconsult.com. <br/>You can also schedule an appointment with us.</p>
            <h4>Corporate Office:</h4>
            <p>42 Achimota Golf Hills <br/>Accra, Ghana <br/></p>
            {/* <h4>Corporate Office:</h4> */}
            <p><span>Telephone:</span> (+233) 5930 13134 <br/>info@goldhawkgeoconsult.com</p>
         </GalleryImagesContainer>
         <Footer />
      </PageWrapper>
    </>
    </HelmetProvider>
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
    font-family: 'Roboto', sans-serif;
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
    color: #c48d3a;
    font-family: 'Roboto', sans-serif;
  }

  > p {
    padding-block-start: 0em;
    margin-block-start: 0em;
    color: #333;
    font-family: 'Roboto', sans-serif;
  }

  > p > span {
    font-weight: 700;
    color: #c48d3a;
  }
`
