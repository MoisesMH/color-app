import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./Button";
import "./ColorBox.css"

class ColorBox extends Component {
    constructor(props) {
        super(props)
        // this.copyToClipboard = this.copyToClipboard.bind(this)
        this.state = { copied: false }
    }

    // Copy to clipboard with a single command
    // async copyToClipboard() {
    //     await navigator.clipboard.writeText(this.props.color)
    // }
    // <div className="ColorBox" style={{ backgroundColor: this.props.color }} onClick={this.copyToClipboard}><div>
    // Another way to copy to clipboard is using the library react-copy-to-clipboard

    render() {
        return (
            <CopyToClipboard text={this.props.color}>
                <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{this.props.name}</span>
                        </div>
                        <Button className="copy-button" text="Copy" />
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;