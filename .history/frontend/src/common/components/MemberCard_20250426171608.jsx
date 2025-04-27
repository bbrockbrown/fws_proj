import React, { useState } from 'react';

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
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={handleModeChange}
      aria-label='member mode'
      size='small'
      sx={{
        '& .MuiToggleButton-root': {
          '&.Mui-selected': {
            color: '#9c27b0',
            backgroundColor: 'rgba(156, 39, 176, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255)',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(156, 39, 176, 0.04)',
          },
        },
      }}
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

export default function MemberCard() {
  return (
    <MemCardContainer>
      <div>
        <CardTitle>Members</CardTitle>
        <MemberToggle />
      </div>
    </MemCardContainer>
  );
}
