import {Home} from "../Pages/Home";
import {AboutUs} from "../Pages/AboutUs";
import {Services} from "../Pages/Service";
import {Facilitation} from "../Pages/Service/Facilitation";
import {Voyage} from "../Pages/Service/Voyage";
import {Investissements} from "../Pages/Service/Investissement";
import {EventsCommunications} from "../Pages/Service/EventsCommunications";
import {Fiduciaire} from "../Pages/Service/Fiduciaire";
import {Contact} from "../Pages/Contact";
import {Partners} from "../Pages/Partners";

export const pages = [
    {
        title: "Accueil", link: "/", main: true, component: Home,
    },
    {
        title: "A propos de nous", link: "/about-us", main: true, component: AboutUs,
    },
    {
        title: "Services", link: "/services", main: true, component: Services,
    },
    {
        title: "Facilitation des affaires", link: "/services/facilitation-des-affaires", component: Facilitation,
    },
    {
        title: "Voyage", link: "/services/voyages", component: Voyage,
    },
    {
        title: "Investissements", link: "/services/investissements", component: Investissements,
    },
    {
        title: "Events & Communications", link: "/services/events-communications", component: EventsCommunications,
    },
    {
        title: "Fiduciaire", link: "/services/fiduciaire", component: Fiduciaire,
    },
    {
        title: "Partenaires", link: "/partners", main: true, component: Partners,
    },
    {
        title: "Contact", link: "/contact-us", main: true, component: Contact,
    },
]