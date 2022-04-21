import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {makeStyles} from "@mui/styles";
import {SectionTitle} from "../../Components/SectionTitle/SectionTitle";
import {colors} from "../../var/colors";
import Grid from "@mui/material/Grid";
import {whyChooseUs} from "../../var/whyChooseUs";
import {sliders} from "../../var/sliders";

export const useStyles = makeStyles({
    root: {
        "& p": {
            fontSize: 20,
            padding: "24 0",
            textAlign: "center",
        }
    },
    h2: {
        textTransform: "uppercase",
        fontSize: 72,
        lineHeight: 1,
        textAlign: "center",
        color: colors.blue,
    },
    slides: {
        position: "relative",
        height: 120,
        "& .slide": {
            position: "absolute",
            top: 0, left: 0,
            opacity: 0,
            transition: "all .4s ease-in-out",
            "&.active": {
                opacity: 1,
            }
        }
    }
})

export const Choices = () => {
    const classes = useStyles()

    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            if (activeSlide + 1 === sliders.length) {
                setActiveSlide(0)
            } else {
                const newSlide = activeSlide + 1
                setActiveSlide(newSlide)
            }
        }, 4000)

        return () => clearInterval(sliderInterval)
    }, [activeSlide])

    return (
        <Container>
            <Grid container style={{justifyContent: "center"}} className={classes.root}>
                <Grid item xs={12}>
                    <SectionTitle
                        firstColor={"rgba(0, 0, 0, .8)"}
                        style={{textTransform: "uppercase", textAlign: "center"}}
                     titleFirst={"Decouvrez Pourquoi Nous choisir?"}/>
                </Grid>
                <Grid item xs={12} className={classes.slides}>
                {
                    whyChooseUs.map((w, i) => (
                        <Grid container key={i} className={`slide ${activeSlide === i ? "active" : ''}`}>
                            <Grid item xs={12}>
                                <h2 className={classes.h2}>{i+1}.</h2>
                            </Grid>
                            <Grid component={"p"} item xs={12}>
                                {w.mainText}
                            </Grid>
                        </Grid>
                    ))
                }
                </Grid>
            </Grid>
        </Container>
    )
}