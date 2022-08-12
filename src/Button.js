import React from "react";

function Button({ func = null, text = 'Default', className = '' }) {
    return (
        <button 
            className={className} 
            onClick={func} 
        >{text}</button>
    )
}

export default Button