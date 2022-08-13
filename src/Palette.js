// To get the slider working
import Slider from "rc-slider";
import "rc-slider/assets/index.css"
// Because of specificity, we add the styling from the slider first
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const { colors } = this.props.palette
        const colorBoxes = colors[this.state.level].map(c => <ColorBox {...c} />)
        return (
            <div className="Palette">
                <Slider 
                    className="slider"
                    defaultValue={this.state.level}
                    min={100}
                    max={900}
                    // Necessarily 100 because palette colors increase by 100
                    step={100}
                    onChange={this.changeLevel}
                />
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {/* Bunch of color boxes */}
                    { colorBoxes }
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette