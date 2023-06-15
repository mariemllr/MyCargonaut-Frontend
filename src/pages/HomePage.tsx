import { Container, Stack, Button, Box } from "@mui/material";
import React from "react";
import logo from "../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png";

const HomePage: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2} sx={{ width: "70%" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Logo" style={{ width: "50%", height: "50%" }} />
        </Box>
        <Button variant="outlined" sx={{ height: "5.5rem" }}>
          Angebote
        </Button>
        <Button variant="outlined" sx={{ height: "5.5rem" }}>
          Gesuche
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} sx={{ width: "60%" }}>
            <Button variant="contained">Anmelden</Button>
            <Button variant="outlined" sx={{ textDecoration: "underline" }}>
              Registrieren
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomePage;
