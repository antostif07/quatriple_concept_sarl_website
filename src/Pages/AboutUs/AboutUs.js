import {PageHeader} from "../../Components/PageHeader";
import React from "react";
import img from '../../assets/img/building.jpg'
import {colors} from "../../var/colors";
import office from "../../assets/img/office.jpg";
import {SectionWithImage} from "../../Components/SectionWithImage";
import {Goals} from "./Goals";
import {Container} from "@mui/material";
import {teamList} from "../../var/teamList";
import Grid from "@mui/material/Grid";
import {TeamCard} from "../../Components/TeamCard";
import {SectionTitle} from "../../Components/SectionTitle/SectionTitle";

export const AboutUs = () => {
    const description = (
        <>
            <p><b>QUATRIPLE CONCEPT SARL</b> est une société de droit Congolais à vocation internationale créée 2015 basée en République Démocratique du Congo, et qui aspire à devenir l’une des références Congolaises au pays comme à l’internationale en terme de la qualité de ses services tant aux entreprises qu’aux particuliers.</p>
            <p>Nous sommes une entreprise qui opère selon les standards internationaux et qui veut se positionner parmi les meilleurs.</p>
            <p>Notre approche de développement des affaires axée sur le sens de l’autre met un accent priorisant l’analyse et l’orientation dans une démarche tenant à proposer des solutions efficientes et sur mesure adaptées aux nécessités de notre agréable clientèle.</p>
            <p>Chaque année qui passe, nous tenons au seuil de la performance pour palper les résultats qui impactent dans une région où les solutions sont à porter de tous sans discrimination.</p>
            <p>Nos valeurs sont consenties dans l’optimisation de création et d’assistance soutenues par la proximité, la flexibilité et l’intégrité.</p>
            <p>Nous aidons les entreprises et les particuliers dans le développement et la croissance de leurs activités à travers nos champs d’actions.</p>
        </>
    )
    return (
        <>
            <PageHeader title={"A Propos de nous"} bgImage={img} />
            <SectionWithImage
                titleFirst={"Quatriple"} titleSecondary={"Concept Sarl"}
                firstColor={"#fff"} secondaryColor={colors.yellow}
                backgroundColor={colors.blue}
                description={description}
                image={office} imageDesc={"Nos Bureaux"}
            />
            <section>
                <Container>
                    <Goals />
                </Container>
            </section>
            <section style={{background: colors.blue}}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <SectionTitle
                                titleFirst={"Notre"} titleSecondary={"Equipe"}
                                secondaryColor={colors.yellow} firstColor={"#fff"}
                            />
                        </Grid>
                        {
                            teamList.map((t,i) => (
                                <Grid item  key={i} xs={12} sm={4}>
                                    <TeamCard employee={t} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </section>
        </>
    )
}