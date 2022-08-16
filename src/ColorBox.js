import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./ColorBox.css"

class ColorBox extends Component {
    constructor(props) {
        super(props)
        // this.copyToClipboard = this.copyToClipboard.bind(this)
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    // Copy to clipboard with a single command
    // async copyToClipboard() {
    //     await navigator.clipboard.writeText(this.props.backgroundColor)
    // }
    // <div className="ColorBox" style={{ backgroundColor: this.props.backgroundColor }} onClick={this.copyToClipboard}><div>
    // Another way to copy to clipboard is using the library react-copy-to-clipboard

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        return (
            <CopyToClipboard text={this.props.backgroundColor} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{ backgroundColor: this.props.backgroundColor }}>
                    <div 
                        style={{ backgroundColor: this.props.backgroundColor }}
                        className={`copy-overlay ${this.state.copied && "show"}`}
                    />
                    <div className={`copy-msg ${this.state.copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{ this.props.backgroundColor }</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{this.props.name}</span>
                        </div>
                        <Button className="copy-button" text="Copy" />
                    </div>
                    <Link to="/" onClick={(e) => e.stopPropagation()} >
                        <span className="see-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;