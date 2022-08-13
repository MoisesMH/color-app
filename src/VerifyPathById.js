import seedColors from './seedColors';
import Palette from './Palette';
import { useParams, Navigate } from 'react-router-dom';
import { generatePalette } from './colorHelpers';

function VerifyPathById() {
    const { id } = useParams()
    const foundPaletteIndex = seedColors.findIndex(c => c.id === id)
    if (foundPaletteIndex === -1) return <Navigate to="/" replace />
    // You can change from the objects list from seedColors
    return <Palette palette={generatePalette(seedColors[foundPaletteIndex])} />
}

export default VerifyPathById