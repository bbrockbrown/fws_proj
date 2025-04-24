import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import TextField from '@mui/material/TextField';

const NavContainer = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

function Searchbar() {
  const [input, setInput] = useState('');

  return (
    <MagnifyingGlassIcon />
    
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
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      <div className="navigation">
        hi
      </div>
    </NavContainer>
  );
}