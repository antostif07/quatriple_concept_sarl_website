import React from "react";
import {Topbar} from "./Topbar";
import {TopMenu} from "./TopMenu";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        zIndex: 100,
    }
})
export const Navbar = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Topbar />
            <TopMenu {...props} />
        </div>
    )
}