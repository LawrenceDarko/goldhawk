import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MediaComponent = ({color, imgLinkOne, BannerOneTitle, BannerOneBody}) => {
    // console.log(BannerOneTitle)
  return (
    <MediaItemContainer color={color}>
        <MediaImageHolder>
            <img src={`/images/${imgLinkOne}`} alt="media" width={400} height={270} />
        </MediaImageHolder>
        <MediaTextContainer>
            <Heading>
                <h3>{BannerOneTitle}</h3>
            </Heading>
            <p>{BannerOneBody}</p>
            <LearnMoreContainer>
                <Link to="/services"><LearnMoreButton>Learn More</LearnMoreButton></Link>
            </LearnMoreContainer>
        </MediaTextContainer>
    </MediaItemContainer>
  )
}

export default MediaComponent;

const MediaItemContainer = styled.div`
    width: auto;
    height: 280px;
    background-color: ${props => props.color? props.color : '#333'};
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    /* border: 2px solid white; */
    /* margin-bottom: 100px; */

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 10px;
        flex-direction: column;
        height: auto;
    }

    
`
const MediaTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    /* border: 1px solid black; */
    flex: 0.7;
    /* scale box */
    


    > p {
        color: #fff;
        font-size: 18px;
        font-weight: 200;
        padding-block-end: 0em;

    }

    /* @media (max-width: 768px) {
        padding-left: 0px;
        padding-right: 0px;

    } */

    
`
const Heading = styled.div`
    /* border-bottom: 2px solid white; */

    > h3 {
        color: #c48d3a;
        font-size: 30px;
        font-weight: 200;
        margin-block-end: 0em;
        /* border-bottom: 1px solid white; */
    }
`

const LearnMoreContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid red; */
    width: 200px;

`

const LearnMoreButton = styled.button`
    background-color: #c48d3a;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #333;
        border: 1px solid #333;
        transition: all 0.4s ease-in-out;
        font-weight: 400;
        transform: scale(1.1);
    }

`
const MediaImageHolder = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* border: 1px solid white; */
    flex: 0.3;
    /* scale box */
    /* position: relative; */
    height: 380px;

    @media (max-width: 768px) {
        > img {
            width: 380px;
            height: 250px;
        }
    }
`