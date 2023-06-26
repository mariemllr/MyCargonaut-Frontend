import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { UserState } from '../../../reducer/user';
import UserAvatar from '../../UserAvatar/UserAvatar';
import Evaluation from '../../Evaluation/Evaluation';
import uploadImage from '../../../utility/UploadImage';

interface ProfileInformationProps {
  user: UserState;
}

const ProfileInformation: React.FC<ProfileInformationProps> = ({ user }) => {
  const handleEdit = () => {
    // Add your functionality here
  };

  const handleImageChange = () => {
    uploadImage(user.image);
  };

  return (
    <Box
      sx={{
        border: '1.5px solid black',
        borderRadius: '1px',
        width: '100%',
        p: '3vh',
      }}
    >
      <Grid2 container>
        <Grid2 xs={7}>
          <Box
            sx={{
              border: '1.5px solid #e2f0d9',
              borderRadius: '1px',
              width: '100%',
              p: '2vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Vorname:</strong>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>{user.firstName}</Box>
                      <Button variant='contained' onClick={handleEdit}>
                        Edit
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Nachname:</strong>
                  </TableCell>
                  <TableCell>{user.lastName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Alter:</strong>
                  </TableCell>
                  <TableCell>{user.birthday?.toLocaleDateString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Raucher:</strong>
                  </TableCell>
                  <TableCell>{user.smoker ? 'Ja' : 'Nein'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Anzahl Fahrten:</strong>
                  </TableCell>
                  <TableCell>{user.rideCount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Notiz:</strong>
                  </TableCell>
                  <TableCell>{user.note}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid2>
        <Grid2 xs={5}>
          <UserAvatar
            onChange={handleImageChange}
            lastName={user.lastName}
            image={user.image}
          ></UserAvatar>
        </Grid2>
        <Grid2 xs={12}>
          <Evaluation value={4} name={'Beifahrerbewertung'}></Evaluation>
        </Grid2>
        <Grid2 xs={12}>
          <Evaluation value={3.5} name={'Fahrerbewertung'}></Evaluation>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProfileInformation;
