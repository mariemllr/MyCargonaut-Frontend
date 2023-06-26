import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const FahrtenAnlage: React.FC = () => {
  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        backgroundColor: 'white',
        p: '3vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '3vh',
          backgroundColor: '#e2f0d9',
        }}
      >
        <Box sx={{ position: 'absolute', left: '2%', width: 'auto' }}>
          <img
            src={logo}
            alt='Logo'
            style={{ maxWidth: '100px', height: 'auto' }}
          />
        </Box>
        <Typography variant='h6'> FahrtenAnlage </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ pr: '2vh' }}>
          <TextField label='Startort' />
        </Box>
        <Box sx={{ pr: '2vh' }}>
          <TextField label='Zielort' />
        </Box>
        <Box sx={{ pr: '2vh' }}>
          <TextField
            label='Startdatum'
            type='date'
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Box>
      <Box>
        <ToggleButtonGroup exclusive>
          <ToggleButton value='offer'>Fahrtangebot</ToggleButton>
          <ToggleButton value='request'>Fahrtgesuch</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ pr: '2vh' }}>
          <FormControl fullWidth>
            <InputLabel>Fahrzeug</InputLabel>
            <Select>
              <MenuItem value={10}>Vehicle 1</MenuItem>
              <MenuItem value={20}>Vehicle 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ pr: '2vh' }}>
          <FormControl fullWidth>
            <InputLabel>Anhänger</InputLabel>
            <Select>
              <MenuItem value={10}>Anhänger 1</MenuItem>
              <MenuItem value={20}>Anhänger 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Typography>Gewicht (kg)</Typography>
        <TextField type='number' />
      </Box>
      <Box>
        <TextField label='Frachtgröße (X, Y, Z)' />
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel>Freie Sitzplätze</InputLabel>
          <Select>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <ToggleButtonGroup exclusive>
          <ToggleButton value={true}>Raucher</ToggleButton>
          <ToggleButton value={false}>Nicht-Raucher</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <ToggleButtonGroup exclusive>
          <ToggleButton value={true}>Tiere erlaubt</ToggleButton>
          <ToggleButton value={false}>Keine Tiere</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <TextField label='Bemerkungen' multiline rows={4} />
      </Box>
      <Box>
        <Button variant='contained'>Fahrt anlegen</Button>
      </Box>
    </Box>
  );
};

export default FahrtenAnlage;
