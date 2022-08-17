import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
    render() {
        const colorBoxes = [...this.props.colors.values()].map(c => (
            <ColorBox 
                key={`${c.id}${c.name.slice(-3).trim()}`}
                name={c.name}
                backgroundColor={c.hex}
                showLink={false}
            />
        ))
        return (
            <div className="Palette">
                <h1>Single Color Palette</h1>
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
            </div>
        )
    }
}

export default SingleColorPalette