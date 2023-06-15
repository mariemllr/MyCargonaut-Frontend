import React, { useCallback, useReducer } from "react";
import { useSelector } from "react-redux";
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import { CenteredColumnGrid } from "../../styles/common";
import rest from "../../utility/rest";
import { AxiosError } from "axios";
import Snackbar from "@mui/material/Snackbar";
import { RootState } from "../../App";
import UserAvatar from "../UserAvatar/UserAvatar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const initialState = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
  emailConfirm: "",
  phone: "",
  username: "",
  password: "",
  passwordConfirm: "",
  birthday: new Date(),
  errorAlert: false,
  errorMessage: "",
};

function reducer(
  state: typeof initialState,
  action: { type: string; payload?: unknown }
) {
  switch (action.type) {
    case "image":
      return { ...state, image: action.payload as string };
    case "firstName":
      return { ...state, firstName: action.payload as string };
    case "lastName":
      return { ...state, lastName: action.payload as string };
    case "password":
      return { ...state, password: action.payload as string };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload as string };
    case "email":
      return { ...state, email: action.payload as string };
    case "emailConfirm":
      return { ...state, emailConfirm: action.payload as string };
    case "phone":
      return { ...state, phone: action.payload as string };
    case "birthday":
      return { ...state, birthday: action.payload as Date };
    case "openErrorAlert":
      return { ...state, errorAlert: true };
    case "closeErrorAlert":
      return { ...state, errorAlert: false };
    case "errorMessage":
      return { ...state, errorMessage: action.payload as string };

    default:
      throw new Error();
  }
}

const ModalStyles = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowY: "auto",
});

const Paper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: "1px solid #000",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  marginTop: 50,
  width: "100%",
  maxWidth: "600px",
  minWidth: "300px",
  maxHeight: "80vh",
  overflow: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
}));

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
  onRegisterSuccess: () => void;
};

const RegisterModal = ({
  open,
  onClose,
  onLogin,
  onRegisterSuccess,
}: RegisterModalProps) => {
  const user = useSelector((state: RootState) => state.user);

  const [state, dispatchLocal] = useReducer(reducer, initialState);

  const handleImageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newImage = event.target.files?.[0];
      if (newImage) {
        dispatchLocal({
          type: "image",
          payload: URL.createObjectURL(newImage),
        });
      }
    },
    [dispatchLocal]
  );

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const password = event.target.value;
      dispatchLocal({ type: "password", payload: password });
    },
    [dispatchLocal]
  );

  const handlePasswordConfirmChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const password = event.target.value;
      dispatchLocal({ type: "passwordConfirm", payload: password });
    },
    [dispatchLocal]
  );

  const handleFirstNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const firstName = event.target.value;
      dispatchLocal({ type: "firstName", payload: firstName });
    },
    [dispatchLocal]
  );

  const handleLastNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const lastName = event.target.value;
      dispatchLocal({ type: "lastName", payload: lastName });
    },
    [dispatchLocal]
  );

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const email = event.target.value;
      dispatchLocal({ type: "email", payload: email });
    },
    [dispatchLocal]
  );

  const handleEmailConfirmChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const emailConfirm = event.target.value;
      dispatchLocal({ type: "emailConfirm", payload: emailConfirm });
    },
    [dispatchLocal]
  );

  const handlePhoneChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const phone = event.target.value;
      dispatchLocal({ type: "phone", payload: phone });
    },
    [dispatchLocal]
  );

  const handleSubmit = async () => {
    if (state.password === state.passwordConfirm) {
      try {
        await rest.post("auth/register", {
          firstName: state.firstName,
          lastName: state.lastName,
          password: state.password,
        });
        onRegisterSuccess();
        onClose();
      } catch (error) {
        if (error instanceof AxiosError) {
          if (typeof error.response?.data.message === "string") {
            dispatchLocal({
              type: "errorMessage",
              payload: `Bei der Registrierung ist ein Fehler aufgetreten: ${error.response?.data.message}`,
            });
          } else {
            dispatchLocal({
              type: "errorMessage",
              payload: `Bei der Registrierung ist ein Fehler aufgetreten: ${error.response?.data.message.reduce(
                (prev: string, curr: string, index: number) =>
                  index === 0 ? curr : `${prev}, ${curr}`,
                ""
              )}`,
            });
          }
          console.error(error);
          dispatchLocal({ type: "openErrorAlert" });
        }
      }
    } else {
      dispatchLocal({
        type: "errorMessage",
        payload: "Die beiden Passwörter stimmen nicht überein.",
      });
      dispatchLocal({ type: "openErrorAlert" });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalStyles>
        <Paper
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              {
                handleSubmit();
              }
            }
          }}
        >
          <Grid2 container sx={{ display: "flex" }}>
            <Grid2 xs={6} sx={{ alignSelf: "center" }}>
              <Typography variant="h5" sx={{ mt: 1, mb: 1 }}>
                Registrierung
              </Typography>
            </Grid2>
            <Grid2 container justifyContent="right" xs={6}>
              <IconButton aria-label="close" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 xs={6}>
              <TextField
                label="Vorname"
                value={state.firstName}
                onChange={handleFirstNameChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 xs={6}>
              <TextField
                label="Nachname"
                value={state.lastName}
                onChange={handleLastNameChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                label="E-Mail"
                type="email"
                value={state.email}
                onChange={handleEmailChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                label="E-Mail bestätigen"
                type="email"
                value={state.emailConfirm}
                onChange={handleEmailConfirmChange}
                fullWidth
                required
              />
            </Grid2>

            <Grid2 xs={12}>
              <TextField
                label="Passwort"
                type="password"
                value={state.password}
                onChange={handlePasswordChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                label="Passwort bestätigen"
                type="password"
                value={state.passwordConfirm}
                onChange={handlePasswordConfirmChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 xs={12}>
              <DatePicker
                label="Geburtstag"
                value={state.birthday}
                onChange={(newValue) => {
                  dispatchLocal({ type: "birthday", payload: newValue });
                }}
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                label="Telefonnummer"
                type="tel"
                value={state.phone}
                onChange={handlePhoneChange}
                fullWidth
                helperText="Wird nicht im Profil angezeigt."
              />
            </Grid2>
            <Grid2 xs={2}>
              <Typography variant="h6" gutterBottom component="div">
                Profilbild:
              </Typography>
            </Grid2>
            <Grid2 xs={10}>
              <UserAvatar
                lastName={user.lastName}
                image={state.image}
                onChange={handleImageChange}
              ></UserAvatar>
            </Grid2>
            <Grid2 xs={9}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "grey.700",
                }}
              >
                <Typography variant="subtitle1">
                  mit * markierte Felder sind Pflichtfelder. Handynummer &
                  Profilbild müssen hinzugefügt werden, um Angebote zu
                  erstellen.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 xs={12}>
              <Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Registrierung abschließen
                </Button>
                <Snackbar
                  open={state.errorAlert}
                  autoHideDuration={6000}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  onClose={() => dispatchLocal({ type: "closeErrorAlert" })}
                >
                  <Alert
                    onClose={() => dispatchLocal({ type: "closeErrorAlert" })}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {state.errorMessage}
                  </Alert>
                </Snackbar>
              </Box>
            </Grid2>
            <Divider style={{ width: "100%" }} />
            <CenteredColumnGrid xs={12}>
              <Typography variant="h6">Du bist schon registriert?</Typography>
              <Button variant="outlined" onClick={onLogin}>
                Hier Einloggen
              </Button>
            </CenteredColumnGrid>
          </Grid2>
        </Paper>
      </ModalStyles>
    </Modal>
  );
};

export default RegisterModal;
