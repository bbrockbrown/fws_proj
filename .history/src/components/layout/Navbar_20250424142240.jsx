import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import TextField from '@mui/material/TextField';

const NavContainer = styled.div`
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;

function SearchBar() {
  const [input, setInput] = useState('');

  return (
    <div>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <MagnifyingGlassIcon />
    </div>
  );
}

export default function Navbar() {
  const [page, setPage] = useState('');

  return(
    <NavContainer>
      <div className="logo-container">
        <img src={logo} alt="logo" width="100" height="100"/>
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="navigation">
        hi
      </div>
    </NavContainer>
  );
}