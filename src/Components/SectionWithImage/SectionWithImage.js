import {Container, Grid} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types"
import {colors} from "../../var/colors";
import {SectionTitle} from "../SectionTitle/SectionTitle";

const useStyles = makeStyles({
    root: {
        width: "100%",
        padding: "72px 0",
    },
    sectionTitle: {
        color: "#fff",
        fontSize: "40px",
        fontFamily: 'Satisfy',
        fontWeight: 400,
        position: 'relative',
        letterSpacing: "2px",
        wordSpacing: "5px",
        marginBottom: "30px",
        "& .secondary": {
            color: colors.yellow,
        }
    },
    about: {
        paddingBottom: 0,
        "& .about-img": {
            position: "relative",
        },
        "& .about-img .img": {
            padding: "0 15px 30px 30px",
            position: "relative",
        },
        "& .about-img .img img": {
            position: "relative",
            zIndex: 2,
            background: "#272727",
            maxWidth: "100%",
            height: "auto",
            "&:hover": {
                transform: "scale(0.95)",
            }
        },
        "& .about-img-2": {
            width: "40% !important",
            position: "absolute",
            bottom: "0px",
            right: "45px",
            zIndex: 4,
            padding: "20px 15px",
            color: colors.blue,
            // textTransform: "uppercase",
            // fontFamily: "Satisfy",
            fontWeight: 400,
            letterSpacing: "5px",
            fontSize: "13px",
            lineHeight: "1.5em",
            textAlign: "center",
        },
        "& .about-buro": {
            background: "#fff",
        }
    },
})

export const SectionWithImage = ({
                                     titleFirst, titleSecondary, description, image, imageDesc,
    firstColor, secondaryColor, backgroundColor,
                                 }) => {
    const classes = useStyles()

    return (
        <section className={classes.root} style={{background: backgroundColor}}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} style={{color: "#fff"}}>
                        <SectionTitle
                            titleFirst={titleFirst} secondaryColor={secondaryColor}
                            firstColor={firstColor} titleSecondary={titleSecondary}
                        />
                        {description}
                    </Grid>
                    <Grid item xs={12} sm={6} className={"fadeInUp"}>
                        <div className={classes.about}>
                            <div className={"about-img"}>
                                <div className={"img"}>
                                    <img src={image} alt={"about"} />
                                </div>
                                <div className={"about-img-2 about-buro"}>
                                    {imageDesc}
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

SectionWithImage.propTypes = {
    titleFirst: PropTypes.string.isRequired,
    titleSecondary: PropTypes.string,
    description: PropTypes.node,
    image: PropTypes.string,
    imageDesc: PropTypes.string,
    firstColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
}