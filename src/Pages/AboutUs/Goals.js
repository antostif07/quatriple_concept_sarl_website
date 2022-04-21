import {Grid} from "@mui/material";
import React from "react";
import PropTypes from 'prop-types'
import {makeStyles} from "@mui/styles";

const goals = [
    {
        id: "01",
        title: "Notre vision",
        description: "Bâtir un réseau solide au sens  propre des affaires, afin de fournir un service accessible " +
            'adéquat pour tous; et créer la satisfaction au coeur des nécessités. Ce qui ressort même facteur-clé favorisant' +
            ' un climat de confiance.'
    },
    {
        id: "02",
        title: "Notre Mission",
        description: "Analyser et orienter dans le processus amenant à la satisfaction totale des personnes et entités au niveau local qu'international.",
    },
    {
        id: "03",
        title: "Notre Objectif",
        description: "Proliférer des solutions à porter des mains pour tous par des procédés innovants et efficaces dans l'analyse et orientation."
    },
]

const useStyles = makeStyles({
    root: {},
    title: {
        marginTop: 40,
        textAlign: "center",
        position: "relative",
        marginBottom: 24,
        "& .bg-text": {
            fontSize: 84,
            position: "absolute", top: -20, left: 0,
            textAlign: "center", width: "100%",
            zIndex: 0, color: "transparent", opacity: .2,
        },
    }
})

export const GoalCard = (props) => {
    const {bgTextColor} = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                {props.title}
                <span className={"bg-text"} style={{"-webkit-text-stroke": bgTextColor ? `1px ${bgTextColor}` : "1px #a9a9a9"}}>{props.id}</span>
            </h1>
            <div>{props.description}</div>
        </div>
    )
}

export const Goals = () => {
    return (
        <Grid container spacing={2}>
            {
                goals.map((g,i) => (
                    <Grid item xs={12} sm={4} key={i}>
                        <GoalCard id={g.id} title={g.title} description={g.description} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

GoalCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    bgTextColor: PropTypes.string,
}