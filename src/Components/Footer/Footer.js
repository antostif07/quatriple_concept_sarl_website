import React from "react";
import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import {logo} from "../../var";
import {colors} from "../../var/colors";
import {Infos} from "../Infos";
import {Input} from "../Input";

const useStyles = makeStyles({
    root: {
        background: "#212121",
        width: "100%",
        color: "#fff",
        "& p": {
            fontSize: 17,
            fontWeight: 400,
            color: colors.gray,
            marginBottom: 26,
        },
        "& h5" :{
            marginBottom: 26,
            margin: "0 0 23px",
        },
    },
    container: {
        paddingTop: 48,
    }
})

export const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={4} style={{marginBottom: 96}}>
                        <img src={logo} width={"100%"}  alt={"logo"}/>
                        <p style={{
                            fontFamily: "Satisfy",
                            textAlign: "center",
                            fontSize: 20,
                            margin: "20px 0"
                        }}>
                            Votre partenaire de proximité !
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container columns={1} spacing={4}>
                            <Infos type={"mail"} xs={12} />
                            <Infos type={"tel"} xs={12} />
                            <Infos type={"address"} xs={12} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h5>Souscrire à la Newsletter</h5>
                        <p>Enregistrez votre email pour rester informé de toutes les promotions et autres informations
                            de Quatriple Concept SARL.</p>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Input
                                    type={"text"} name={"name"} label={"Name"}
                                    iconClassName={"ti-user"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    type={"text"} name={"email"} label={"Email"}
                                    iconClassName={"ti-email"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input type={"submit"} className={"inputSubmit"} style={{
                                    margin: "0 15px",
                                }}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}