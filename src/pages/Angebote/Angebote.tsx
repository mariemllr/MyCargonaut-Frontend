import React from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
  Stack,
} from '@mui/material';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';
import ModuleHeader from '../../components/ModuleHeader';
import Grid2 from '@mui/material/Unstable_Grid2';

const angebote = [
  {
    start: 'Köln',
    destination: 'Bochum',
    date: new Date(),
    car: 'VW Sprinter',
    name: 'Paul K.',
  },
  {
    start: 'Berlin',
    destination: 'Hamburg',
    date: new Date(),
    car: 'Mercedes Vito',
    name: 'Lara S.',
  },
  {
    start: 'München',
    destination: 'Frankfurt',
    date: new Date(),
    car: 'BMW i3',
    name: 'Otto G.',
  },
  {
    start: 'Dresden',
    destination: 'Leipzig',
    date: new Date(),
    car: 'Tesla Model 3',
    name: 'Marie L.',
  },
  {
    start: 'Hannover',
    destination: 'Bremen',
    date: new Date(),
    car: 'Opel Corsa',
    name: 'Peter M.',
  },
];

const Angebote: React.FC = () => {
  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        backgroundColor: 'white',
      }}
    >
      <ModuleHeader header={'Angebote'}></ModuleHeader>
      <Box
        sx={{
          p: '3vh',
        }}
      >
        <form noValidate autoComplete='off'>
          <Grid container spacing={3} alignItems='center'>
            <Grid item xs={10} sm={2}>
              <FormControl fullWidth>
                <TextField id='startort' label='Startort' variant='outlined' />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={1}>
              <img
                src={arrow_right_icon}
                alt='Arrow Icon'
                style={{
                  maxWidth: '50px',
                  height: 'auto',
                }}
              />
            </Grid>
            <Grid item xs={10} sm={2}>
              <FormControl fullWidth>
                <TextField id='zielort' label='Zielort' variant='outlined' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <TextField
                  id='datum'
                  label='Datum'
                  type='date'
                  InputLabelProps={{ shrink: true }}
                  variant='outlined'
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button variant='contained' color='primary' type='submit'>
                Suche
              </Button>
            </Grid>
          </Grid>
        </form>
        {angebote.map((angebot, index) => (
          <Box
            key={index}
            sx={{
              mb: '2vh',
              mt: '3vh',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={1}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography noWrap>{angebot.start}</Typography>
                  </Box>

                  <img
                    src={arrow_right_icon}
                    alt='Arrow Icon'
                    style={{
                      maxWidth: '50px',
                      height: 'auto',
                    }}
                  />

                  <Typography>{angebot.destination}</Typography>
                </Box>
                <Box sx={{ ml: 5 }}>
                  <Typography>{angebot.car}</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Angebote;
