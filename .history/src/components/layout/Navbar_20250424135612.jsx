import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const NavContainer = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  background-color: rgb(078, 042, 132);
`;

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      <img src={logo} alt="logo" width="200" height="200"/>
    </NavContainer>
  );
}