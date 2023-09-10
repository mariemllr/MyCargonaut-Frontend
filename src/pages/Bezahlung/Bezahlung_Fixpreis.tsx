import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
} from "@mui/material";
import logo from "../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png";

const Zahlung: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = useState("Paypal");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
          Zahlung
        </Typography>
      </Box>
      <Box
        sx={{
          p: "3vh",
        }}
      >
        <Typography variant="h6">Die Fahrt mit Max kostet dich 50€</Typography>
        <Typography
          variant="body1"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Wie möchtest du bezahlen?
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Zahlung"
            name="zahlung"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Paypal"
              control={<Radio />}
              label="Paypal"
            />
            <FormControlLabel
              value="Kreditkarte"
              control={<Radio />}
              label="Kreditkarte"
            />
            <FormControlLabel value="Bar" control={<Radio />} label="Bar" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button variant="contained" color="primary" style={{ margin: "20px" }}>
        Bezahlung abschließen
      </Button>
    </Box>
  );
};

export default Zahlung;
