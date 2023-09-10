import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Rating, TextField, Button } from "@mui/material";
import logo from "../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png";

const BewertungAbgeben: React.FC = () => {
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
          Wie fandest du deine Fahrt mit XX
        </Typography>
      </Box>
      <Box
        sx={{
          p: "3vh",
        }}
      >
        <Typography variant="body1">Bewertung:</Typography>
        <Rating name="sterne-bewertung" />
        <TextField
          id="frage1"
          label="Frage 1"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="frage2"
          label="Frage 2"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="frage3"
          label="Frage 3"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="frage4"
          label="Frage 4"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "2vh" }}
        >
          Bewertung abgeben
        </Button>
      </Box>
    </Box>
  );
};

export default BewertungAbgeben;
