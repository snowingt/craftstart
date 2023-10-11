import { Container, Grid } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Herosection } from "../components/Herosection";
import { HowItWorks } from "../components/HowItWorks";
import Footer from "../components/Footer";
import TemporizadorCiclos from "../components/TemporizadorCiclos";

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
        <TemporizadorCiclos />

        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </>
  );
};
