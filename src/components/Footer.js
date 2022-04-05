import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Footer = () => {
  return (
      <>
        <FooterContainer>
            <FooterOne>
                <h2>GoldHawk GeoConsult</h2>
                <FooterLogoContainer>
                    <img src="/logo.png" width="150px" height="60px" alt='footer' />
                </FooterLogoContainer>
                <p>What sets us apart from the throng is our result orientation and culture of excellence. </p>
            </FooterOne>
            <FooterTwo>
                <h2>Quick Links</h2>
                <Link to="/">&rarr; Home</Link>
                <Link to="/about">&rarr; About</Link>
                <Link to="/services">&rarr; Services</Link>
                <Link to="/contact">&rarr; Contact</Link>
                <Link to="/blog">&rarr; Blog</Link>

            </FooterTwo>
            <FooterThree>
                <h2>Get In Touch</h2>
                <h4>Corporate Office:</h4>
                <p>42 Achimota Golf Hills <br/>Accra, Ghana <br/></p>
                {/* <h4>Corporate Office:</h4> */}
                <p><span>Telephone:</span> (+233) 5930 13134 <br/>info@goldhawkgeoconsult.com</p>
            </FooterThree>
        </FooterContainer>
        <FinalFooter>
            <p>©Copyright 2022, goldhawkgeoconsult - All Rights Reserved</p>
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
        background-attachment: scroll !important;
        
    }


`
const FooterOne = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    /* justify-content: center; */
    /* width: 350px; */
    flex: 0.3;

    > h2 {
        color: #c48d3a;
        font-size: 27px;
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
    padding-right: 20px;
    /* justify-content: center; */
    /* align-items: center; */
    flex: 0.4;

    > h2 {
        color: #c48d3a;
        font-size: 27px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #bebebe;
    }

    > a {
        color: #bebebe;
        text-decoration: none;
        /* font-size: 18px; */
        /* font-weight: 300; */
        font-family: 'Open Sans', sans-serif;
        line-height: 1.5;

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
        font-size: 27px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > h4 {
        padding-block-start: 0em;
        margin-block-start: 0em;
        padding-block-end: 0em;
        margin-block-end: 0em;
        color: #c48d3a;
        font-family: 'Roboto', sans-serif;
    }

    > p {
        color: #bebebe;

        > span {
            font-weight: 500;
            color: #c48d3a;
            font-family: 'Roboto', sans-serif;
        }
    }

    p:nth-last-child(1) {
        margin-block-start: 0em;
        padding-block-start: 0em;
        /* border: 1px solid white; */
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