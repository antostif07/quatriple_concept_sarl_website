import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import React from "react";

export const sliders = [
    {
        mainText: (props) => (
            <div {...props} style={{color: "red", alignSelf: "flex-start"}}>
                <p>Nous prenons soin de vos besoins.</p>
                <p>Et nous vous servons au meilleur profit</p>
            </div>
        ),
        secondary: (props) => (
            <div {...props}>
                <ul style={{listStyleType: "disclosure-closed", width: "50%"}}>
                    <li>VOYAGES</li>
                    <li>FACILITATION D'AFFAIRES</li>
                    <li>EVENTS & COMMUNICATION</li>
                    <li>INVESTISSEMENTS</li>
                    <li>FIDUCIAIRES</li>
                    <li>MANAGEMENT DES PROJETS</li>
                </ul>
            </div>
        ),
        imageBg: slider1,
    },
    {
        imageBg: slider2,
    }
]