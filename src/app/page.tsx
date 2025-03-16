"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme, Button, Grid, Card, CardContent, Avatar, Box, IconButton } from "@mui/material";
import { GitHub, Instagram, Search } from "@mui/icons-material";
import { motion } from "framer-motion";

// Tema personalizado basado en la imagen
const theme = createTheme({
  palette: {
    primary: {
      main: "#00FFA3", // Verde neón basado en la imagen
    },
    secondary: {
      main: "#B0BEC5", // Gris claro
    },
    background: {
      default: "#0D1117", // Fondo oscuro basado en la imagen
      paper: "#161B22",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#8B949E",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h3: {
      fontWeight: 700,
    },
    body1: {
      color: "#8B949E",
    },
  },
});

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#00FFA3" }}>
            {"<C/> SinanTokmak"}
          </Typography>
          <Button color="primary">Home</Button>
          <Button color="primary">Blogs</Button>
          <IconButton color="primary">
            <Search />
          </IconButton>
          <IconButton color="primary">
            <Instagram />
          </IconButton>
          <IconButton color="primary">
          </IconButton>
          <IconButton color="primary">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ textAlign: "center", py: 5 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Developer
          </Typography>
          <Typography variant="h3" gutterBottom>
            Hey, I'm <span style={{ color: "#00FFA3" }}>Sinan</span>, Full-Stack Developer
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "600px", margin: "auto" }}>
            I help businesses grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done, let's talk.
          </Typography>
        </motion.div>
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 5 }}>
        <Card sx={{ backgroundColor: "#161B22", p: 3, borderRadius: "16px", border: "2px solid #00FFA3" }}>
          <Avatar src="/avatar.jpg" sx={{ width: 100, height: 100, margin: "auto" }} />
          <Typography variant="h5" color="primary" textAlign="center" mt={2}>
            Sinan
          </Typography>
          <Typography variant="body2" textAlign="center" color="textSecondary">
            Full-stack developer
          </Typography>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">abdulrahman_sinan@hotmail.com</Typography>
            <Typography variant="body2">Turkey | Freelancer</Typography>
            <Typography variant="body2">www.sinantokmak.com</Typography>
          </Box>
          <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
            Download CV
          </Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Portfolio;
