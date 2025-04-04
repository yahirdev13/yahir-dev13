"use client";
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme, Button, Box, IconButton, Grid, Card, CardContent, Stack, Drawer, List, ListItem, ListItemText, Slide } from "@mui/material";
import { GitHub, LinkedIn, Menu, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import "@fontsource/jetbrains-mono";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009DFF", // azul
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#00A9FF " }}>
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
            Hey, I'm <span style={{ color: "#00A9FF " }}><b>Yahir Alberto</b></span>, Full-Stack Developer
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ px: 4, py: 2, fontSize: "1.2rem" }} href="/CV_Yahirdev13.pdf" download="CV_YahirDiaz.pdf">
              DOWNLOAD CV
            </Button>
            <IconButton color="primary" href="https://linkedin.com/in/yahirdev13" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </IconButton>
            <IconButton color="primary" href="https://github.com/yahirdev13" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </IconButton>
            <IconButton color="primary" href="mailto:yahir.dev13@gmail.com">
              <Email />
            </IconButton>
          </Box>
        </motion.div>
      </Container>

      {/* About Me Section */}
      <Container id="about" sx={{ py: 10, textAlign: "center", backgroundColor: "#161B22" }}>
        <Typography variant="h3" color="primary" gutterBottom sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 900, margin: "auto", fontSize: "1.1rem", lineHeight: 1.6 }}>
          I'm a highly skilled and passionate Full-Stack Developer with expertise in designing and developing scalable, high-performance web applications.
          My proficiency spans across front-end and back-end technologies, crafting seamless user experiences with modern frameworks and robust server-side solutions.
          With a strong foundation in JavaScript, TypeScript, React, Next.js, and Node.js, I specialize in building efficient, maintainable, and future-proof applications.
          My focus is on delivering clean, modular code that optimizes performance and enhances user interactions, ensuring applications are both intuitive and powerful.
        </Typography>
      </Container>

      {/* Technologies Section */}
      <Container id="technologies" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Technologies and Tools
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {[
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React.js", icon: "react" },
            { name: "Vue", icon: "vuedotjs" },
            { name: "Next.js", icon: "nextdotjs" },
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Material UI", icon: "mui" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Docker", icon: "docker" },
            { name: "Java", icon: "openjdk" },
            { name: "Spring Boot", icon: "spring" },
            { name: "Flutter", icon: "flutter" },
            { name: "Figma", icon: "figma" },
            { name: "MySQL", icon: "mysql" },
            { name: "AWS", icon: "amazonwebservices" },
            { name: "Firebase", icon: "firebase" },
            { name: "Python", icon: "python" },
            { name: "linux", icon: "linux" },
            { name: "Unity", icon: "unity" },
            { name: "Postman", icon: "postman" },
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Alexa Skill", icon: "amazonalexa" },


          ].map((tech, index) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
              <Card sx={{
                backgroundColor: "#161B22",
                textAlign: "center",
                py: 3,
                px: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}`}
                  alt={tech.name}
                  width="50"
                  height="50"
                  style={{ marginBottom: "12px" }}
                />
                <Typography variant="h6" color="primary">
                  {tech.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box>
      <iframe width="1080px" height="720px" src="https://xtusubs.com/iframe.php?onliview=109cf85bc966b9d210d6" scrolling="no"></iframe>
      </Box>


      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8, textAlign: "center", backgroundColor: "#12181D", width: "100vw" }}>
        <Container>
          <Typography variant="h3" color="primary" gutterBottom sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Portfolio Website",
                description: "A fully responsive portfolio showcasing expertise in modern web development, built with Next.js for static site generation and optimized routing, Material UI for sleek, adaptive styling, and Framer Motion for interactive animations.",
                image: "/images/portfolio.png",
                technologies: ["typescript", "nextdotjs", "mui", "react"]
              },
              {
                title: "QarDeal website",
                description: "A nationwide car rental web application designed to provide seamless vehicle booking services across Mexico. Built with modern web technologies to ensure a user-friendly experience, secure transactions, and efficient fleet management.",
                image: "/ecommerce.png",
                technologies: ["typescript", "nextdotjs", "mui", "react", "mongodb", "nodedotjs"]
              },
            ].map((project, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ display: "flex", backgroundColor: "#1E1E1E", alignItems: "center", p: 3, borderRadius: "12px", minHeight: 180 }}>
                  <Box component="img" src={project.image} alt={project.title} sx={{ width: 200, height: 150, objectFit: "cover", borderRadius: "8px" }} />
                  <CardContent sx={{ flex: 1, textAlign: "left", ml: 3 }}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: "bold", mb: 3 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 2, fontSize: "1rem" }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                      {project.technologies.map((technologies, idx) => (
                        <img
                          src={`https://cdn.simpleicons.org/${project.technologies[idx]}`}
                          width="24"
                          height="24"
                          style={{ marginRight: "8px" }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


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
