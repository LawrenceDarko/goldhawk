import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components"
// import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow} from "swiper"
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "../styles/globals.css"


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation, } from "swiper";
// SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

const OurServices = () => {
  return (
    <ServicesCarousel>
        <OurServicesTextContainer>
          <h2>Our Services</h2>
          <p>In the past two decades GoldHawk Geoconsult has etched itself as a front-end player in the Geological and mining consulting space in Ghana. Our team is cross-functional and culturally diverse having amassed wealth of experience spanning multiple jurisdictions. Reach out to us and let's have a constructon conversation about your prospective project</p>
        </OurServicesTextContainer>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect={"coverflow"}
          
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
              delay: 1500,
              disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          slidesPerView= {1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              // width: 640,
              slidesPerView: 2,
              
            },
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            // when window width is >= 1024px
            
          }}
          centeredSlides={true}
          style={{ height: "320px", width: "100%", position: 'relative', zIndex: 1, paddingBottom: '200px' }}
          className="sliderContainer"
        >
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as2.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Mineral Resource Estimation</h3>
            </SlideTextContainer>
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as5.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Alluvial Gold Prospecting</h3>
            </SlideTextContainer>
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as4.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Gold Bullion Purchase</h3>
            </SlideTextContainer>
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as11.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Metal Detecting</h3>
            </SlideTextContainer>
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as13.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Tenement Management</h3>
            </SlideTextContainer>
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as8.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Technical Due Diligence</h3>
            </SlideTextContainer>
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/as12.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            <SlideTextContainer>
              <h3>Geological Mapping and GIS Services</h3>
            </SlideTextContainer>
          </SwiperSlide>
        </Swiper>
  </ServicesCarousel>
  )
}

export default OurServices;


const ServicesCarousel = styled.div`
    display: flex;
    flex-direction: column;
    height: 120vh;
    /* padding: 30px; */
    /* justify-content: space-between; */
    align-items: center;
    /* padding-bottom: 80px; */
    /* padding-right: 80px; */
    /* margin: 0 auto; */
    padding: 50px;

    /* width: 100%; */
    background-color: #d42701;

    /* background-image: linear-gradient(rgba( 55, 55, 55, 0.5), rgba(55, 55, 55, 0.5)), url("/images/tech.png"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
     /* border: 1px solid black; */

    `
const OurServicesTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-left: 70px;
    padding-right: 70px; */
    /* border: 2px solid white; */


    > h2 {
        text-transform: uppercase;
        color: #fd7e14;
        font-size: 30px;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #fff;
        font-size: 23px;
        font-weight: 300;
        text-align: center;
        font-family: 'Open Sans', sans-serif;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`
const SlideTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 90%;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 50%;
    background-color: #fff;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }

    > h3 {
        color: #c48d3a;
    }
`






