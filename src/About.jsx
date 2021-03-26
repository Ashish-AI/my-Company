import React from 'react';
import {NavLink} from "react-router-dom";
// import Web from "../src/images/img1.svg";
import web from "../src/images/img3.svg";
import Common from "./Common.jsx";
const About=()=>{
    return (
        <>
        <Common   imgscr={web}   visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;