import React from "react";
import Proptypes from 'prop-types'
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        cursor: "pointer",
        backgroundColor: "#178fdb",
        position: "relative",
        margin: 0,
        fontSize: "13px",
        lineHeight: "1.692307692307692em",
        fontWeight: 600,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        outline: 0,
        boxSizing: "border-box",
        transition: "color .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out",
        padding: "14px 28px",
        color: "#fffb02",
        border: "1px solid transparent",
        fontFamily: "Poppins,sans-serif",
        borderRadius: 0,
    },
})

export const Button = props => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
}

Button.propTypes = {
    children: Proptypes.node,
}