import {PageHeader} from "../../Components/PageHeader";
import React from "react";
import bgImage from '../../assets/img/voyage.jpg'
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

export const Voyage = () => {
    const classes = useStyles()

    return (
        <>
            <PageHeader title={"Voyages"} bgImage={bgImage} />
            <section>
                <Container>
                    <p>Nous accompagnons les entreprises, les commerçants, les enretreneurs, les étudiants et les
                    particuliers dans leurs démarches pour un voyage réussi.</p>
                    <p>Par la magie de la découverte, nous organisons les excursions touristiques dédiées aux
                        couples, familles, professionnelles et particuliers.</p>
                    <p>Nous organisons votre séjour à l'étranger, nous planifions vos faits à éxecuter, nous vous
                        laissons être plongé dans le confort dont vous vous rêvez pour un séjour plus que meilleur
                        et inoubliable.</p>
                </Container>
            </section>
            <section style={{background: colors.blue, color: "#fff", }}>
                <Container>
                    <SectionTitle
                        titleFirst={"Type"} firstColor={"#fff"} secondaryColor={colors.yellow}
                        titleSecondary={"des visas"}
                    />
                    <ul className={classes.list}>
                        <li>
                            <b>Etudes</b>
                            <p>De l'orientation, au choiw de l'université et à l'inscription jusqu'à l'ambassade.</p>
                        </li>
                        <li>
                            <b>Business</b>
                            <p>En vue de vous ouvrir dans le monde des affaires extérieures, nous vous accompagnons
                                dans le processus de vos démarches de visa de type BUSINESS, EXHIBITIONS, NETWORKING.
                            </p>
                        </li>
                        <li>
                            <b>Professionnel</b>
                            <p>
                                Pour les entreprises, plus question de vous casser la tête.
                                Nous vous accompagnons pour le voyage de mission de service ou de formation à l'étranger
                                pour vos cadres et employés.
                            </p>
                        </li>
                        <li>
                            <b>Visite/Tourisme</b>
                            <p>
                                Accompagnement et gestion des projets de voyage en famille, privé ou pour vos vacances
                                d'été.
                            </p>
                        </li>
                        <li>
                            <b>Médical</b>
                            <p>
                                Avez-vous une lettre médicale de transfert à l'étranger? Confiez vous à la bonne adresse.
                            </p>
                            <p>
                                Nous avons de choix pour vous!
                            </p>
                            <p>
                                Nous vous proposons une liste d'hôpitaux selon votre pays de detination et nous fixons
                                un rendez-vous médical pour vous jusqu'à remplir les formalités de visa à l'ambassade.
                            </p>
                        </li>
                        <li>
                            <b>Regroupement Familial</b>
                            <p>
                                DIASPORA,besoin que vos membres de famille vous rejoignent? Plus question de se casser
                                en mille morçeaux.
                            </p>
                            <p>
                                Confiez nous la gestion du projet de voyage de vos membres de famille, et nous prenons
                                en charge la chaîne des formalités suivant les instructions consulaires établies.
                            </p>
                        </li>
                    </ul>
                </Container>
            </section>
            <section>
                <Container>
                    <p>Dans le même souci de vous offrir un service de voyage réussi et complet, nous avons mis aux
                    côtés de celui-ci:</p>
                    <ul>
                        <li>Assurance voyage (couverture mondiale, Schengen, Etudes)</li>
                        <li>Plan touristique</li>
                        <li>Excursion touristique</li>
                        <li>Réservation Hôtel</li>
                        <li>Réservation Billet</li>
                        <li>Formulaire en ligne</li>
                        <li>Rendez-vous consulaires</li>
                        <li>Protocole aéroportuaire</li>
                    </ul>
                </Container>
            </section>
        </>
    )
}