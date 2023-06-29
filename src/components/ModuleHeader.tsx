import { Typography, Box } from '@mui/material';
import logo from '../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type ModuleHeaderProps = {
  header: string;
};

const ModuleHeader: React.FC<ModuleHeaderProps> = ({ header }) => {
  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '3vh',
        width: '100%',
        position: 'relative',
        backgroundColor: '#e2f0d9',
      }}
    >
      <Box sx={{ position: 'absolute', left: '2%', width: 'auto' }}>
        <img
          src={logo}
          alt='Logo'
          style={{ maxWidth: '100px', height: 'auto' }}
        />
      </Box>
      <Typography variant='h6'> {header} </Typography>
      <Box
        sx={{
          position: 'absolute',
          right: '2%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AccountBoxIcon fontSize='large' />
      </Box>
    </Box>
  );
};

export default ModuleHeader;
