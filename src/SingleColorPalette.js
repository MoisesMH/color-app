import React, { Component } from "react";
import Button from "./Button";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this.state = { format: "hex" }
        this.changeFormat = this.changeFormat.bind(this)
        this.goBackFunc = this.goBackFunc.bind(this)
    }

    goBackFunc() {
        this.props.navigate(`/palette/${this.props.id}`, { replace: true })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }
    
    render() {
        const colorBoxes = [...this.props.colors.values()].map(c => (
            <ColorBox 
                key={`${c.id}${c.name.slice(-3).trim()}`}
                name={c.name}
                backgroundColor={c[this.state.format]}
                showLink={false}
            />
        ))
        return (
            <div className="SingleColorPalette Palette">
                <Navbar
                    format={this.state.format}
                    changeFormat={this.changeFormat}
                    showLevels={false}
                />
                <div className="Palette-colors">
                    { colorBoxes }
                    <div className="ColorBox go-back" onClick={this.goBackFunc}>
                        <Button className="back-button" text="GO BACK" />
                    </div>
                </div>
                <PaletteFooter
                    paletteName={this.props.paletteName}
                    emoji={this.props.emoji}
                />
            </div>
        )
    }
}

export default SingleColorPalette