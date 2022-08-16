import React from "react"
// import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import { styled } from "@mui/material"
import { useNavigate } from "react-router-dom";

const PREFIX = 'PaletteList';
const classes = {
    root: `${PREFIX}`,
    container: `${PREFIX}-container`,
    nav: `${PREFIX}-nav`,
    palettes: `${PREFIX}-palettes`
}

const Root = styled('div')({
    [`&.${classes.root}`]: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    [`& .${classes.container}`]: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    [`& .${classes.nav}`]: {
        display: "flex",
        width: "100%",
        justifyContent: "space-betweem",
        color: "white"
    },
    [`& .${classes.palettes}`]: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        // This created three columns with two gaps
        gridTemplateColumns: "repeat(3, 30%)",
        // Its space between the columns is 5% to complete the 100% space width
        gridGap: "5%"
    }
})

function PaletteList({ palettes }) {
    // const pals = palettes.map(pal => (
    //     <p><Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link></p>
    // ))
    const navigate = useNavigate()

    const minipals = palettes.map(pal => {
        const goToPalette = () => navigate(`/palette/${pal.id}`)
        return <MiniPalette {...pal} handleClick={goToPalette} />
    })

    return (
        <Root className="PaletteList">
            <div className="PaletteList-container">
                <nav className="PaletteList-nav">
                    <h1>React Colors</h1>
                </nav>
                <div className="PaletteList-palettes">
                    {minipals}
                </div>
            </div>
        </Root>
    )
}

export default PaletteList