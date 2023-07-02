import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Slider,
  styled,
  InputLabel,
} from '@mui/material';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import EventIcon from '@mui/icons-material/Event';
import { useState } from 'react';

const StyledToggleButton = styled(ToggleButton)({
  '&.Mui-selected': {
    backgroundColor: '#e2f0d9',
  },
});

type State = {
  smokerAlignment: boolean | null;
  animalAlignment: boolean | null;
  cargoWeight: number;
  seats: number | null;
  startLocation: string;
  destination: string;
  startDate: Date | null;
  remark: string;
  cargoSizeX: number | null;
  cargoSizeY: number | null;
  cargoSizeZ: number | null;
};

const defaultState: State = {
  smokerAlignment: null,
  animalAlignment: null,
  cargoWeight: 50,
  seats: null,
  startLocation: '',
  destination: '',
  startDate: null,
  remark: '',
  cargoSizeX: null,
  cargoSizeY: null,
  cargoSizeZ: null,
};

const CreateRequest: React.FC = () => {
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

  const handleSubmit = () => {
    // TODO
  };

  return (
    <>
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
            onChange={(e) =>
              setState({ ...state, startDate: new Date(e.target.value) })
            }
          />

          <EventIcon sx={{ fontSize: '3.5rem', marginLeft: '1rem' }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '2vh',
        }}
      ></Box>
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
          sx={{ mr: '2vh' }}
          onChange={(e) =>
            setState({ ...state, cargoSizeX: Number(e.target.value) })
          }
        />
        <TextField
          type='number'
          label='Frachtgröße (Y)'
          inputProps={{ min: '0', step: '1' }}
          sx={{ mr: '2vh' }}
          onChange={(e) =>
            setState({ ...state, cargoSizeY: Number(e.target.value) })
          }
        />
        <TextField
          type='number'
          label='Frachtgröße (Z)'
          inputProps={{ min: '0', step: '1' }}
          sx={{ mr: '2vh' }}
          onChange={(e) =>
            setState({ ...state, cargoSizeZ: Number(e.target.value) })
          }
        />
      </Box>
      <Box sx={{ marginBottom: '2vh' }}>
        <FormControl fullWidth sx={{ width: '200px' }}>
          <InputLabel id='seats-label'>Freie Sitzplätze</InputLabel>
          <Select
            labelId='seats-label'
            label='Freie Sitzplätze'
            onChange={(e) =>
              setState({
                ...state,
                seats: Number(e.target.value),
              })
            }
          >
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
            handleToggleButtonChange('smokerAlignment', event, newAlignment)
          }
        >
          <ToggleButton value={true}>Raucher</ToggleButton>
          <ToggleButton value={false}>Nichtraucher</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ marginBottom: '2vh' }}>
        <ToggleButtonGroup
          color='primary'
          value={state.animalAlignment}
          exclusive
          onChange={(event, newAlignment) =>
            handleToggleButtonChange('animalAlignment', event, newAlignment)
          }
        >
          <StyledToggleButton value={true}>Tiere erlaubt</StyledToggleButton>
          <StyledToggleButton value={false}>Keine Tiere</StyledToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ marginBottom: '2vh', width: '100%' }}>
        <TextField
          fullWidth
          label='Bemerkungen'
          multiline
          rows={4}
          value={state.remark}
          onChange={(e) => setState({ ...state, remark: e.target.value })}
        />
      </Box>
      <Box sx={{ marginBottom: '2vh' }}>
        <Button variant='contained' onClick={handleSubmit}>
          Fahrt anlegen
        </Button>
      </Box>
    </>
  );
};

export default CreateRequest;
