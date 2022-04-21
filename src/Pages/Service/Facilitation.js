import {PageHeader} from "../../Components/PageHeader";
import React from "react";
import bgImage from '../../assets/img/facilitation_des_affaires.png'
import {Container} from "@mui/material";
import {colors} from "../../var/colors";
import {SectionTitle} from "../../Components/SectionTitle/SectionTitle";

export const Facilitation = () => {
    return (
        <>
            <PageHeader title={"Facilitation des affaires"} bgImage={bgImage} />
            <section>
                <Container>
                    <p>Nous participons à faciliter un bon climat des affaires en RDC, en vue de permettre à tous
                        les acteurs locaux et étrangers un service accessible les permettant d'opérer avec toute sécurité et
                        confiance</p>
                    <p>Grâce aux partenaires tissés à l'echelle internationale; les entreprises, universités et apporteurs
                     d'affaires nous font confiance pour leur opérabilité en RDC.</p>
                </Container>
            </section>
            <section style={{background: colors.blue, color: "#fff", }}>
                <Container>
                    <SectionTitle
                        titleFirst={"Intégration"} firstColor={"#fff"} secondaryColor={colors.yellow}
                        titleSecondary={"des expatriés"}
                    />
                    <p>Un service approprié aux étrangers ayant choisis la RDC comme étant leur deuxième patrie. Sur
                    ce, les personnels expatriés des entreprises et particuliers revenant ou vivant en RDC béneficient
                     de notre assistance aux questions relatives à:</p>
                    <ul>
                        <li><b>Titres de voyage</b></li>
                        <li><b>Migrations</b></li>
                        <li><b>Intégration Professionnelle</b></li>
                    </ul>
                </Container>
            </section>
            <section>
                <Container>
                    <SectionTitle titleFirst={"Rélations publiques et institutionnelles"} firstColor={colors.blue} />
                    <p>Externalisation, gestion et suivi des formalités administratives auprès des institutions
                    publiques, gouvernementales et organismes.</p>
                    <ul>
                        <li>Légalisations (Hôtel de ville, MINAFFET, Ambassades, Min. Justice)</li>
                        <li>Assistance passeport biométrie</li>
                        <li>Permis de conduire</li>
                        <li>Casier judiciaire</li>
                        <li>Carte de travail</li>
                        <li>Et plus encore</li>
                    </ul>
                </Container>
            </section>
            <section style={{background: colors.blue, color: "#fff", }}>
                <Container>
                    <SectionTitle
                        titleFirst={"International Business"} firstColor={"#fff"}
                        titleSecondary={"& Networking"} secondaryColor={colors.yellow}
                    />
                    <p>Nous explorons des opprtunités d'affaires à travers des événements business à l'international
                    . Nos services de BUSINESS NETWORKING B2B, B2C vous aident à élargir votre portfeuille client et
                    votre carnet d'adresse pour accroître votre chiffre d'affaires en participant aux:</p>
                    <ul>
                        <li><b>Conférences thématiques</b></li>
                        <li><b>Exhibitions</b></li>
                        <li><b>Séminaires & colloques</b></li>
                    </ul>
                </Container>
            </section>
        </>
    )
}