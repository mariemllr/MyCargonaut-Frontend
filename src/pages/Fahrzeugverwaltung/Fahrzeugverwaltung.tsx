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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import car_icon from "../../assets/ICONS/car-icon.jpg";
import plus_icon from "../../assets/ICONS/plus_icon.png";
import ToggleButton from "@mui/material/ToggleButton";
import ModuleHeader from "../../components/ModuleHeader";
import rest from "../../utility/rest";

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
  id?: number;
  userId?: number;
  name?: string;
  type?: VehicleType;
  model?: string;
  cargoSizeX?: number;
  cargoSizeY?: number;
  cargoSizeZ?: number;
  weight?: number;
}

const defaultState: VehicleState = {
  id: undefined,
  userId: undefined,
  type: VehicleType.PKW,
  model: "",
  name: "",
  cargoSizeX: 0,
  cargoSizeY: 0,
  cargoSizeZ: 0,
  weight: 50,
};

const Fahrzeugverwaltung: React.FC = () => {
  const [state, setState] = useState<VehicleState>(defaultState);
  const [vehicleList, setVehicleList] = useState<VehicleState[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newVehicleName, setNewVehicleName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await rest.get("vehicle");
        if (response && response.data) {
          const transformedData: VehicleState[] = response.data.map(
            (item: any) => ({
              id: item.id,
              userId: item.userId,
              name: item.name,
              type: item.type,
              model: item.model,
              cargoSizeX: item.mass_x,
              cargoSizeY: item.mass_y,
              cargoSizeZ: item.mass_z,
              weight: item.weight,
            })
          );
          setVehicleList(transformedData);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  const addNewVehicle = () => {
    const newVehicle: VehicleState = {
      ...defaultState,
      name: newVehicleName,
    };
    setVehicleList([...vehicleList, newVehicle]);
    setNewVehicleName("");
    setDialogOpen(false);
  };

  const handleSubmit = async () => {
    try {
      if (
        !state.name ||
        state.type === null ||
        !state.model ||
        state.cargoSizeX === null ||
        state.cargoSizeY === null ||
        state.cargoSizeZ === null
      ) {
        setShowAlert(true);
        return;
      } else {
        setShowAlert(false);
      }

      const postData = {
        name: state.name,
        type: state.type,
        model: state.model,
        mass_x: state.cargoSizeX,
        mass_y: state.cargoSizeY,
        mass_z: state.cargoSizeZ,
        weight: state.weight,
      };

      const exists = await rest.get(`vehicle/${state.name}`);
      console.log(exists.data);
      if (exists.data === true) {
        await rest.put(`vehicle/${state.name}`, postData);
      } else {
        await rest.post("vehicle/create", postData);
      }
    } catch (error) {
      console.error(error);
    }
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
            <InputLabel id="vehicle-label" required>
              Fahrzeug
            </InputLabel>
            <Select
              labelId="vehicle-label"
              label="Fahrzeug"
              value={state.name}
              onChange={(e) => {
                const selectedVehicleName = e.target.value;
                const selectedVehicle = vehicleList.find(
                  (vehicle) => vehicle.name === selectedVehicleName
                );
                if (selectedVehicle) {
                  console.log("Selected Vehicle:", selectedVehicle);
                  setState(selectedVehicle);
                  console.log("Updated State:", state);
                } else {
                  setState(defaultState);
                }
              }}
              required={true}
            >
              {vehicleList.map((vehicle) => (
                <MenuItem key={vehicle.name} value={vehicle.name}>
                  {vehicle.name}
                </MenuItem>
              ))}
            </Select>

            <FormHelperText></FormHelperText>
          </FormControl>
          <img
            src={plus_icon}
            alt="Plus-Icon"
            style={{
              maxWidth: "30px",
              height: "auto",
              marginRight: "10px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
            onClick={() => setDialogOpen(true)}
          />
        </Box>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Füge ein neues Fahrzeug hinzu</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Bitte wähle einen Namen für dein Fahrzeug.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Fahrzeugname"
              type="text"
              fullWidth
              value={newVehicleName}
              onChange={(e) => setNewVehicleName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="primary">
              Abbrechen
            </Button>
            <Button onClick={addNewVehicle} color="primary">
              Hinzufügen
            </Button>
          </DialogActions>
        </Dialog>
        <Box sx={{ marginBottom: "2vh" }}>
          <FormControl fullWidth sx={{ width: "300px" }}>
            <InputLabel id="vehicle-brand" required>
              Fahrzeugmarke
            </InputLabel>
            <Select
              labelId="vehicle-brand"
              label="Fahrzeugmarke"
              value={state.model}
              onChange={(e) => setState({ ...state, model: e.target.value })}
              required={true}
            >
              <MenuItem value={"BMW"}>BMW</MenuItem>
              <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
              <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
              <MenuItem value={"Audi"}>Audi</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <FormControl fullWidth sx={{ width: "300px" }}>
            <InputLabel id="vehicle-type" required>
              Fahrzeugtyp
            </InputLabel>
            <Select
              labelId="vehicle-type"
              label="Fahrzeugtyp"
              value={state.type}
              onChange={(e) =>
                setState({
                  ...state,
                  type: e.target.value as unknown as VehicleType,
                })
              }
              required={true}
            >
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
            value={state.cargoSizeX}
            onChange={(e) =>
              setState({ ...state, cargoSizeX: Number(e.target.value) })
            }
            InputProps={{
              inputProps: {
                min: 0,
                step: 1,
              },
            }}
            required
          />

          <TextField
            type="number"
            label="Frachtgröße (Y)"
            value={state.cargoSizeY}
            onChange={(e) =>
              setState({ ...state, cargoSizeY: Number(e.target.value) })
            }
            InputProps={{
              inputProps: {
                min: 0,
                step: 1,
              },
            }}
            required
          />

          <TextField
            type="number"
            label="Frachtgröße (Z)"
            value={state.cargoSizeZ}
            onChange={(e) =>
              setState({ ...state, cargoSizeZ: Number(e.target.value) })
            }
            InputProps={{
              inputProps: {
                min: 0,
                step: 1,
              },
            }}
            required
          />
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <Typography>Gewicht (kg)</Typography>
          <Box sx={{ width: 300 }}>
            <Slider
              min={0}
              max={500}
              marks={[
                { value: 0, label: "0" },
                { value: 500, label: "500" },
              ]}
              value={state.weight}
              valueLabelDisplay="on"
              onChange={(e, newValue) => {
                setState({
                  ...state,
                  weight: newValue as number,
                });
              }}
            />
          </Box>
        </Box>
        <Box sx={{ marginBottom: "2vh" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Fahrzeug speichern
          </Button>
        </Box>
        {showAlert && (
          <Alert severity="error" onClose={() => setShowAlert(false)}>
            Bitte fülle alle Felder vollständig aus.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Fahrzeugverwaltung;
