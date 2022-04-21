import React from "react";
import {makeStyles} from "@mui/styles";
import {colors} from "../../var/colors";

const useStyles = makeStyles({
    root: {
        "& .item": {
            marginBottom: 30,
            "&:hover": {
                "& .social": {
                    top: 0,
                }
            }
        },
        "& .img:before": {
            content: '""',
            top: "20px",
            left: "20px",
            borderLeft: "1px solid",
            borderTop: "1px solid",
            position: "absolute",
            width: "60px",
            height: "60px",
            zIndex: 60,
            borderColor: "rgba(255, 255, 255, .2)"
        },
        "& img": {
            display: "block",
            width: "100%",
        },
        "& .info": {
            textAlign: "center",
            padding: "30px 20px",
            position: "relative",
            overflow: "hidden",
            "& h6": {
                fontSize: "17px",
                marginBottom: "5px",
                textTransform: "uppercase",
                fontWeight: 300,
                letterSpacing: "3px",
                color: "#fff",
            },
            "& p": {
                marginBottom: "5px",
                color: colors.yellow,
            },
            "& .social": {
                textAlign: "center",
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: colors.yellow,
                transition: "all .4s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& a": {
                    fontSize: 15,
                    color: colors.blue,
                    margin: "0 5px",
                    "&:hover": {
                        color: "rgba(0, 0, 0, .8)",
                    }
                },
                "& p": {
                    color: "rgba(0, 0, 0, .8)",
                    fontFamily: "Satisfy",
                    fontSize: 18
                }
            },
        }
    }
})

export const TeamCard = ({employee}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className="item">
                <div className={"img"}>
                    <img src={employee.image} alt={employee.name} />
                </div>
                <div className={"info"}>
                    <h6>{employee.name}</h6>
                    <p>{employee.role}</p>
                    <div className={"social valign"}>
                        <div className="full-width">
                            <p>Réseaux Sociaux</p>
                            <a href="#"><i className="ti-facebook"/></a>
                            <a href="#"><i className="ti-twitter-alt"/></a>
                            <a href="#"><i className="ti-instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}