import React, {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";
import {sliders} from "../../var/sliders";
import {Container} from "@mui/material";

const useStyles = makeStyles({
    root: {
        background: colors.blue,
        padding: 0,
        margin: "0px auto",
        height: "100vh",
        position: "relative",
        overflow: "visible",
        left: 0,
        top: 0,
        transform: "translate(0px, 0px)",
        width: "100%",
        zIndex: -10,
    },
    arrow: {
        opacity: 1,
        top: "50%",
        width: 55,
        height: 55,
        position: 'absolute',
        backgroundColor: "#fff",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: 'pointer',
        zIndex: -3000,
        transition: "all .4s ease-out",
        "&.left": {
            transform: "translate(25px, 36px)",
            left: 0,
        },
        "&.right": {
            transform: "translate(-80px, 36px)",
            left: "100%",
        },
        "& .icon": {
            position: "relative",
            color: colors.blue,
            fontSize: 35,
            transition: "all .4s ease-out",
        },
        "&:hover": {
            backgroundColor: colors.blue,
            "& .icon": {
                color: colors.yellow,
            }
        }
    },
    slides: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        "& .slide": {
            opacity: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            position: "absolute",
            transition: "opacity 0.8s ease-in-out",
            '&.active': {
                opacity: 1,
            },
            "&:before": {
                content: "''",
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "rgba(0,0,0,.2)",
            }
        },
        "& .text-main": {
            zIndex: 6,
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1,
            width: "50%",
            position: "relative",
            "&:after": {
                content: "''",
                height: 8,
                width: "50%",
                background: colors.yellow,
                position: "absolute",
                left: 0,
                marginTop: 10,
            }
        },
        "& .text-secondary": {
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 24,
            lineHeight: 1,
        }
    }
})

export const MainSlider = () => {
    const classes = useStyles()
    const [activeSlide, setActiveSlide] = useState(0)

    const changeSlider = (toSelected) => {
        const newSlide = activeSlide + toSelected

        setActiveSlide(newSlide)
    }
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            if (activeSlide + 1 === sliders.length) {
                setActiveSlide(0)
            } else {
                const newSlide = activeSlide + 1
                setActiveSlide(newSlide)
            }
        }, 6000)

        return () => clearInterval(sliderInterval)
    }, [activeSlide])

    return (
        <div className={classes.root}>
            <div style={{position: "absolute", height: "100%", width: "100%"}}>
                <div className={classes.arrow + " left"} onClick={() => changeSlider(1)}>
                    <span className={"ti-arrow-left icon"} />
                </div>
                <div className={classes.arrow + " right"} onClick={() => changeSlider(-1)}>
                    <span className={"ti-arrow-right icon"} />
                </div>
            </div>
            <div className={classes.slides}>
                {
                    sliders.map((slider, i) => (
                        <div
                            className={`slide ${activeSlide === i ? 'active' : ''}`} key={i}
                            style={{backgroundImage: `url(${slider.imageBg})`, backgroundSize: "cover", }}
                        >
                            <Container>
                                {slider.mainText && <slider.mainText className={"text-main"} />}
                                {slider.secondary && <slider.secondary className={"text-secondary"} />}
                            </Container>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}