import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
} from '@mui/material';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';

const angebote = [
  { name: 'Angebot 1', description: 'Beschreibung 1' },
  { name: 'Angebot 2', description: 'Beschreibung 2' },
  { name: 'Angebot 3', description: 'Beschreibung 3' },
];

const Angebote: React.FC = () => {
  const theme = useTheme();
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
          Angebote
        </Typography>
      </Box>
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
          <Box key={index} sx={{ marginBottom: '2vh', mt: '3vh' }}>
            <Typography variant='h6'>{angebot.name}</Typography>
            <Typography variant='body1'>{angebot.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Angebote;
