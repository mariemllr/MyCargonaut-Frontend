import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Rating } from "@mui/material";
import logo from "../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png";

const bewertungen = [
  { title: "Bewertung 1", text: "Dies ist eine Bewertung.", stars: 4 },
  { title: "Bewertung 2", text: "Dies ist eine andere Bewertung.", stars: 3 },
  { title: "Bewertung 3", text: "Dies ist noch eine Bewertung.", stars: 5 },
];

const Bewertungen: React.FC = () => {
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
          Fahrer/Beifahrerbewertungen
        </Typography>
      </Box>
      <Box
        sx={{
          p: "3vh",
        }}
      >
        {bewertungen.map((bewertung, index) => (
          <Box key={index} sx={{ marginBottom: "2vh", mt: "3vh" }}>
            <Typography variant="h6">{bewertung.title}</Typography>
            <Typography variant="body1">{bewertung.text}</Typography>
            <Rating
              name={`unique-rating-${index}`}
              value={bewertung.stars}
              readOnly
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Bewertungen;
