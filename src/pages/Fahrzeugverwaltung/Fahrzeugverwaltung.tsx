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
} from '@mui/material';
import { styled } from '@mui/system';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';
import car_icon from '../../assets/ICONS/car-icon.jpg';
import plus_icon from '../../assets/ICONS/plus_icon.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButton = styled(ToggleButton)({
  '&.Mui-selected': {
    backgroundColor: '#e2f0d9',
  },
});

const Fahrzeugverwaltung: React.FC = () => {
  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#e2f0d9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '3vh',
        }}
      >
        <img
          src={logo}
          alt='Logo'
          style={{
            maxWidth: '100px',
            height: 'auto',
            position: 'absolute',
            left: '15%',
          }}
        />
        <Typography variant='h6'> Meine Fahrzeuge Verwalten </Typography>
      </Box>
      <Box
        sx={{
          p: '3vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Box
          sx={{ marginBottom: '2vh', display: 'flex', alignItems: 'center' }}
        >
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
            <InputLabel>Wählen Sie ein Fahrzeug aus</InputLabel>
            <Select>
              <MenuItem value={1}>Fahrzeug 1</MenuItem>
              <MenuItem value={2}>Fahrzeug 2</MenuItem>
            </Select>
          </FormControl>
          <img
            src={plus_icon}
            alt='Car-Icon'
            style={{
              maxWidth: '30px',
              height: 'auto',
              marginRight: '10px',
              marginLeft: '30px',
            }}
          />
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <FormControl fullWidth sx={{ width: '200px' }}>
            <InputLabel>Fahrzeugmarke</InputLabel>
            <Select>
              <MenuItem value={'BMW'}>BMW</MenuItem>
              <MenuItem value={'Mercedes'}>Mercedes</MenuItem>
              <MenuItem value={'Volkswagen'}>Volkswagen</MenuItem>
              <MenuItem value={'Audi'}>Audi</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <FormControl fullWidth sx={{ width: '200px' }}>
            <InputLabel>Fahrzeugtyp</InputLabel>
            <Select>
              <MenuItem value={'Sedan'}>Sedan</MenuItem>
              <MenuItem value={'SUV'}>SUV</MenuItem>
              <MenuItem value={'Cabrio'}>Cabrio</MenuItem>
              <MenuItem value={'Coupé'}>Coupé</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <Typography>Gewicht (kg)</Typography>
          <Slider defaultValue={30} step={10} marks min={10} max={110} />
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <TextField label='Leistung (PS)' />
        </Box>
        <Typography>Anzahl der Sitzplätze</Typography>
        <Box sx={{ marginBottom: '2vh' }}>
          <FormControl fullWidth>
            <Select defaultValue={2}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <ToggleButtonGroup exclusive>
            <StyledToggleButton value={true}>Raucher</StyledToggleButton>
            <StyledToggleButton value={false}>Nichtraucher</StyledToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <ToggleButtonGroup exclusive>
            <StyledToggleButton value={true}>Tiere erlaubt</StyledToggleButton>
            <StyledToggleButton value={false}>Keine Tiere</StyledToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <TextField label='Bemerkungen' multiline rows={4} />
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <Button variant='contained'>Fahrzeug speichern</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Fahrzeugverwaltung;
