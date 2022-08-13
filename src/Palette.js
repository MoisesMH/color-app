// Because of specificity, we add the styling from the slider first
import Navbar from "./Navbar";
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
                <Navbar level={this.state.level} changeLevel={this.changeLevel}/>
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