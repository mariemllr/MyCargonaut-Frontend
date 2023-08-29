import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';
import ModuleHeader from '../../components/ModuleHeader';
import rest from '../../utility/rest';
interface Offer {
  id: number;
  userId: number;
  userId_accepter?: number;
  startlocation?: string;
  endlocation?: string;
  date?: Date;
  price_absolute?: number;
  price_per_freight?: number;
  price_per_person?: number;
  seats?: number;
  stops?: string;
  weight?: number;
  mass_x?: number;
  mass_y?: number;
  mass_z?: number;
  smoking?: boolean;
  animals?: boolean;
  status?: string;
  notes?: string;
}

const angeboteTest = [
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
  const [angebote, setAngebote] = useState<Offer[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await rest.get('offers');
        setAngebote(response.data);
      } catch (e) {
        console.error('An error occurred while fetching offers:', e);
      }
    };

    fetchOffers();
  }, []);
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
              <Button
                variant='contained'
                color='primary'
                type='submit'
                sx={{ mt: 2 }}
              >
                Suche
              </Button>
            </Grid>
          </Grid>
        </form>
        {angebote.map((angebot, index) => (
          <Grid container key={index} sx={{ mb: '2vh', mt: '3vh' }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '80%',
                    alignItems: 'center',
                  }}
                >
                  <Typography>{angebot.startlocation}</Typography>
                  <Box>
                    <img
                      src={arrow_right_icon}
                      alt='Arrow Icon'
                      style={{
                        maxWidth: '50px',
                        height: 'auto',
                      }}
                    />
                  </Box>
                  <Typography>{angebot.endlocation}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'flex-start',
                  }}
                >
                  <Typography>
                    {angebot.date?.toLocaleDateString() ?? 'Date not available'}
                  </Typography>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography>{angebot.animals}</Typography>
                </Box>
                <Box>
                  <Typography>{angebot.id}</Typography>
                </Box>
              </Box>
            </Grid>
            {index !== angebote.length - 1 && (
              <Divider sx={{ width: '100%' }} />
            )}
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Angebote;
