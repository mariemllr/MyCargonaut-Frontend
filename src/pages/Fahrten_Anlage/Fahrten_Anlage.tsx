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
import trailer_icon from '../../assets/ICONS/trailer-icon.jpg';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButton = styled(ToggleButton)({
  '&.Mui-selected': {
    backgroundColor: '#e2f0d9',
  },
});

const FahrtenAnlage: React.FC = () => {
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
        <Typography variant='h6'> FahrtenAnlage </Typography>
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
          sx={{ display: 'flex', flexDirection: 'row', marginBottom: '2vh' }}
        >
          <Box sx={{ pr: '2vh' }}>
            <TextField label='Startort' />
          </Box>
          <Box sx={{ pr: '2vh' }}>
            <img
              src={arrow_right_icon}
              alt='Car-Icon'
              style={{ maxWidth: '50px' }}
            />
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
        <Box sx={{ marginBottom: '2vh' }}>
          <ToggleButtonGroup exclusive>
            <StyledToggleButton value='offer'>Fahrtangebot</StyledToggleButton>
            <StyledToggleButton value='request'>Fahrtgesuch</StyledToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', marginBottom: '2vh' }}
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
              <InputLabel>Fahrzeug</InputLabel>
              <Select>
                <MenuItem value={10}>Vehicle 1</MenuItem>
                <MenuItem value={20}>Vehicle 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ pr: '2vh', display: 'flex', alignItems: 'center' }}>
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
              <InputLabel>Anhänger</InputLabel>
              <Select>
                <MenuItem value={10}>Anhänger 1</MenuItem>
                <MenuItem value={20}>Anhänger 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <Typography>Gewicht (kg)</Typography>
          <Slider defaultValue={30} step={10} marks min={10} max={110} />
        </Box>
        <Box sx={{ marginBottom: '2vh' }}>
          <Typography>Frachtgröße</Typography>
          <TextField label='Frachtgröße (X)' />
          <TextField label='Frachtgröße (Y)' />
          <TextField label='Frachtgröße (Z)' />
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
          <Button variant='contained'>Fahrt anlegen</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FahrtenAnlage;
