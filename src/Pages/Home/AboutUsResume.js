import {SectionWithImage} from "../../Components/SectionWithImage";
import React from "react";
import {colors} from "../../var/colors";
import office from "../../assets/img/office.jpg"
import {Link} from "@reach/router";

export const AboutUsResume = () => {
    const description = (
        <>
            <p><b>QUATRIPLE CONCEPT SARL</b> est un cabinet-conseil de droit Congolais à vocation internationale créée en 2015 basée en République Démocratique du Congo, et qui aspire à devenir l’une des références Congolaises au pays comme à l’internationale en terme de la qualité de ses services tant aux entreprises qu’aux particuliers.</p>
            <Link to={"/about-us"} className={"button-link secondary"} style={{marginTop: "20px"}}>
                <span>EN SAVOIR PLUS</span>
            </Link>
        </>
    )
    return (
        <SectionWithImage
            titleFirst={"A Propos"}
            titleSecondary={"de nous"}
            firstColor={"#fff"} secondaryColor={colors.yellow}
            backgroundColor={colors.blue}
            description={description}
            image={office} imageDesc={"Nos Bureaux"}
        />
    )
}