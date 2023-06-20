// ProfilePage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box } from '@mui/material';
import { RootState } from '../../App';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileInformation from '../../components/ProfileInformation/ProfileInformation';

const ProfilePage: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ProfileHeader></ProfileHeader>
        <ProfileInformation></ProfileInformation>
      </Box>
    </Container>
  );
};

export default ProfilePage;
