"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme, Button, Box, IconButton, Grid, Card, CardContent } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import "@fontsource/jetbrains-mono";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00FFA3", // Verde neón 
    },
    secondary: {
      main: "#B0BEC5", // Gris claro
    },
    background: {
      default: "#0D1117", // Fondo oscuro
      paper: "#161B22",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#8B949E",
    },
  },
  typography: {
    fontFamily: "JetBrains Mono, monospace",
    h3: {
      fontWeight: 700,
    },
    body1: {
      color: "#8B949E",
    },
  },
});

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#00FFA3" }}>
            {"<Yahirdev13/> "}
          </Typography>
          <Button color="primary" onClick={() => scrollToSection("home")}>Home</Button>
          <Button color="primary" onClick={() => scrollToSection("about")}>About Me</Button>
          <Button color="primary" onClick={() => scrollToSection("technologies")}>Technologies</Button>
          <Button color="primary" onClick={() => scrollToSection("projects")}>Projects</Button>
          <IconButton color="primary" href="https://linkedin.com/in/yahirdev13" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </IconButton>
          <IconButton color="primary" href="https://github.com/yahirdev13" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container id="home" sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh", mt: 5 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <Typography variant="h2" gutterBottom>
            Hey, I'm <span style={{ color: "#00FFA3" }}>Yahir Alberto</span>, Full-Stack Developer
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2, px: 6, py: 2, fontSize: "1.2rem" }} href="/CV_Yahirdev13.pdf" download="CV_Yahirdev13.pdf">
            DOWNLOAD CV
          </Button>
        </motion.div>
      </Container>

      {/* About Me Section */}
      <Container id="about" sx={{ py: 8, textAlign: "center", backgroundColor: "#161B22" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 800, margin: "auto" }}>
          I am a passionate Full-Stack Developer specializing in building scalable, high-performance web applications.
          With experience in modern technologies and frameworks, I aim to deliver seamless and efficient user experiences.
        </Typography>
      </Container>

      {/* Technologies Section */}
      <Container id="technologies" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Technologies
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {["JavaScript", "React.js", "Next.js", "Node.js", "MongoDB", "Docker"].map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#161B22", textAlign: "center", p: 1 }}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {tech}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Projects Section */}
      <Container id="projects" sx={{ py: 8, textAlign: "center", backgroundColor: "#161B22" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {["Portfolio Website", "E-Commerce Platform", "Chatbot AI"].map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#1E1E1E", textAlign: "center", p: 1 }}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {project}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    A brief description of {project} goes here.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ py: 2, textAlign: "center", backgroundColor: "#0A0D12", color: "#FFFFFF", fontSize: "0.8rem" }}>
        <Typography variant="body2">yahir.dev13@gmail.com</Typography>

        <IconButton color="primary" href="https://linkedin.com/in/yahirdev13" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
        <IconButton color="primary" href="https://github.com/yahirdev13" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </IconButton>

      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
