// To get the slider working
import Slider from "rc-slider";
import "rc-slider/assets/index.css"

import "./Navbar.css"
import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { Link } from "react-router-dom";

function Navbar({ level, format, changeLevel, changeFormat }) {
    const [toggleOpen, setToggleOpen] = useState(false)

    const closeSnackbar = () => {
        setToggleOpen(false)
    }

    const handleChange = (evt) => {
        setToggleOpen(true)
        changeFormat(evt.target.value)
    }

    return (
        <header className="Navbar">
            <div className="Navbar-logo">
                <Link to="/">reactcolorpicker</Link>
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
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={toggleOpen}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
                    // For accesibility purposes
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={closeSnackbar}
                    action={[
                        <IconButton 
                            onClick={closeSnackbar} 
                            color='inherit' 
                            key="close" 
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        </header>
    )
}

export default Navbar