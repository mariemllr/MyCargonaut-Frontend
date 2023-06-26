import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { RootState } from '../../App';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileInformation from '../../components/Profile/ProfileInformation/ProfileInformation';
import Grid2 from '@mui/material/Unstable_Grid2';

const ProfilePage: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user);
  console.log(currentUser);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        mt: '10vh',
      }}
    >
      <Grid2 container sx={{ width: '80%' }}>
        <Grid2 xs={12}>
          <ProfileHeader></ProfileHeader>
        </Grid2>
        <Grid2 xs={12}>
          <ProfileInformation user={currentUser}></ProfileInformation>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProfilePage;
