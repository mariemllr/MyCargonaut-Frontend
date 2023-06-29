import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Slider,
  FormHelperText,
  InputLabel,
} from '@mui/material';
import { Container, styled } from '@mui/system';
import car_icon from '../../assets/ICONS/car-icon.jpg';
import trailer_icon from '../../assets/ICONS/trailer-icon.jpg';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import EventIcon from '@mui/icons-material/Event';
import { useState } from 'react';
import ModuleHeader from '../../components/ModuleHeader';
import Grid2 from '@mui/material/Unstable_Grid2';

const StyledToggleButton = styled(ToggleButton)({
  '&.Mui-selected': {
    backgroundColor: '#e2f0d9',
  },
});

type State = {
  rideAlignment: 'offer' | 'request' | '';
  smokerAlignment: boolean | null;
  animalAlignment: boolean | null;
  cargoWeight: number;
  vehicle: number | null;
  trailer: number | null;
  seats: number | null;
  startLocation: string;
  destination: string;
  startDate: Date | null;
  remark: string;
};

const defaultState: State = {
  rideAlignment: '',
  smokerAlignment: null,
  animalAlignment: null,
  cargoWeight: 0,
  vehicle: null,
  trailer: null,
  seats: null,
  startLocation: '',
  destination: '',
  startDate: null,
  remark: '',
};

const FahrtenAnlage: React.FC = () => {
  const [state, setState] = useState<State>(defaultState);

  const handleToggleButtonChange = (
    group: string,
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setState((prevState) => ({
      ...prevState,
      [group]: newAlignment,
    }));
  };

  return (
    <Container maxWidth='xl' disableGutters>
      <Grid2 container>
        <Grid2 xs={12}>
          <ModuleHeader header={'Fahrtenanlage'}></ModuleHeader>
        </Grid2>
        <Box
          sx={{
            border: '1.5px solid black',
            borderRadius: '1px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <Grid2 xs={12}>
            <Box
              sx={{
                p: '3vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '2vh',
                }}
              >
                <Box sx={{ pr: '2vh' }}>
                  <TextField
                    value={state.startLocation}
                    label='Startort'
                    onChange={(e) =>
                      setState({ ...state, startLocation: e.target.value })
                    }
                  />
                </Box>
                <Box sx={{ pr: '2vh' }}>
                  <img
                    src={arrow_right_icon}
                    alt='Car-Icon'
                    style={{ maxWidth: '50px' }}
                  />
                </Box>
                <Box sx={{ pr: '2vh' }}>
                  <TextField
                    value={state.destination}
                    label='Zielort'
                    onChange={(e) =>
                      setState({ ...state, destination: e.target.value })
                    }
                  />
                </Box>
                <Box sx={{ pr: '2vh' }}>
                  <TextField
                    label='Startdatum'
                    type='date'
                    InputLabelProps={{ shrink: true }}
                  />
                  <EventIcon sx={{ fontSize: '3.5rem', marginLeft: '1rem' }} />
                </Box>
              </Box>
              <Box sx={{ marginBottom: '2vh' }}>
                <ToggleButtonGroup
                  color='primary'
                  value={state.rideAlignment}
                  exclusive
                  onChange={(event, newAlignment) =>
                    handleToggleButtonChange(
                      'rideAlignment',
                      event,
                      newAlignment,
                    )
                  }
                >
                  <ToggleButton value='offer'>Fahrtangebot</ToggleButton>
                  <ToggleButton value='request'>Fahrtgesuch</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '2vh',
                }}
              >
                <Box sx={{ pr: '2vh', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={car_icon}
                    alt='Car-Icon'
                    style={{
                      maxWidth: '50px',
                      height: 'auto',
                      marginRight: '10px',
                    }}
                  />
                  <FormControl fullWidth sx={{ width: '200px' }}>
                    <InputLabel id='vehicle-label'>Fahrzeug</InputLabel>
                    <Select
                      labelId='vehicle-label'
                      label='Fahrzeug'
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
                  <Box
                    sx={{ pr: '2vh', display: 'flex', alignItems: 'center' }}
                  >
                    <img
                      src={trailer_icon}
                      alt='trailer-Icon'
                      style={{
                        maxWidth: '50px',
                        height: 'auto',
                        marginRight: '10px',
                      }}
                    />
                    <FormControl fullWidth sx={{ width: '200px' }}>
                      <InputLabel id='trailer-label'>Anhänger</InputLabel>
                      <Select
                        labelId='trailer-label'
                        label='Anhänger'
                        value={state.trailer}
                        onChange={(e) =>
                          setState({
                            ...state,
                            trailer: Number(e.target.value),
                          })
                        }
                      >
                        <MenuItem value={10}>Anhänger 1</MenuItem>
                        <MenuItem value={20}>Anhänger 2</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ marginBottom: '2vh' }}>
                <Typography>Gewicht (kg)</Typography>
                <Box sx={{ width: 300 }}>
                  <Slider
                    min={0}
                    max={500}
                    marks={[
                      { value: 0, label: '0' },
                      { value: 500, label: '500' },
                    ]}
                    value={state.cargoWeight}
                    valueLabelDisplay='on'
                    onChange={(e, newValue) => {
                      setState({
                        ...state,
                        cargoWeight: newValue as number,
                      });
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: '70%',
                  marginBottom: '2vh',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  type='number'
                  label='Frachtgröße (X)'
                  inputProps={{ min: '0', step: '1' }}
                />
                <TextField
                  type='number'
                  label='Frachtgröße (Y)'
                  inputProps={{ min: '0', step: '1' }}
                />
                <TextField
                  type='number'
                  label='Frachtgröße (Z)'
                  inputProps={{ min: '0', step: '1' }}
                />
              </Box>
              <Box sx={{ marginBottom: '2vh' }}>
                <FormControl fullWidth>
                  <Typography>Freie Sitzplätze</Typography>
                  <Select>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ marginBottom: '2vh' }}>
                <ToggleButtonGroup
                  color='primary'
                  value={state.smokerAlignment}
                  exclusive
                  onChange={(event, newAlignment) =>
                    handleToggleButtonChange(
                      'smokerAlignment',
                      event,
                      newAlignment,
                    )
                  }
                >
                  <StyledToggleButton value={true}>Raucher</StyledToggleButton>
                  <StyledToggleButton value={false}>
                    Nichtraucher
                  </StyledToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ marginBottom: '2vh' }}>
                <ToggleButtonGroup
                  color='primary'
                  value={state.animalAlignment}
                  exclusive
                  onChange={(event, newAlignment) =>
                    handleToggleButtonChange(
                      'animalAlignment',
                      event,
                      newAlignment,
                    )
                  }
                >
                  <StyledToggleButton value={true}>
                    Tiere erlaubt
                  </StyledToggleButton>
                  <StyledToggleButton value={false}>
                    Keine Tiere
                  </StyledToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ marginBottom: '2vh', width: '100%' }}>
                <TextField
                  fullWidth
                  label='Bemerkungen'
                  multiline
                  rows={4}
                  value={state.remark}
                  onChange={(e) =>
                    setState({ ...state, remark: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ marginBottom: '2vh' }}>
                <Button variant='contained'>Fahrt anlegen</Button>
              </Box>
            </Box>
          </Grid2>
        </Box>
      </Grid2>
    </Container>
  );
};

export default FahrtenAnlage;
