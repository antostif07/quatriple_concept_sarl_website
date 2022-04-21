import {Navbar} from "../Navbar";
import React, {useEffect} from "react";
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";
import {Footer} from "../Footer";

const useStyles = makeStyles({
    toTheTop: {
        opacity: 1,
        visibility: "hidden",
        transition: "opacity .15s ease, visibility 0s .15s",
        position: "fixed",
        right: 25,
        bottom: 25,
        margin: 0,
        zIndex: 100000,
        "& span": {
            position: 'relative',
            display: 'block',
            width: 60,
            height: 60,
            borderRadius: "100%",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1,
            textAlign: "center",
            color: colors.yellow,
            background: colors.blue,
            boxShadow: "4px 6px 15px 0 rgb(0 0 0 / 8%)",
            overflow: "hidden",
            transition: "all .2s ease-in-out"
        }
    }
})
export const Layout = (props) => {
    const {page} = props
    const classes = useStyles()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div>
            <Navbar {...props} />
            <a className={classes.toTheTop}>
                <span>TOP</span>
            </a>
            <div style={{height: "120px"}} />
            {page()}
            <Footer />
        </div>
    )
}