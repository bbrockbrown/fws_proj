import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const NavContainer = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: space-around;
`;

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      <div className="logo-container">
        <img src={logo} alt="logo" width="100" height="100"/>
      </div>

    </NavContainer>
  );
}