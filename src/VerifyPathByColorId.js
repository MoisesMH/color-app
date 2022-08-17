import React from "react";
import SingleColorPalette from "./SingleColorPalette";
import { useParams, Navigate } from "react-router-dom"
import { generatePalette } from "./colorHelpers";

function VerifyPathByColorId({ palettes }) {
    const { paletteId, colorId } = useParams()
    const foundPaletteIndex = palettes.findIndex(c => c.id === paletteId)
    if (foundPaletteIndex === -1) return <Navigate to="/" replace />
    const { colors } = generatePalette(palettes[foundPaletteIndex])
    const colorSet = new Set()
    for(let i=100, max=900; i<=max; i+=100) {
        const foundColorIndex = colors[i].findIndex(c => c.id === colorId)
        if(foundColorIndex === -1) return <Navigate to={`/palette/${paletteId}`} replace />
        colorSet.add(colors[i][foundColorIndex])
    }
    return <SingleColorPalette {...generatePalette(palettes[foundPaletteIndex])} colors={colorSet} />
}

export default VerifyPathByColorId