import React from 'react';
import {NavLink} from "react-router-dom";
// import Web from "../src/images/img1.svg";
import web from "../src/images/img2.svg";
import Common from "./Common.jsx"

const Home=()=>{
    return (
        <>
        <Common name="Welcome to OurCompany"  imgscr={web}   visit="/service" btname="Get Started " />
         </>
    );
};

export default Home;