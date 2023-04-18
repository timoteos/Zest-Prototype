import React from "react";
import Jumbotron from "../comp/Jumbotron";
import Windows from "../comp/Windows";
import Sections from "../comp/Sections";
import Footer from "../comp/Footer";


import '../App.css';
import '../Animate.css'

// import '../App.css';

import NavBar from "../comp/NavBar";
const Landing = () => {
    return (
        <div> 
            <NavBar />
            <Jumbotron />
            <Windows />
            <Sections />
            <Footer />
        </div>
    );
}


export default Landing; 