import React from 'react'
import styled from 'styled-components'

const MediaComponent = ({color, imgLinkTwo, BannerTwoTitle, BannerTwoBody}) => {
  return (
    <MediaItemContainer color={color}>
        <MediaTextContainer>
            <Heading>
                <h1>{BannerTwoTitle}</h1>
            </Heading>
            <p>{BannerTwoBody}</p>
            <LearnMoreContainer>
                <LearnMoreButton>Learn More Lorem</LearnMoreButton>
            </LearnMoreContainer>
        </MediaTextContainer>
        <MediaImageHolder>
            <img priority={true} src={`/images/${imgLinkTwo}`} alt="media" width={400} height={270} />
        </MediaImageHolder>
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
    padding-right: 20px;
    /* border: 1px solid black; */
    flex: 1;

    > p {
        font-size: 1.2rem;
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        color: #fff;
        /* padding-top: 20px; */

    }

    /* @media (max-width: 768px) {
        padding-left: 0px;
        padding-right: 0px;

    } */

    
`
const Heading = styled.div`
    /* border-bottom: 2px solid white; */

    > h1 {
        font-size: 20px;
        font-weight: 400;
        font-family: 'Open Sans', sans-serif;
        color: white;
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
    /* border: 1px solid white; */
    width: 200px;

`

const LearnMoreButton = styled.button`
    background-color: #333;
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
    /* flex: 1; */
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