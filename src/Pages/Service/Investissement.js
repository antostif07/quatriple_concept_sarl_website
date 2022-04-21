import {PageHeader} from "../../Components/PageHeader";
import React from "react";
import bgImage from '../../assets/img/facilitation_des_affaires.png'
import {Container} from "@mui/material";
import {colors} from "../../var/colors";

export const Investissements = () => {
    return (
        <>
            <PageHeader title={"Investissements"} bgImage={bgImage} />
            <section>
                <Container>
                    <p>
                        Dans l'optique de matérialiser nos habilités de croissance et de pérennité pouvant
                        soutenir nos actions de continuer à servir notre aimable clientèle dans le temps et dans
                        la durée, <b>Quatriple Concept Sarl</b> met un regard spécifique sur les investissements
                        à fort potentiel à court, moyenne et à long terme.
                    </p>
                </Container>
            </section>
            <section style={{background: colors.blue, color: "#fff", }}>
                <Container>
                    <p>
                        Pour optimiser notre portefeuille financière à l'investissement au délà du budget
                        initial, nous associons le concept du financement participatif pour la création des
                        richesses partagées.
                    </p>
                </Container>
            </section>
        </>
    )
}