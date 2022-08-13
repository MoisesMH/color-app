// To get the slider working
import Slider from "rc-slider";
import "rc-slider/assets/index.css"

import "./Navbar.css"
import React from "react";

function Navbar({ level, changeLevel }) {
    return (
        <header className="Navbar">
            <div className="Navbar-logo">
                <a href="#">reactcolorpicker</a>
            </div>
            <div className="Navbar-options">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider
                        className="slider"
                        defaultValue={level}
                        min={100}
                        max={900}
                        // Necessarily 100 because palette colors increase by 100
                        step={100}
                        onChange={changeLevel}
                    />
                </div>
            </div>
        </header>
    )
}

export default Navbar