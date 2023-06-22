import React from 'react';
import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom';
import {
  Container,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Dummy Liste mit Angeboten
const angebote = [
  { name: 'Angebot 1', description: 'Beschreibung 1' },
  { name: 'Angebot 2', description: 'Beschreibung 2' },
  { name: 'Angebot 3', description: 'Beschreibung 3' },
];

function Angebote() {
  const theme = useTheme(); // Zugriff auf das Theme

  return (
    <Container>
      <Box bgcolor={theme.palette.primary.main} color='white' p={2}>
        {' '}
        {/* Verwendung der Hauptfarbe aus dem Theme für den Hintergrund */}
        <h1>Angebote</h1>
      </Box>
      <Box bgcolor={theme.palette.secondary.main} p={2}>
        {' '}
        {/* Verwendung der Sekundärfarbe aus dem Theme für den Hintergrund */}
        <form noValidate autoComplete='off'>
          <Grid container spacing={3} alignItems='center'>
            {' '}
            {/* Vertikale Ausrichtung der Elemente */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id='startort'
                label='Startort'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id='zielort'
                label='Zielort'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id='datum'
                label='Datum'
                type='date'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button variant='contained' color='primary' type='submit'>
                Suche
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <List>
        {angebote.map((angebot, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={angebot.name}
              secondary={angebot.description}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Angebote;
