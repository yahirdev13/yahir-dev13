"use client";
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme, Button, Box, IconButton, Grid, Card, CardContent, Stack, Drawer, List, ListItem, ListItemText, Slide } from "@mui/material";
import { GitHub, LinkedIn, Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import "@fontsource/jetbrains-mono";
import { button } from "framer-motion/client";

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
    common: {
      white: "#FFFFFF", // Definiendo color blanco correctamente
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const drawer = (
    <Slide direction="down" in={mobileOpen} mountOnEnter unmountOnExit>
      <Box sx={{ width: 250, backgroundColor: "#161B22", height: "100vh", color: "#FFFFFF" }}>
        <List>
          {["Home", "About Me", "Technologies", "Projects"].map((text) => (
            <ListItem component="button" key={text} onClick={() => { scrollToSection(text.toLowerCase().replace(/ /g, "")); setMobileOpen(false); }}>
              <ListItemText primary={text} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Slide>);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(22, 27, 34, 0.5)" }} elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#00FFA3" }}>
            {"<Yahirdev13/> "}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
          </Box>
          <IconButton
            color="primary"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileOpen && (
        <Slide direction="down" in={mobileOpen} mountOnEnter unmountOnExit>
          <Box sx={{ width: "100%", backgroundColor: "#161B22", position: "fixed", top: "64px", left: 0, zIndex: 1200 }}>
            <List>
              {["Home", "About Me", "Technologies", "Projects"].map((text) => (
                <ListItem component="button" key={text} onClick={() => { scrollToSection(text.toLowerCase().replace(/ /g, "")); setMobileOpen(false); }}>


                  <ListItemText primary={text} sx={{ textAlign: "center", color: "#FFFFFF" }} />
                </ListItem>
              ))}
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
                <IconButton color="primary" href="https://linkedin.com/in/yahirdev13" target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </IconButton>
                <IconButton color="primary" href="https://github.com/yahirdev13" target="_blank" rel="noopener noreferrer">
                  <GitHub />
                </IconButton>
              </Stack>
            </List>
          </Box>
        </Slide>
      )}


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
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="body2">yahir.dev13@gmail.com</Typography>
          <IconButton color="primary" href="https://linkedin.com/in/yahirdev13" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </IconButton>
          <IconButton color="primary" href="https://github.com/yahirdev13" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </IconButton>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
