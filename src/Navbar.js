// To get the slider working
import Slider from "rc-slider";
import "rc-slider/assets/index.css"

import "./Navbar.css"
import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function Navbar({ level, format, changeLevel, changeFormat }) {
    const handleChange = (evt) => {
        changeFormat(evt.target.value)
    }

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
            <div className="select-container">
                <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="color-format-label">Color Format</InputLabel>
                    <Select
                        labelId="color-format-label"
                        id="color-format"
                        onChange={handleChange}
                        value={format}
                    >
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </header>
    )
}

export default Navbar