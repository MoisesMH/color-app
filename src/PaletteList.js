import React from "react"
import { Link } from "react-router-dom"

function PaletteList({ palettes }) {
    const pals = palettes.map(pal => (
        <p><Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link></p>
    ))
    return (
        <div className="PaletteList">
            <h1>React Colors</h1>
            { pals }
        </div>
    )
}

export default PaletteList