import React from "react";
import {PageHeader} from "../../Components/PageHeader";
import bgImage from '../../assets/img/events-comm.jpg'
import {Container} from "@mui/material";
import {colors} from "../../var/colors";
import {SectionTitle} from "../../Components/SectionTitle/SectionTitle";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    list: {
        "& li": {
            marginBottom: 20,
            "& b": {
                fontSize: 20,
            }
        }
    }
})

export const EventsCommunications = () => {
    const classes = useStyles()

    return (
        <>
            <PageHeader title={"Events & Communications"} bgImage={bgImage} />
            <section>
                <Container>
                    <p>
                        <b>Quatriple Concept</b> adopte une approche très innovante et inspirante partant des
                        programmes évenementiels thématiques où nous faisons participer le secteur tant public
                        que privé.
                    </p>
                    <p>
                        Nous avons pour objectif de participer tant soit peu à la croissance de la culture
                        rayonnante locale en mettant un accent particulier sur la découverte et la culture, afin de
                        réunir les acteurs pouvant participer au développement de secteurs cités par le cible et la
                        priorité, en mettant en place des projets thématiques à court et moyen terme.
                    </p>
                    <p>
                        Nos événements thématiques ne sont pas seulement des simples lieux de retrouvailles, mais des
                        cadres socio-économiques réunissant les opérateurs économiques, les entrepreneurs de tout bord,
                        les banques, télécom et industries.
                    </p>
                    <p>
                        Ceci étant dit, nos événements sont les cadres à dénicher les réelles opportunités tant
                        commerciales, culturelles, etc...
                    </p>
                </Container>
            </section>
            <section style={{background: colors.blue, color: "#fff", }}>
                <Container>
                    <SectionTitle
                        titleFirst={"Nos réalisations"} titleSecondary={"événementielles"}
                        firstColor={"#fff"} secondaryColor={colors.yellow}
                    />
                    <ul className={classes.list}>
                        <li>
                            <b>Evénements - thématiques</b>
                            <p>Nous initions nos propres événements selon secteur et associons les tiers pour sa
                                mise en éxecution.</p>
                        </li>
                        <li>
                            <b>Team - Building</b>
                            <p>
                                Nous organisons les séances de team building pour vous dans le but de créer une
                            cohésion et de renforcer les rélations impersonnelles entre les membres d'une même
                            équipe, en vue de favoriser plus de résultats.</p>
                            <p>
                                Le Team building crée un climat de confiance et améliore l'approche
                                communicationnelle des agents et cadre d'une entreprise.
                            </p>
                        </li>

                        <li>
                            <b>Conférences & séminaires</b>
                            <p>Une équipe d'hôtesses professionnelles bien formées et des matériels sont disponibles
                            pour accompagner les entreprises à l'organisation des conférences, séminaires et autres
                                événements corporate.</p>
                        </li>
                        <li>
                            <b>Foires et festivals</b>
                            <p>
                                Nous créons l'attraction dans une allure commerciale dont toutes les couches sont concernées
                                au tour de la culture, vente, expositions et concert.
                            </p>
                        </li>
                    </ul>
                </Container>
            </section>
            <section>
                <Container>
                    <SectionTitle
                        titleFirst={"Nos réalisations en communication"}
                        firstColor={colors.blue}
                    />
                    <ul>
                        <li>Conseil en communication et marketing urbain et territorial.</li>
                        <li>Communicqtion de crise</li>
                        <li>Communication graphique</li>
                        <li>Gestion des contenues (Personalty branding)</li>
                    </ul>
                </Container>
            </section>
        </>
    )
}