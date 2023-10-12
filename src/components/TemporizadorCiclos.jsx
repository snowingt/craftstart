import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import { Grid } from "@mui/material";

const TemporizadorCiclos = () => {
  const [horasTrabajo, setHorasTrabajo] = useState(1);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [cicloActual, setCicloActual] = useState("Pausa");
  const [cicloIniciado, setCicloIniciado] = useState(true);

  //crea un temporizador que se ejecuta cada segundo y actualiza el tiempo restante
  useEffect(() => {
    let temporizador;

    if (cicloIniciado) {
      temporizador = setInterval(() => {
        setTiempoRestante((tiempoRestante) => tiempoRestante - 1);
      }, 1000); // Cambié el intervalo a 1000ms (1 segundo) para que el contador sea más realista.
    }

    return () => {
      if (temporizador) {
        clearInterval(temporizador);
      }
    };
  }, [cicloIniciado]);

  //actualiza el ciclo actual y el tiempo restante cuando el temporizador llega a 0
  useEffect(() => {
    if (tiempoRestante === 0) {
      setCicloIniciado(!cicloIniciado);

      if (cicloActual === "Pausa") {
        setCicloIniciado(!cicloIniciado);
        setCicloActual("Trabajo");
        setTiempoRestante(3000);
      } else if (cicloActual === "Trabajo") {
        setCicloActual("Pausa");
        setTiempoRestante(600);
        alert("¡Hora de descansar!");
      }
    }
  }, [tiempoRestante, cicloActual]);
  const handleInicioPausaCiclo = () => {
    setCicloIniciado(!cicloIniciado);
  };
  const handleReinicioCiclo = () => {
    setCicloIniciado(false);
    if (cicloActual === "Trabajo") {
      setTiempoRestante(3000);
    } else if (cicloActual === "Pausa") {
      setTiempoRestante(600);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
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
            {cicloActual}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "poppins",
              fontWeight: "400",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "2.5rem",
              lineHeight: "1.2",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {Math.floor(tiempoRestante / 60)}:
            {tiempoRestante % 60 < 10
              ? `0${tiempoRestante % 60}`
              : tiempoRestante % 60}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          marginTop: "1rem",
          gap: "1rem",
        }}
        container
        spacing={2}
      >
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleInicioPausaCiclo}
          >
            {cicloIniciado ? "Pausar Ciclo" : "Iniciar Ciclo"}
          </Button>
        </>
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReinicioCiclo}
          >
            Reiniciar Ciclo
          </Button>
        </>
      </Grid>
    </Container>
  );
};
export default TemporizadorCiclos;
