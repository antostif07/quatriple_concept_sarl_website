import {infoEmail, tel} from "../../var";
import React from "react";
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
    infos: {
        color: "#fff",
        marginRight: 20,
        "& .icon": {
            fontSize: 14,
            marginTop: -3,
            color: colors.blue,
        },
        "& .text": {
            paddingLeft: 10,
        },
        "&:hover": {
            color: colors.blue,
        }
    },
})

export const Infos = (props) => {
    const {xs, type} = props
    const classes = useStyles()

    const mail = (
        <a className={classes.infos} href={`mailto:${infoEmail}`} target="_self">
            <span className={"ti-email icon"}/>
            <span className={"text"}>{infoEmail}</span>
        </a>
    )

    const telScreen = (
        <a className={classes.infos} href={`tel:${tel}`} target="_self">
            <span className={"ti-mobile icon"}/>
            <span className={"text"}>{tel}</span>
        </a>
    )

    const address = (
        <a className={classes.infos} href="#" target="_self">
            <span className={"ti-location-pin icon"}/>
            <span className={"text"}>47, Av. Roi Baudoin, Kinshasa, Gombe</span>
        </a>
    )

    return (
        <Grid item xs={xs}>
            {
                type === "mail" ? mail : type === 'tel' ? telScreen : type === "address" ? address : ""
            }
        </Grid>
    )
}