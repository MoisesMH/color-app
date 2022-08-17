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
        const { colors, paletteName, emoji, id } = this.props.palette
        const colorBoxes = colors[this.state.level].map(c => (
            <ColorBox
                key={c.id}
                name={c.name} 
                backgroundColor={c[this.state.format]} 
                moreUrl={`/palette/${id}/${c.id}`} 
                showLink
            />
        ))
        return (
            <div className="Palette">
                <div className="Palette-header">
                    <Navbar level={this.state.level} format={this.state.format} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
                </div>
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
                <div className="Palette-footer">
                    <footer>{ paletteName }</footer>
                    <span className="emoji">{ emoji }</span>
                </div>
            </div>
        )
    }
}

export default Palette