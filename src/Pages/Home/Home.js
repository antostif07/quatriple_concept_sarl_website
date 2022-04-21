import React from "react";
import {MainSlider} from "./MainSlider";
import {makeStyles} from "@mui/styles";
import {AboutUsResume} from "./AboutUsResume";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import {SectionTitle} from "../../Components/SectionTitle/SectionTitle";
import {colors} from "../../var/colors";
import {GoalCard} from "../AboutUs/Goals";
import {ServiceSection} from "../Service/Services";

const processes = [
    {
        id: "01", title: "ANALYSE",
    },
    {
        id: "02", title: "ORIENTATION",
    },
    {
        id: "03", title: "SUIVI",
    },
]
const useStyles = makeStyles({
    root: {
        // minHeight: "100vh",
    },
    processes: {
        color: colors.yellow,
    }
})
export const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MainSlider />
            <AboutUsResume />
            <section>
                <Container>
                    <ServiceSection />
                </Container>
            </section>
            <section style={{background: colors.blue}}>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <SectionTitle
                                titleFirst={"Ce que"} titleSecondary={"Nous faisons"}
                                firstColor={"#fff"} secondaryColor={colors.yellow}
                            />
                        </Grid>
                        {
                            processes.map((p, i) => (
                                <Grid item key={i} xs={12} sm={4} className={classes.processes}>
                                    <GoalCard id={p.id} title={p.title} bgTextColor={"#fff"}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </section>
        </div>
    )
}