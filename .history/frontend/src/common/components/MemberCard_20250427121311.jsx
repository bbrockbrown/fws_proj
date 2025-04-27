import React, { useState } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';

const MemCardContainer = styled.div`
  padding: 30px 50px 70px 30px;
  width: 100%;
  border-radius: 12px;
  color: rgb(98, 98, 118);
  background-color: rgba(130, 36, 227, 0.02);
  background: linear-gradient(
    135deg,
    rgba(130, 36, 227, 0.04) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(130, 36, 227, 0.07) 100%
  );
  margin-top: 30px;
  margin-left: 30px;
`;

const CardTitle = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  position: relative;
  font-size: 1rem;
`;

export default function MemberCard() {
  const [newestMembers, setNewestMembers] = useState([]);
  const [activeMembers, setActiveMembers] = useState([]);
  const [popularMembers, setPopularMembers] = useState([]);

  function MemberToggle() {
    const [mode, setMode] = useState('Newest');

    const handleModeChange = (event, newMode) => {
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

  return (
    <div style={{ borderLeft: '1px solid #e7edf2', height: '100vh' }}>
      <MemCardContainer>
        <div>
          <CardTitle>Members</CardTitle>
          <MemberToggle />
        </div>
      </MemCardContainer>
    </div>
  );
}
