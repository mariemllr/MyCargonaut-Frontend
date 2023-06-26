import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import { RootState } from '../../App';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileInformation from '../../components/Profile/ProfileInformation/ProfileInformation';
import Grid2 from '@mui/material/Unstable_Grid2';

const ProfilePage: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user);

  return (
    <Container maxWidth='xl' disableGutters>
      <Grid2 container>
        <Grid2 xs={12}>
          <ProfileHeader></ProfileHeader>
        </Grid2>
        <Grid2 xs={12}>
          <ProfileInformation user={currentUser}></ProfileInformation>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ProfilePage;
