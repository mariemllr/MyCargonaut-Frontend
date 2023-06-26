import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth='xl'>
      <AppBar position='static' sx={{ mt: 2, bgcolor: '#acd48c' }}>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            color='inherit'
            onClick={() => navigate('/')}
            sx={{
              p: 2,
              borderColor: 'black',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 0,
              flexGrow: 1,
            }}
          >
            Home
          </Button>
          <Button
            color='inherit'
            onClick={() => navigate('/profil')}
            sx={{
              p: 2,
              borderColor: 'black',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 0,
              flexGrow: 1,
            }}
          >
            Profil
          </Button>
          <Button
            color='inherit'
            onClick={() => navigate('/vehicles')}
            sx={{
              p: 2,
              borderColor: 'black',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 0,
              flexGrow: 1,
            }}
          >
            Fahrzeuge
          </Button>
          <Button
            color='inherit'
            onClick={() => navigate('/create-entry')}
            sx={{
              p: 2,
              borderColor: 'black',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 0,
              flexGrow: 1,
            }}
          >
            Eintrag anlegen
          </Button>
          <Button
            color='inherit'
            onClick={() => navigate('/chat')}
            sx={{
              p: 2,
              borderColor: 'black',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 0,
              flexGrow: 1,
            }}
          >
            Chat
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
