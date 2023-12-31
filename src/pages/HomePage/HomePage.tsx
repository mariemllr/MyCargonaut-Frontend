import {
  Container,
  Stack,
  Button,
  Box,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import React from "react";
import logo from "../../assets/MyCargonaut_Logo/Export/0.75x/semi_androidMyCargonautldpi.png";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useIsLoggedIn } from "../../hooks/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../../reducer/user";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../resources/route-constants";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const [openRegisterModal, setOpenRegisterModal] = React.useState(false);
  const [registerSuccess, setRegisterSuccess] = React.useState(false);
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setOpenRegisterModal(false);
  };

  const handleOpenLoginModal = () => {
    if (openRegisterModal) handleCloseRegisterModal();
    setOpenLoginModal(true);
  };

  const handleOpenRegisterModal = () => {
    if (openLoginModal) handleCloseLoginModal();
    setOpenRegisterModal(true);
  };

  const handleCloseAlert = () => {
    setRegisterSuccess(false);
  };

  const handleRegisterSuccess = () => {
    setRegisterSuccess(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2} sx={{ width: "70%" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Logo" style={{ width: "50%", height: "50%" }} />
        </Box>
        <Button
          onClick={() => navigate(ROUTES.ANGEBOTE_ROUTE)}
          variant="outlined"
          sx={{ height: "5.5rem" }}
        >
          Angebote
        </Button>
        <Button
          onClick={() => navigate(ROUTES.GESUCHE_ROUTE)}
          variant="outlined"
          sx={{ height: "5.5rem" }}
        >
          Gesuche
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} sx={{ width: "60%" }}>
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="contained">
                Logout
              </Button>
            ) : (
              <>
                <Button onClick={handleOpenLoginModal} variant="contained">
                  Anmelden
                </Button>
                <LoginModal
                  open={openLoginModal}
                  onClose={handleCloseLoginModal}
                  onRegister={handleOpenRegisterModal}
                ></LoginModal>
                <Button
                  onClick={handleOpenRegisterModal}
                  variant="outlined"
                  sx={{ textDecoration: "underline" }}
                >
                  Registrieren
                </Button>
                <RegisterModal
                  open={openRegisterModal}
                  onClose={handleCloseRegisterModal}
                  onLogin={handleOpenLoginModal}
                  onRegisterSuccess={handleRegisterSuccess}
                />
              </>
            )}
          </Stack>
        </Box>
      </Stack>
      <Snackbar
        open={registerSuccess}
        onClose={handleCloseAlert}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Registrierung erfolgreich. —{" "}
          <strong>Du kannst dich jetzt einloggen.</strong>
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default HomePage;
