import React from "react";
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    root: {
        minHeight: "50vh",
        background: colors.blue,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: "10%",
        color: "#fff",
        fontSize: 36,
        fontFamily: "Poppins",
        position: "relative",
        "&:after": {
            content: "''",
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            zIndex: 0,
            background: "rgba(0, 0, 0 , .5)"
        },
        "& h1": {
            position: "relative",
            zIndex: 5,
            "&:after": {
                content: "''",
                position: "absolute", bottom: -40, left: "25%",
                width: "50%", height: "6px",
                background: colors.yellow,
            }
        }
    }
})
export const PageHeader = (props) => {
    const classes = useStyles()

    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: `url(${props.bgImage})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <h1>{props.title}</h1>
        </div>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    bgImage: PropTypes.string,
}