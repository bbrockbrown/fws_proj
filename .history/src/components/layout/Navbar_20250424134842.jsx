import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`

`;

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      hello
    </NavContainer>
  );
}