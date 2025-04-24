import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const NavContainer = styled.div`

`;

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      <logo />
    </NavContainer>
  );
}