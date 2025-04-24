import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const NavContainer = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  background-color: rgba(78, 42, 132, 0.2);
`;

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      <img src={logo} alt="logo" width="100" height="100"/>
    </NavContainer>
  );
}