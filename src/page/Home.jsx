import { Container, Grid } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Herosection } from "../components/Herosection";
import { HowItWorks } from "../components/HowItWorks";
import Footer from "../components/Footer";
import TemporizadorCiclos from "../components/TemporizadorCiclos";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <ResponsiveAppBar />
        <Herosection />
        <HowItWorks />
        <ScrollToTopButton />
        <Footer description="Snow" />
      </Container>
    </>
  );
};
