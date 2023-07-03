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

/** 
const angebote = [
  { name: 'Angebot 1', description: 'Beschreibung 1' },
  { name: 'Angebot 2', description: 'Beschreibung 2' },
  { name: 'Angebot 3', description: 'Beschreibung 3' },
]; */

type Gesuch = {
  startlocation: string;
  endlocation: string;
  date: Date;
  userId: number;
};

const Gesuche: React.FC = () => {
  const [gesuche, setGesuche] = useState<Gesuch[]>([]);

  useEffect(() => {
    const fetchGesuche = async () => {
      try {
        const response = await rest.get('IHR_BACKEND_URL');
        setGesuche(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Gesuche:', error);
      }
    };

    fetchGesuche();
  }, []);
  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        backgroundColor: 'white',
      }}
    >
      <ModuleHeader header={'Gesuche'}></ModuleHeader>
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
        {gesuche.map((gesuch, index) => (
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
                  <Typography>{gesuch.startlocation}</Typography>
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
                  <Typography>{gesuch.endlocation}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'flex-start',
                  }}
                >
                  <Typography>
                    {' '}
                    {new Date(gesuch.date).toLocaleDateString()}{' '}
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
                  <Typography>{gesuch.userId}</Typography>
                </Box>
                <Box>
                  <Typography>{gesuch.userId}</Typography>
                </Box>
              </Box>
            </Grid>
            {index !== gesuche.length - 1 && <Divider sx={{ width: '100%' }} />}
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Gesuche;
