import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from './routing/Routing';

const RootComponent: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Routing />
      </div>
    </Router>
  );
};

export default RootComponent;
