// import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import styled from "styled-components"
// import navtrans from '../styles/navtrans.js'
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    

  return (
      
    <>
        <NavbarContainer className='navbar'>
            <NavLogo>
                <Link to="/"><img className='NavbarImage' src="/logo.png" alt='Logo' /></Link>
            </NavLogo>
                {/* <Burger /> */}
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/media">Media</Link> */}
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </NavLinks>
            {/* <Burger /> */}
            <OpenLinksButton humberglogic={isOpen} onClick={()=> {setIsOpen(!isOpen)}}>
                {isOpen ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
            {isOpen && (
                <NavbarHumburgerContainer>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    {/* <Link to="/media">Media</Link> */}
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </NavbarHumburgerContainer>
            )}
        </NavbarContainer>
    </>
  )
};

export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* bottom border shadow */
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    position: fixed; /* Make it stick/fixed */
    top: 0; /* Stay on top */
    z-index: 2; /* Stay on top */
    width: 100%; /* Full width */
    transition: top 0.3s;
    /* overflow: hidden; */
    background-color: #fff;
    height: 80px;
    opacity: 0.9;
    /* width: 218.5vh; */
    /* border: 1px solid black; */

    /* @media only screen and (min-device-width : 0px) and (max-device-width :768px){
        display: none;
    } */
    
`
const NavLogo = styled.div`
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    padding-top: 10px;
    height: 65%;
    width: 63px;
    margin-top: 1%;
    /* border: 1px solid black; */
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);

    > a img {
        width: 65px;
        height: 43px;
    }

    @media (max-width: 768px) {
        > img {
            width: 230px;
            height: 50px;
        }
    }

    `
const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 60px;
    justify-content: space-between;
    height: 50px;
    /* width: 700px; */
    /* border: 1px solid #ccc; */
    margin-top: 15px;
    /* padding-bottom: 20px; */
    padding-top: 10px;
    /* box-sizing: border-box; */

    @media only screen and (min-device-width : 0px) and (max-device-width :768px){
        display: none;
    }

    > a {
        margin-left: 20px;
        /* margin-top: 25px; */
        text-decoration: none;
        color: #222429;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Noto Sans', sans-serif;

        &:hover {
            color: #c48d3a;
            /* font-size: 20px; */
            /* border-bottom: 5px solid #66a3a3; */

    }

`
const NavbarHumburgerContainer = styled.div`
/* @media only screen and (min-device-width : 0px) and (max-device-width :768px){ */
        display: flex;
        height: auto;
        width: 300px;
        top: 0;
        right: 0;
        flex-direction: column;
        position: fixed;
        justify-content: space-around;
        align-items: center;
        margin-right: 0px;
        margin-top: 0px;
        padding-top: 50px;
        background-color: #fff;
        /* color: #fff; */
        opacity: 0.95;
        overflow-y: scroll !important;

        
        /* transform: translate(-0%, -0%); */

        > a {
            text-decoration: none;
            color: #333;
            padding-bottom: 3rem;
        }
        
    }
`

const OpenLinksButton = styled.div`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #343a40;
    font-size: 45px;
    cursor: pointer;
    z-index: 10;

    @media (min-width: 768px) {
        display: none;
    }
`