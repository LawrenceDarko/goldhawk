import React from 'react'
import styled from "styled-components"

const Footer = () => {
  return (
      <>
        <FooterContainer>
            <FooterOne>
                <h2>GoldHawk GeoConsult</h2>
                <FooterLogoContainer>
                    <img priority={true} src="/logo.png" width="150px" height="60px" alt='footer' />
                </FooterLogoContainer>
                <p>We help companies focus on growth through innovation and disruptive technologies </p>
            </FooterOne>
            <FooterTwo>
                <h2>Quick Links</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti dolorem nisi, libero voluptas error nam qui voluptatum exercitationem praesentium, pariatur, alias recusandae facilis? Nisi ipsum sint illum ad officia!</p>
            </FooterTwo>
            <FooterThree>
                <h2>Get In Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum, dolorum laboriosam aliquam animi assumenda tenetur velit hic, officia saepe inventore officiis necessitatibus distinctio rem itaque, voluptates voluptas perferendis architecto!</p>
            </FooterThree>
        </FooterContainer>
        <FinalFooter>
            <p>©Copyright 2022, goldhawgeoconsult - All Rights Reserved</p>
        </FinalFooter>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* height: 60vh; */
    background-color: #333;
    bottom: 0;
    left: 0;
    /* right: 0; */
    position: relative;
    padding: 50px;
    background-image: url("/images/footer_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    /* border: 1px solid white; */

    @media only screen and (min-device-width : 10px) and (max-device-width : 768px){
        flex-direction: column;
        align-items: left;
        align-content: left;
        justify-content: space-around;
        /* padding: 50px; */
        
    }


`
const FooterOne = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* width: 350px; */
    flex: 0.3;

    > h2 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #bebebe;
        letter-spacing: 1px;
    }
    /* align-items: center; */

`
const FooterTwo = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    flex: 0.4;

    > h2 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #bebebe;
    }
`
const FooterThree = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    flex: 0.3;

    > h2 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #bebebe;
    }
`
const FooterLogoContainer = styled.div`
    width: 70%;
`
const FinalFooter = styled.div`
    display: flex;
    height: 55px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    /* right: 0; */
    position: relative;
    padding-left: 50px;

    > p {
        color: #333;
        font-size: 15px;
        /* font-weight: 300; */
        font-family: 'Open Sans', sans-serif;
        /* padding-left: 20px; */
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
        /* padding-left: 20px; */
        > p {
            font-size: 13px;
        }
        /* padding: 50px; */
        
    }
`