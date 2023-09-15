import React from 'react';
import { Box, Typography, Divider, LinearProgress } from '@mui/material';
import ModuleHeader from '../../components/ModuleHeader';

const Tracking: React.FC = () => {
  const progress = 50;
  const mapImgUrl =
    'https://th.bing.com/th/id/R.18d6bfb1ffeb8aff520b410283862774?rik=gBoXfNLbSlM7vg&pid=ImgRaw&r=0';

  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        backgroundColor: 'white',
      }}
    >
      <ModuleHeader header={'Tracking'}></ModuleHeader>
      <Box
        sx={{
          p: '3vh',
        }}
      >
        <Typography variant='h6' gutterBottom>
          Aktueller Fortschrit der Fahrt ({progress}%):
        </Typography>
        <Box sx={{ width: '100%', mb: '3vh' }}>
          <LinearProgress variant='determinate' value={progress} />
        </Box>
        <Typography>Der Fahrer ist auf dem Weg zur Abholung</Typography>
        <Divider sx={{ width: '100%', mt: '3vh', mb: '3vh' }} />
        <Box sx={{ width: '100%', mb: '3vh', textAlign: 'center' }}>
          <img
            src={mapImgUrl}
            alt='Tracking-Bild'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tracking;
