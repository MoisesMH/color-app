import React from "react";
import { styled } from "@mui/material";

const PREFIX = 'MiniPalette';
const classes = {
    main: `${PREFIX}`,
    colors: `${PREFIX}-colors`,
    title: `${PREFIX}-title`,
    emoji: `${PREFIX}-emoji`,
    miniColor: `${PREFIX}-miniColor`
}

const Main = styled('div')({
    [`&.${classes.main}`]: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    [`& .${classes.colors}`]: {
        backgroundColor: "#dae1e4",
        // for the parent
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        // A workaround to overcome the dispaired edges problem
        overflow: "hidden"
    },
    [`& .${classes.title}`]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    [`& .${classes.emoji}`]: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    [`& .${classes.miniColor}`]: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
})

function MiniPalette({ paletteName, emoji, colors, handleClick }){
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ))
    return (
        <Main className={classes.main} onClick={handleClick}>
            <div className={classes.colors}>{ miniColorBoxes }</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{ emoji }</span>
            </h5>
        </Main>
    )
}

export default MiniPalette