import React from "react";
import {makeStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import {colors} from "../../var/colors";
import {Infos} from "../Infos";


const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'flex',
        alignItems: "center",
        width: '100%',
        height: 46,
        fontSize: "13px",
        lineHeight: 1,
        color: "#fff",
        background: '#1c1c1c',
        boxSizing: 'border-box',
        zIndex: 111,
        "& .valign": {
            paddingLeft: "20px",
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "0 20px",
            paddingRight: 0,
        }
    },
    gridContainer: {
        height: "100%",
    },
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
    social: {
        "& a": {
            fontSize: 13,
            marginRight: 16,
            color: "#fff"
        },
        "& a:hover": {
            color: colors.blue,
        }
    },
    lang: {
        background: "#178fdb",
        padding: "0 20px",
        fontSize: 13,
        fontWeight: 500,
        color: "#fffb02",
    }
})

export const Topbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={"valign"}>
                <Grid container className={classes.gridContainer+ " alignItemsCenter justifyCenter"}>
                    <Grid item style={{flexGrow: 1}} >
                        <Grid container>
                            <Infos type={"mail"} />
                            <Infos type={"tel"} />
                            <Infos type={"address"} />
                        </Grid>
                    </Grid>
                    <Grid item style={{height: "100%"}}>
                        <Grid container className={classes.social+ " alignItemsCenter justifyEnd"} style={{height: "100%"}}>
                            <Grid item component={"a"} href="#" target="_blank">
                                <span className="ti-facebook icon"/>
                            </Grid>
                            <Grid item component={"a"} href="#" target="_blank">
                                <span className="ti-twitter icon"/>
                            </Grid>
                            <Grid item component={"a"} href="#" target="_blank">
                                <span className="ti-linkedin icon"/>
                            </Grid>
                            <Grid item component={"a"} href="#" target="_blank">
                                <span className="ti-instagram icon"/>
                            </Grid>
                            <Grid item style={{height: "100%"}}>
                                <Grid container style={{height: "100%"}} className={classes.lang + " alignItemsCenter"}>
                                    <Grid item>
                                        Français
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}