import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components"
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow} from "swiper"
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
// import { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

const OurServices = () => {
  return (
    <ServicesCarousel>
        <OurServicesTextContainer>
          <h2>Our Services</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam suscipit hic facere harum fuga, odio nihil culpa iste in ullam, officiis quo non quam neque obcaecati consequuntur? Iusto, cumque?</p>
        </OurServicesTextContainer>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
              delay: 2000,
              disableOnInteraction: false,
          }}
          // modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={4}
          centeredSlides={true}
          style={{ height: "380px", width: "100%", position: 'relative', zIndex: 1, paddingBottom: '200px'}}
          className="sliderContainer"
        >
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/1.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/2.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/3.png)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/4.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/5.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/6.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            style={{
              backgroundImage:
                "url(/slider/7.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            }}
          >
            Slide 7
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
    background-color:  #f63309;

    background-image: linear-gradient(rgba( 55, 55, 55, 1), rgba(55, 55, 55, 1)), url("/images/tech.png");
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
        font-size: 25px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }
`






