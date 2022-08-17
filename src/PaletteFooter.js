import React from "react";

function PaletteFooter({ paletteName, emoji }) {
    return (
        <div className="Palette-footer">
            <footer>
                {paletteName}
                <span className="emoji">{emoji}</span>
            </footer>
        </div>
    )
}

export default PaletteFooter