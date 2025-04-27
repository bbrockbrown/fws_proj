import React, { useRef, useState } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';

const MemCardContainer = styled.div`
  border-left: 1px solid #e7edf2;
  padding: 30px 30px 70px 30px;
  min-height: 100vh;
`;

const CardTitle = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  position: relative;
  font-size: 1rem;
`;

function MemberToggle() {
  const [mode, setMode] = useState('Newest');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={handleModeChange}
      aria-label='member mode'
      size='small'
      color='secondary'
    >
      <ToggleButton value='Newest' aria-label='newest members'>
        Newest
      </ToggleButton>
      <ToggleButton value='Active' aria-label='active members'>
        Active
      </ToggleButton>
      <ToggleButton value='Popular' aria-label='popular members'>
        Popular
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default function MemberCard() {
  return (
    <MemCardContainer>
      <aside>
        <div>
          <CardTitle>Members</CardTitle>
          <MemberToggle />
          <FocusInput />
        </div>
      </aside>
    </MemCardContainer>
  );
}
