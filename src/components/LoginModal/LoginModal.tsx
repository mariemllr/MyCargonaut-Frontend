import React, { useCallback, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { login, setUser, UserState } from '../../reducer/user';
import CloseIcon from '@mui/icons-material/Close';
import { CenteredColumnGrid } from '../../styles/common';
import rest from '../../utility/rest';
import { AxiosError } from 'axios';

const initialState = {
  email: '',
  password: '',
  errorAlert: false,
  errorMessage: '',
};

function reducer(
  state: typeof initialState,
  action: { type: string; payload?: unknown },
) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload as string };
    case 'password':
      return { ...state, password: action.payload as string };
    case 'openErrorAlert':
      return { ...state, errorAlert: true };
    case 'closeErrorAlert':
      return { ...state, errorAlert: false };
    case 'errorMessage':
      return { ...state, errorMessage: action.payload as string };

    default:
      throw new Error();
  }
}
const ModalStyles = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Paper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  width: '30%',
  marginTop: 100,
}));

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onRegister: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
  onRegister,
}: LoginModalProps) => {
  const dispatch = useDispatch();
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatchLocal({ type: 'email', payload: event.target.value }),
    [dispatchLocal],
  );

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const password = event.target.value;
      dispatchLocal({ type: 'password', payload: password });
    },
    [dispatchLocal],
  );

  const handleSubmit = async () => {
    try {
      await rest.post('auth/login', {
        email: state.email,
        password: state.password,
      });
      const user = await rest.get('user/me');
      console.log(user);
      dispatch(setUser(user.data as UserState));
      dispatch(login());
      onClose();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (typeof error.response?.data.message === 'string') {
          dispatchLocal({
            type: 'errorMessage',
            payload: `Beim Login ein Fehler aufgetreten: ${error.response?.data.message}`,
          });
        } else {
          dispatchLocal({
            type: 'errorMessage',
            payload: `Beim Login ein Fehler aufgetreten: ${error.response?.data.message.reduce(
              (prev: string, curr: string, index: number) =>
                index === 0 ? curr : `${prev}, ${curr}`,
              '',
            )}`,
          });
        }
        dispatchLocal({ type: 'openErrorAlert' });
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalStyles>
        <Paper
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit();
            }
          }}
        >
          <Grid2 container sx={{ mb: 3 }}>
            <Grid2
              xs={6}
              sx={{ display: 'flex' }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSubmit();
                }
              }}
            >
              <Typography alignSelf='center' variant='h5'>
                Anmeldung
              </Typography>
            </Grid2>
            <Grid2 container justifyContent='right' xs={6}>
              <IconButton aria-label='close' onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 xs={12}>
              <TextField
                label='Email'
                type='email'
                value={state.email}
                onChange={handleEmailChange}
                fullWidth
                autoFocus
                required
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                label='Passwort'
                type='password'
                value={state.password}
                onChange={handlePasswordChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 xs={12}>
              <Box>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  onClick={handleSubmit}
                >
                  Einloggen
                </Button>
                <Snackbar
                  open={state.errorAlert}
                  autoHideDuration={6000}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  onClose={() => dispatchLocal({ type: 'closeErrorAlert' })}
                >
                  <Alert
                    onClose={() => dispatchLocal({ type: 'closeErrorAlert' })}
                    severity='error'
                    sx={{ width: '100%' }}
                  >
                    {state.errorMessage}
                  </Alert>
                </Snackbar>
              </Box>
            </Grid2>
            <Divider style={{ width: '100%' }} />
            <CenteredColumnGrid xs={12}>
              <Typography variant='h6'>Noch kein Account erstellt?</Typography>
              <Button variant='outlined' onClick={onRegister}>
                Hier registrieren
              </Button>
            </CenteredColumnGrid>
          </Grid2>
        </Paper>
      </ModalStyles>
    </Modal>
  );
};

export default LoginModal;
