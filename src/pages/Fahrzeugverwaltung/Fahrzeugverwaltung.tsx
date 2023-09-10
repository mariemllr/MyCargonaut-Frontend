import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import car_icon from "../../assets/ICONS/car-icon.jpg";
import plus_icon from "../../assets/ICONS/plus_icon.png";
import ToggleButton from "@mui/material/ToggleButton";
import ModuleHeader from "../../components/ModuleHeader";

const StyledToggleButton = styled(ToggleButton)({
  "&.Mui-selected": {
    backgroundColor: "#e2f0d9",
  },
});

enum VehicleType {
  PKW,
  LKW,
  Anhaenger,
  Sonstiges,
}

interface VehicleState {
  user_email: string | null;
  vehicle: number | null;
  name: string | null;
  type: VehicleType | null;
  model: string | null;
  cargoSizeX: number | null;
  cargoSizeY: number | null;
  cargoSizeZ: number | null;
  weight: number | null;
}

const defaultState: VehicleState = {
  user_email: null,
  name: null,
  type: null,
  model: null,
  vehicle: null,
  cargoSizeX: null,
  cargoSizeY: null,
  cargoSizeZ: null,
  weight: null,
};

const Fahrzeugverwaltung: React.FC = () => {
  const [state, setState] = useState<VehicleState>(defaultState);

  const handleInputChange = (field: keyof VehicleState, value: any) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <Box
      sx={{
        border: "1.5px solid black",
        borderRadius: "1px",
        backgroundColor: "white",
      }}
    >
      <ModuleHeader header={"Meine Fahrzeuge verwalten"} />
      <Box
        sx={{
          p: "6vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Box
          sx={{ marginBottom: "2vh", display: "flex", alignItems: "center" }}
        >
          <img
            src={car_icon}
            alt="Car-Icon"
            style={{
              maxWidth: "50px",
              height: "auto",
              marginRight: "10px",
            }}
          />
          <FormControl fullWidth sx={{ width: "300px" }}>
            <InputLabel id="vehicle-label">Fahrzeug</InputLabel>
            <Select
              labelId="vehicle-label"
              label="Fahrzeug"
              value={state.vehicle}
              onChange={(e) =>
                setState({ ...state, vehicle: Number(e.target.value) })
              }
            >
              <MenuItem value={10}>Vehicle 1</MenuItem>
              <MenuItem value={20}>Vehicle 2</MenuItem>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
          <img
            src={plus_icon}
            alt="Car-Icon"
            style={{
              maxWidth: "30px",
              height: "auto",
              marginRight: "10px",
              marginLeft: "30px",
            }}
          />
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <FormControl fullWidth sx={{ width: "300px" }}>
            <InputLabel>Fahrzeugmarke</InputLabel>
            <Select>
              <MenuItem value={"BMW"}>BMW</MenuItem>
              <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
              <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
              <MenuItem value={"Audi"}>Audi</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <FormControl fullWidth sx={{ width: "300px" }}>
            <InputLabel>Fahrzeugtyp</InputLabel>
            <Select>
              <MenuItem value={VehicleType.Anhaenger}>Anhaenger</MenuItem>
              <MenuItem value={VehicleType.LKW}>LKW</MenuItem>
              <MenuItem value={VehicleType.PKW}>PKW</MenuItem>
              <MenuItem value={VehicleType.Sonstiges}>Sonstiges</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            width: "70%",
            marginBottom: "2vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            type="number"
            label="Frachtgröße (X)"
            inputProps={{ min: "0", step: "1" }}
            sx={{ mr: "2vh" }}
            onChange={(e) =>
              setState({ ...state, cargoSizeX: Number(e.target.value) })
            }
          />
          <TextField
            type="number"
            label="Frachtgröße (Y)"
            inputProps={{ min: "0", step: "1" }}
            sx={{ mr: "2vh" }}
            onChange={(e) =>
              setState({ ...state, cargoSizeY: Number(e.target.value) })
            }
          />
          <TextField
            type="number"
            label="Frachtgröße (Z)"
            inputProps={{ min: "0", step: "1" }}
            sx={{ mr: "2vh" }}
            onChange={(e) =>
              setState({ ...state, cargoSizeZ: Number(e.target.value) })
            }
          />
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <Typography>Gewicht (kg)</Typography>
          <Slider defaultValue={30} step={10} marks min={10} max={110} />
        </Box>

        <Box sx={{ marginBottom: "2vh" }}>
          <TextField label="Bemerkungen" multiline rows={4} />
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <Button variant="contained">Fahrzeug speichern</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Fahrzeugverwaltung;
