import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from './routing/Routing';
import { Container } from '@mui/material';

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routing />
      </Container>
    </Router>
  );
};

export default RootComponent;
