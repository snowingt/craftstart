import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ActionAreaCard from "./atoms/ActionAreaCard";
import ergoImg1 from "../assets/ergoImg1.webp";
import ergoImg6 from "../assets/ergoImg6.webp";
import ergoImg5 from "../assets/ergoImg5.webp";
import ergoImg4 from "../assets/ergoImg4.webp";
import ergoImg2 from "../assets/ergoImg2.webp";
import ergoImg3 from "../assets/ergoImg3.webp";

import YouTubeVideo from "./YouTubeVideo";

export const HowItWorks = () => {
  return (
    <>
      <Container
        sx={{
          alignItems: "center",

          marginBottom: "2rem",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            marginTop: "4.5rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "50%",
            }}
          >
            <YouTubeVideo />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Descubre el Poder de la Postura.
            </Typography>
            <Typography variant="h5">
              6 Razones para Adoptar una Postura Correcta y Transformar Tu
              Experiencia de Programación.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <ActionAreaCard
              imagen={ergoImg1}
              titulo={"Bienestar General:"}
              texto={
                "Una buena postura no solo beneficia tu salud física, sino que también puede mejorar tu bienestar general. Ayuda a reducir el estrés y la tensión, lo que contribuye a una sensación de bienestar general."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard
              imagen={ergoImg2}
              titulo={"Prevención de Problemas de Espalda"}
              texto={
                "Adoptar una postura adecuada al sentarse reduce el riesgo de desarrollar problemas de espalda, como dolores lumbares y hernias de disco, que son comunes en quienes pasan mucho tiempo frente a la pantalla."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard
              imagen={ergoImg4}
              titulo={"Menos Fatiga y Mayor Energía"}
              texto={
                "Sentarse correctamente mejora la circulación sanguínea y la oxigenación del cuerpo, lo que significa que te sentirás menos cansado y tendrás más energía para concentrarte en tu trabajo."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard
              imagen={ergoImg5}
              titulo={"Mejora la Productividad"}
              texto={
                "Una postura adecuada puede ayudarte a trabajar de manera más eficiente y concentrarte en tus tareas, lo que aumentará tu productividad en el largo plazo."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard
              imagen={ergoImg3}
              titulo={"Evita Problemas Posturales Crónicos"}
              texto={
                " Si desarrollas malos hábitos de postura, es posible que a largo plazo sufras de problemas posturales crónicos que sean difíciles de corregir. Aprender desde el principio es esencial para evitar estos problemas."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard
              imagen={ergoImg6}
              titulo={"Mayor Comodidad"}
              texto={
                "Sentarse correctamente es más cómodo a largo plazo. Puedes evitar la incomodidad, el entumecimiento y los dolores que a menudo resultan de una mala postura."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
