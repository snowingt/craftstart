import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";

const TemporizadorCiclos = () => {
  const [horasTrabajo, setHorasTrabajo] = useState(1);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [cicloActual, setCicloActual] = useState("Trabajo");
  const [cicloIniciado, setCicloIniciado] = useState(false);
  const [pausaAbierta, setPausaAbierta] = useState(false);

  useEffect(() => {
    let intervalId;

    const iniciarTemporizador = () => {
      intervalId = setInterval(() => {
        if (tiempoRestante === 0) {
          if (cicloActual === "Trabajo") {
            // Trabajo de 50 minutos
            setTiempoRestante(10 * 60);
            setCicloActual("Descanso");
            setPausaAbierta(true);
          } else {
            // Descanso de 10 minutos después del trabajo
            setTiempoRestante(10 * 60);
            setCicloActual("Trabajo");
          }
        } else {
          setTiempoRestante(tiempoRestante - 1);
        }
      }, 1);
    };

    if (cicloIniciado) {
      iniciarTemporizador();
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [tiempoRestante, cicloActual, cicloIniciado]);

  const handleInicioPausaCiclo = () => {
    if (!cicloIniciado) {
      setCicloIniciado(true);
      setTiempoRestante(50 * 60); // Iniciar con un ciclo de trabajo de 50 minutos
    } else {
      if (tiempoRestante === 0) {
        setPausaAbierta(true);
      }
      setCicloIniciado(false);
    }
  };

  const handleAceptarPausa = () => {
    setPausaAbierta(false);
    setTiempoRestante(10 * 60); // Continuar con un ciclo de trabajo de 10 minutos
    setCicloActual("Trabajo");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contador de Ciclos de Trabajo
      </Typography>
      <Typography variant="h5">
        Horas de Trabajo: {horasTrabajo} hora(s)
      </Typography>
      <Typography variant="h5">Ciclo Actual: {cicloActual}</Typography>
      <Typography variant="h5">
        Tiempo Restante: {Math.floor(tiempoRestante / 60)}:
        {(tiempoRestante % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleInicioPausaCiclo}
      >
        {cicloIniciado ? "Pausar Ciclo" : "Iniciar Ciclo"}
      </Button>
      <Dialog open={pausaAbierta}>
        <DialogTitle>¡Toma una pausa de 10 minutos!</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setPausaAbierta(false)}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <DialogActions>
          <Button onClick={handleAceptarPausa} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
export default TemporizadorCiclos;
