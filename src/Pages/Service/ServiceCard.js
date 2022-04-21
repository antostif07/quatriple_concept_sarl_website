import React from "react";
import {makeStyles} from "@mui/styles";
import {Link} from "@reach/router";
import PropTypes from 'prop-types'
import {colors} from "../../var/colors";

const useStyles = makeStyles({
    root: {
        padding: "30px",
        marginBottom: 30,
        "& img": {
            width: 60,
        },
        "&:hover": {
            background: colors.yellow,
            transition: "all 0.2s ease-in-out",
            "& .line:before": {
                width: "100%",
            }
        }
    },
    mainLink: {
        display: "inline-block",
    },
    title: {
        fontSize: 16,
        fontWeight: 300,
        marginBottom: 15,
        letterSpacing: 5,
        // textTransform: "uppercase",
    },
    line: {
        width: "100%",
        marginBottom: 5,
        position: "relative",
        "&:before": {
            left: 0,
            width: "50px",
            bottom: "10px",
            height: 1,
            content: "''",
            position: "absolute",
            transition: "all .3s ease-in-out",
            backgroundColor: colors.blue,
        }
    }
})

export const ServiceCard = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Link to={`/services${props.link}`} className={classes.mainLink}>
                <img src={props.imgLogo}  alt={props.title}/>
                <h5 className={classes.title}>{props.title}</h5>
                <div className={classes.line + ' line'} />
                <p>{props.description}</p>
            </Link>
        </div>
    )
}

ServiceCard.propTypes = {
    imgLogo: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}