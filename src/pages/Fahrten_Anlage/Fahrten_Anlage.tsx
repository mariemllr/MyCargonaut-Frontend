import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ModuleHeader from "../../components/ModuleHeader";
import Grid2 from "@mui/material/Unstable_Grid2";
import CreateOffer from "./CreateOffer";
import CreateRequest from "./CreateRequest";

type State = {
  rideAlignment: "offer" | "request" | "";
};

const defaultState: State = {
  rideAlignment: "offer",
};

const FahrtenAnlage: React.FC = () => {
  const [state, setState] = useState<State>(defaultState);

  const handleToggleButtonChange = (
    group: string,
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      [group]: newAlignment,
    }));
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <Grid2 container>
        <Grid2 xs={12}>
          <ModuleHeader
            header={
              state.rideAlignment === "offer"
                ? "Fahrtenanlage - Fahrtangebot"
                : "Fahrtenanlage - Fahrtgesuch"
            }
          />
        </Grid2>
        <Box
          sx={{
            border: "1.5px solid black",
            borderRadius: "1px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Box>
            <Box sx={{ mb: 2 }}>
              <ToggleButtonGroup
                color="primary"
                value={state.rideAlignment}
                exclusive
                onChange={(event, newAlignment) =>
                  handleToggleButtonChange("rideAlignment", event, newAlignment)
                }
              >
                <ToggleButton value="offer">Fahrtangebot</ToggleButton>
                <ToggleButton value="request">Fahrtgesuch</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            {state.rideAlignment === "offer" && <CreateOffer />}
            {state.rideAlignment === "request" && <CreateRequest />}
          </Box>
        </Box>
      </Grid2>
    </Container>
  );
};

export default FahrtenAnlage;
