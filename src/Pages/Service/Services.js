import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import {SectionTitle} from "../../Components/SectionTitle/SectionTitle";
import {colors} from "../../var/colors";
import {services} from "../../var/servicesList";
import {ServiceCard} from "./ServiceCard";
import React from "react";
import img from "../../assets/img/building.jpg";
import {PageHeader} from "../../Components/PageHeader";

export const ServiceSection = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle
                    titleFirst={"Nos"} titleSecondary={"Services"}
                    firstColor={colors.blue} secondaryColor={colors.blue}
                />
            </Grid>
            {
                services.map((s, i) => (
                    <Grid item key={i} xs={12} sm={4}>
                        <ServiceCard
                            title={s.title}
                            imgLogo={s.image}
                            description={s.description}
                            link={s.link}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export const Services = () => {
    return (
        <>
            <PageHeader title={"Nos Services"} bgImage={img} />
            <section>
                <Container>
                    <ServiceSection />
                </Container>
            </section>
        </>
    )
}