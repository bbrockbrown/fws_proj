import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const NavContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      <img src={logo} className="App-logo" alt="logo" />
    </NavContainer>
  );
}