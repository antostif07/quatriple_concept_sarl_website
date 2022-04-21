import {TextField} from "@mui/material";
import React from "react";
import PropTypes from 'prop-types'
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        padding: "0 15px",
        width: "100%",
    },
    icon: {
        position: "absolute",
        top: "16px",
        marginLeft: 20,
        fontSize: 14,
        color: "#fff",
        zIndex: 2,
    },
    label: {
        position: "relative",
        "& input": {
            color: "#fff",
            paddingLeft: 47,
            marginBottom: 6,
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        }
    }
})
export const Input = props => {
    const {type, name, iconClassName} = props
    const classes = useStyles()

    return (
       <div className={classes.root}>
           <span className={iconClassName + " " + classes.icon} />
           <span className={classes.label}>
               <input
                   type={type} name={name} placeholder={props.label}
               />
           </span>
       </div>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "date", "time", "password"]).isRequired,
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    label: PropTypes.node,
    iconClassName: PropTypes.string,
}