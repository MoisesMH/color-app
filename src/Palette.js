// Because of specificity, we add the styling from the slider first
import Navbar from "./Navbar";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500, format: "hex" }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors } = this.props.palette
        const colorBoxes = colors[this.state.level].map(c => <ColorBox name={c.name} backgroundColor={c[this.state.format]} />)
        return (
            <div className="Palette">
                <Navbar level={this.state.level} format={this.state.format} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
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