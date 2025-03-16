"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme, Button, Grid, Card, CardContent, Avatar } from "@mui/material";

// Tema personalizado basado en la imagen
const theme = createTheme({
  palette: {
    primary: {
      main: "#007BFF", // Azul vibrante
    },
    secondary: {
      main: "#B0BEC5", // Gris claro
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h3: {
      fontWeight: 700,
    },
    body1: {
      color: "#B0BEC5",
    },
  },
});

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Developer X
          </Typography>
          <Button color="primary">Inicio</Button>
          <Button color="primary">Sobre Mí</Button>
          <Button color="primary">Proyectos</Button>
          <Button color="primary">Blog</Button>
          <Button color="primary">Contacto</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Avatar src="/avatar.jpg" sx={{ width: 120, height: 120, margin: "auto" }} />
        <Typography variant="h3" gutterBottom>
          ¡Hola! Soy John Carter
        </Typography>
        <Typography variant="body1">Desarrollador Web especializado en tecnologías modernas</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Ver mis proyectos
        </Button>
      </Container>
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Proyectos Destacados
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card sx={{ backgroundColor: "#1E1E1E" }}>
                <CardContent>
                  <Typography variant="h6" color="textPrimary">
                    Proyecto {item}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Descripción breve del proyecto.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Portfolio;
