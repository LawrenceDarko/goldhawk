import React from 'react'
import styled from "styled-components"


const OtherPagesCarousel = ({title}) => {

  return (
    <PageHeaderImageContainer>
      {title === "Partnerships" ?<h1 style={{fontSize: 35}}>{title}</h1> : <h1>{title}</h1>}
    </PageHeaderImageContainer>
  )
}

export default OtherPagesCarousel;

const PageHeaderImageContainer = styled.div`
    height: 18vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 20vh;
    /* margin-top: 20px; */
    /* border: 1px solid white; */

    /* background-image: url("/caro.jpg"); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0,0,0, 0.9)), url("/images/head4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    /* object-fit: cover; */
    background-position: center;
    background-attachment: fixed;
    line-height: 1.5;

    @media (max-width: 768px) {
      background-attachment: scroll !important;
    }

    > h1 {
        color: #c48d3a;
        font-size: 2.5rem;
        line-height: 1;
        font-weight: 800;
        margin-block-start: 0em;
        margin-block-end: 0em; 
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: 'Open Sans', sans-serif;
        padding-top: 50px;
        cursor: pointer;
        

        &:hover{
            border-bottom: 2px solid #c48d3a;
            /* font-size: 70px */
        }
    }
`