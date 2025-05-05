import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import logo from 'assets/icons/logo.svg';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  border-bottom: 1px solid rgb(231, 237, 242);
  margin-left: 22%;
`;

const IconContainer = styled.div`
  position: absolute;Ç
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
  outline: none;
  padding-left: 1.25rem;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  font-size: 15px;
`;

function SearchBar() {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('new input is', input);
  }, [input]);

  return (
    <SearchContainer>
      <IconContainer>
        <MagnifyingGlassIcon height='18' width='18' />
      </IconContainer>
      <TextContainer>
        <StyledInput
          type='text'
          autoComplete='off'
          placeholder='Search...'
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </TextContainer>
    </SearchContainer>
  );
}

export default function NavLayout() {
  const [page, setPage] = useState('');

  return (
    <NavContainer>
      <div className='logo-container'>
        <img src={logo} alt='logo' width='100' height='100' />
      </div>
      <div className='search-bar'>
        <SearchBar />
      </div>
      <div className='navigation'>
        <Button variant='outlined'> Log In </Button>
        <Button variant='outlined'> Sign Up </Button>
      </div>
    </NavContainer>
  );
}
