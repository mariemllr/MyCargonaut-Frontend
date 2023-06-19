import { Avatar, Box, Button } from '@mui/material';
import React from 'react';
import UploadIcon from '@mui/icons-material/Upload';

type UserAvatarProps = {
  lastName?: string;
  image?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserAvatar = ({ lastName, image, onChange }: UserAvatarProps) => {
  return (
    <Box sx={{ margin: 1 }}>
      <Avatar
        sx={{ width: 100, height: 100, mb: 1, marginLeft: 5, marginRight: 2 }}
        alt={lastName}
        src={image}
      />
      <Button
        key='selectImage'
        component='label'
        variant='contained'
        startIcon={<UploadIcon />}
      >
        Bild auswählen
        <input
          hidden
          accept='image/*'
          multiple
          type='file'
          onChange={onChange}
        />
      </Button>
    </Box>
  );
};

export default UserAvatar;
