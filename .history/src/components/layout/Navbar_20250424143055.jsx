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

const IconContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchContainer = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  background: none;
  width: 100%;
  border: none;
  padding-left: 1.25rem;
`;
function SearchBar() {
  const [input, setInput] = useState('');

  return (
    <SearchContainer>
      <IconContainer>
        <MagnifyingGlassIcon />
      </IconContainer>
      <TextContainer>
        <StyledInput type="text" autoComplete="off" placeholder="Search..." required/>
      </TextContainer>
    </SearchContainer>
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