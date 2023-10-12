import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ titulo, texto, imagen }) {
  return (
    <Card sx={{ maxWidth: 345, height: 340 }}>
      <CardActionArea sx={{}}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          sx={{ objectFit: "contain" }}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {texto}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
