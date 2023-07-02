import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Slider,
  TextField,
  InputAdornment,
} from '@mui/material';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';

const VariableZahlung: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = useState('Paypal');
  const [personen, setPersonen] = useState<number>(1);
  const [gewicht, setGewicht] = useState<number>(20);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setGewicht(newValue as number);
  };

  const handlePersonenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonen(Number(event.target.value));
  };

  // muss sobald der Wert veränderbar ist zu "let" angepasst werden
  const preis = personen * 10;

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
          backgroundColor: theme.palette.primary.main,
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
        <Typography variant='h6' style={{ color: 'white' }}>
          Zahlung
        </Typography>
      </Box>
      <Box
        sx={{
          p: '3vh',
        }}
      >
        <Typography variant='h6'>
          Bestimme hier die Konditionen deiner Fahrt mit Max
        </Typography>
        <Typography variant='body1'>Anzahl der Personen:</Typography>
        <TextField
          type='number'
          InputProps={{ inputProps: { min: 0 } }}
          value={personen}
          onChange={handlePersonenChange}
        />
        <Typography variant='body1'>Gewicht:</Typography>
        <Slider
          value={gewicht}
          onChange={handleSliderChange}
          aria-labelledby='continuous-slider'
        />
        <Typography variant='body1'>{gewicht * 20} kg</Typography>
        <Typography variant='body1'>Ihr Preisangebot:</Typography>
        <TextField
          label='Angebot'
          InputProps={{
            startAdornment: <InputAdornment position='start'>€</InputAdornment>,
          }}
        />
        <Typography
          variant='body1'
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          Wie möchtest du bezahlen?
        </Typography>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='Zahlung'
            name='zahlung'
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value='Paypal'
              control={<Radio />}
              label='Paypal'
            />
            <FormControlLabel
              value='Kreditkarte'
              control={<Radio />}
              label='Kreditkarte'
            />
            <FormControlLabel value='Bar' control={<Radio />} label='Bar' />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button variant='contained' color='primary' style={{ margin: '20px' }}>
        Bezahlung abschließen
      </Button>
    </Box>
  );
};

export default VariableZahlung;
