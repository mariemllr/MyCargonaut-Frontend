import { Box, Typography, Grid, Button } from '@mui/material';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';
import arrow_right_icon from '../../assets/ICONS/arrow_right_icon.png';

const FahrtenDetailansicht: React.FC = () => {
  const details = {
    startort: 'Berlin',
    zielort: 'Hamburg',
    startdatum: '2023-06-30',
    fahrtType: 'Fahrtangebot',
    fahrzeug: 'Vehicle 1',
    anhaenger: 'Anhänger 1',
    gewicht: '30kg',
    frachtgroesse: { x: 10, y: 20, z: 30 },
    freieSitzplaetze: 2,
    raucher: false,
    tiere: true,
    bemerkungen: 'Keine',
  };

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
        <Typography variant='h6'>
          {' '}
          Fahrt mit Max Nach von Heidelberg nach Düsseldorf{' '}
        </Typography>
      </Box>
      <Box
        sx={{
          p: '3vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          marginLeft: '300px',
          marginRight: '300px',
        }}
      >
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={4}>
            <Typography>Startort: {details.startort}</Typography>
          </Grid>
          <Grid item xs={1}>
            <img
              src={arrow_right_icon}
              alt='arrow-right-icon'
              style={{ maxWidth: '30px', height: 'middle' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Zielort: {details.zielort}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Startdatum: {details.startdatum}</Typography>
          </Grid>
        </Grid>
        <Typography>Fahrt Typ: {details.fahrtType}</Typography>
        <Typography>Fahrzeug: {details.fahrzeug}</Typography>
        <Typography>Anhänger: {details.anhaenger}</Typography>
        <Typography>Gewicht: {details.gewicht}</Typography>
        <Typography>
          Maximale Frachtgröße (X, Y, Z): {details.frachtgroesse.x},{' '}
          {details.frachtgroesse.y}, {details.frachtgroesse.z}
        </Typography>
        <Typography>Freie Sitzplätze: {details.freieSitzplaetze}</Typography>
        <Typography>Raucher: {details.raucher ? 'Ja' : 'Nein'}</Typography>
        <Typography>Tiere erlaubt: {details.tiere ? 'Ja' : 'Nein'}</Typography>
        <Typography>Bemerkungen: {details.bemerkungen}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3vh',
          }}
        >
          <Button variant='contained' sx={{ marginRight: '2vh' }}>
            Angebot machen
          </Button>
          <Button variant='contained'>Fahrt antreten</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FahrtenDetailansicht;
