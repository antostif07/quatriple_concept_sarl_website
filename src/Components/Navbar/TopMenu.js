import React from "react";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from '../../assets/img/logo.png'
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";
import {pages} from "../../var/pages";
import {Button} from "../Button";

const useStyles = makeStyles({
    root: {
        "& .search": {
            fontSize: 20,
            "&:hover": {
                color: colors.blue,
            }
        }
    },
    nav: {
        "& ul": {
            listStyle: "none",
            display: "flex",
            "& li": {
                padding: "0 20px",
                '& a': {
                    fontSize: 15,
                    lineHeight: "25px",
                    fontWeight: 600,
                    position: "relative",
                    "&:after": {
                        content: "''",
                        height: 2,
                        width: 0,
                        background: colors.blue,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        transition: "all .4s ease-out",
                    },
                    "&:hover": {
                        color: colors.blue,
                        "&:after": {
                            width: "100%",
                        }
                    },
                    "&.active": {
                        color: colors.blue,
                    }
                }
            }
        }
    }
})
export const TopMenu = (props) => {
    const {path} = props
    const classes = useStyles()

    return (
        <div style={{background: "white",}}>
            <Container>
                <Grid container className={"justifySpaceBetween alignItemsCenter " + classes.root}>
                    <Grid item component={"a"}>
                        <img src={logo} style={{width: 128}}  alt={"Quatriple Concept Sarl"}/>
                    </Grid>
                    <Grid item component={'nav'} className={classes.nav}>
                        <ul>
                            {
                                pages.map((p, i) => p.main && (
                                    <li key={i}>
                                        <a href={p.link} className={p.link === path ? "active" : ""}>
                                        <span className={"outer"}>
                                            <span className={"text"}>
                                                {p.title}
                                            </span>
                                        </span>
                                            <span />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} style={{alignItems: "center"}}>
                            <Grid item>
                                <Button>Créer un devis</Button>
                            </Grid>
                            <Grid item>
                                <a href={"#"} className={"ti-search search"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}