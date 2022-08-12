import React, { Component } from "react";
import Button from "./Button";
import "./ColorBox.css"

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.copyToClipboard = this.copyToClipboard.bind(this)
    }

    copyToClipboard() {
        console.log(this.props.color)
    }

    render() {
        return (
            <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{this.props.name}</span>
                    </div>
                    <Button className="copy-button" func={this.copyToClipboard} text="Copy" />
                </div>
                <span className="see-more">More</span>
            </div>
        )
    }
}

export default ColorBox;