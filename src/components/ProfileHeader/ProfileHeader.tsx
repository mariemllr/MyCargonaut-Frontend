import { Typography, Box, Stack } from '@mui/material';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ProfileHeader = () => {
  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        display: 'flex',
        justifyContent: 'center',
        mt: '20vh',
        p: '2vh',
        width: '70%',
        backgroundColor: '#e2f0d9',
      }}
    >
      <Stack direction='row' sx={{ alignItems: 'center', width: '100%' }}>
        <Box sx={{ pl: '2%' }}>
          <img
            src={logo}
            alt='Logo'
            style={{ width: '65px', height: '30px' }}
          />
        </Box>
        <Box flexGrow={1} display='flex' justifyContent='center'>
          <Typography variant='h6'> Mein Profil </Typography>
        </Box>
        <Box sx={{ pr: '2%', alignItems: 'center' }}>
          <AccountBoxIcon fontSize='large' />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileHeader;
