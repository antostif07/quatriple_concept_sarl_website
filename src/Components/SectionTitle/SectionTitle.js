import React from "react";
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    sectionTitle: {
        color: "#fff",
        fontSize: "40px",
        fontFamily: 'Poppins',
        fontWeight: 400,
        position: 'relative',
        marginBottom: "30px",
        "& .secondary": {
            color: colors.yellow,
        }
    },
})

export const SectionTitle = props => {
    const classes = useStyles()

    return (
        <h2 className={classes.sectionTitle} style={{color: props.firstColor}}>
            {props.titleFirst} <span className={"secondary"} style={{color: props.secondaryColor}}>{props.titleSecondary}</span>
        </h2>
    )
}

SectionTitle.propTypes = {
    firstColor: PropTypes.string,
    titleFirst: PropTypes.node.isRequired,
    secondaryColor: PropTypes.string,
    titleSecondary: PropTypes.node,
}