// ProfilePage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Container, Box, Stack } from '@mui/material';
import { RootState } from '../../App';
import logo from '../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

const ProfilePage = () => {
  const currentUser = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ProfileHeader></ProfileHeader>
      </Box>
    </Container>
  );
};

export default ProfilePage;
