import * as React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RootState } from '../App';
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import Layout from '../pages/Layout';
import FahrtenAnlage from '../pages/Fahrten_Anlage/Fahrten_Anlage';
import Angebote from '../pages/Angebote/Angebote';
import { ROUTES } from '../resources/route-constants';
import { Box, Container } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';

export function Routing() {
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  const currentRoute = React.useMemo(
    () => location.pathname,
    [location.pathname],
  );

  return (
    <Box>
      {currentRoute !== ROUTES.HOMEPAGE_ROUTE && <Navbar />}
      <Container maxWidth='xl'>
        <Routes>
          <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
          <Route path={ROUTES.PROFILEPAGE_ROUTE} element={<ProfilePage />} />
          <Route path={ROUTES.ANGEBOTE_ROUTE} element={<Angebote />} />
          <Route
            path={ROUTES.FAHRTEN_ANLAGE_ROUTE}
            element={<FahrtenAnlage />}
          />
          <Route
            path={ROUTES.OTHER_PROFILEPAGE_ROUTE}
            element={<ProfilePage />}
          />
        </Routes>
      </Container>
    </Box>
  );
}
