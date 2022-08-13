import Palette from './Palette';
import { useParams, Navigate } from 'react-router-dom';
import { generatePalette } from './colorHelpers';

function VerifyPathById({ palettes }) {
    const { id } = useParams()
    const foundPaletteIndex = palettes.findIndex(c => c.id === id)
    if (foundPaletteIndex === -1) return <Navigate to="/" replace />
    // You can change from the objects list from seedColors
    return <Palette palette={generatePalette(palettes[foundPaletteIndex])} />
}

export default VerifyPathById