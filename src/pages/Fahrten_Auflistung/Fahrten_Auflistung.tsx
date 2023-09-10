import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import logo from "../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png";
import arrow_right_icon from "../../assets/ICONS/arrow_right_icon.png";

const fahrten = [
  {
    startort: "Berlin",
    zielort: "München",
    datum: "2023-07-15",
    uhrzeit: "10:00",
    fahrzeug: "Audi A4",
    fahrgast: "Max Mustermann",
  },
  {
    startort: "Hamburg",
    zielort: "Frankfurt",
    datum: "2023-07-18",
    uhrzeit: "12:30",
    fahrzeug: "BMW 3er",
    fahrgast: "Anna Schmidt",
  },
  {
    startort: "Düsseldorf",
    zielort: "Stuttgart",
    datum: "2023-07-20",
    uhrzeit: "14:00",
    fahrzeug: "Mercedes C-Klasse",
    fahrgast: "Julia Müller",
  },
  {
    startort: "Köln",
    zielort: "Dresden",
    datum: "2023-07-22",
    uhrzeit: "15:30",
    fahrzeug: "VW Passat",
    fahrgast: "Tom Weber",
  },
  // Weitere Fahrten hier hinzufügen...
];

const EigeneFahrten: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "1.5px solid black",
        borderRadius: "1px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "3vh",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: "100px",
            height: "auto",
            position: "absolute",
            left: "15%",
          }}
        />
        <Typography variant="h6" style={{ color: "white" }}>
          Eigene Fahrten
        </Typography>
      </Box>
      <Box
        sx={{
          p: "3vh",
        }}
      >
        {fahrten.map((fahrt, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: "2vh",
              mt: "3vh",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography variant="h6">{fahrt.startort}</Typography>
              </Grid>
              <Grid item xs={2}>
                <img
                  src={arrow_right_icon}
                  alt="Arrow Icon"
                  style={{
                    maxWidth: "50px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <Typography variant="h6">{fahrt.zielort}</Typography>
              </Grid>
            </Grid>
            <Typography variant="body1">
              {fahrt.datum} - {fahrt.uhrzeit}
            </Typography>
            <Typography variant="body1">{fahrt.fahrzeug}</Typography>
            <Typography variant="body1">{fahrt.fahrgast}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EigeneFahrten;
