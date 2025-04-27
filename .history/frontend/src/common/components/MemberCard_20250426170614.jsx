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
  const [selectedRef, setSelectedRef] = useRef(null);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    selectedRef.current.style.color = '#9c27b0';
    selectedRef.current.style.backgroundColor = 'rgba(156, 39, 176, 0.08)';
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
      <ToggleButton
        ref={selectedRef}
        value='Active'
        aria-label='active members'
      >
        Active
      </ToggleButton>
      <ToggleButton value='Popular' aria-label='popular members'>
        Popular
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default function MemberCard() {
  return (
    <MemCardContainer>
      <aside>
        <div>
          <CardTitle>Members</CardTitle>
          <MemberToggle />
        </div>
      </aside>
    </MemCardContainer>
  );
}
