import React from "react";
import {PageHeader} from "../../Components/PageHeader";
import bgImage from '../../assets/img/bg_fiduciaire.jpg'
import {Container} from "@mui/material";
import {colors} from "../../var/colors";
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

export const Fiduciaire = () => {
    const classes = useStyles()

    return (
        <>
            <PageHeader title={"Fiduciaire"} bgImage={bgImage} />
            <section>
                <Container>
                    <p>
                        Aux côtés d'importants investissements tant internes qu'externes, celui-ci est d'accompagner
                        d'une expertise fiscale et d'un service de domiciliation d'une part pour les entreprises et
                        d'autre part pour nouveau-nés entrepreneurs.
                    </p>
                </Container>
            </section>
            <section style={{background: colors.blue, color: "#fff", }}>
                <Container>
                    Nous jouons un rôle important de cabinet-conseil en :
                    <ul className={classes.list}>
                        <li>
                            <b>Expertise Fiscale</b>
                            <p>
                                Une assistance adaptée aux outils innovants et créatifs pour optimiser les réponses quant
                                aux questions relatives au fisc des entreprises, partant de leurs redevances fiscales
                                auprès des institutions compétentes en ce qui concerne les souscriptions, les déclarations
                                et contributions de toutes les lignes de taxe.</p>
                            <p>
                                Cela consiste au rappel régulier, organisé et ponctuel pour le paiement des redevances
                                fiscales des entreprises, en vue d'éviter toute sorte d'acharnement de pénalité pouvant
                                surgir dans l'exercice de l'année fiscale en cours. Elaboration de bilan annuel, états
                                financiers et structure de prix.
                            </p>
                        </li>
                        <li>
                            <b>Création et gestion d'entités</b>
                            <p>
                                Nous orientons et accompagnons les entrepreneurs dans le montage administratif
                                jusqu'à la mise en place effective de leurs entités, et ce, dans le respect des lois
                                établies et selon les exigences des institutions compétentes.
                            </p>
                        </li>
                        <li>
                            <h5>Domiciliation</h5>
                            <p>
                                Pour les entités, ONG et jeunes entrepreneurs en difficultés d'un cadre ou d'une
                                adresse professionnelle les permettant d'exercer librement ses activités.
                            </p>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}