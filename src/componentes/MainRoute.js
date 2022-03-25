import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function MainRoute() {
  return (
    <Outlet/>
  );
}

export default MainRoute;
