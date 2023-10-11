import { Button, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import React from "react";
import { Image } from "@mui/icons-material";
import ergoImg from "../assets/ergoImg1.webp";

export const Herosection = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4.5rem",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "2.5rem",
                lineHeight: "1.2",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              ErgoCode: Tu Compañero de Programación Saludable
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "roboto",
                fontWeight: "400",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1.5rem",
                lineHeight: "1.2",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Domina la Postura Perfecta y Eleva tu Productividad con Comodidad
              y Estilo
            </Typography>
            <Grid item xs={12} md={6}>
              <Button fullWidth variant="outlined" color="primary">
                Ir a la App
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
              alt="The house from the offer."
              src={ergoImg}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
