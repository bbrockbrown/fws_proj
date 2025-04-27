import { Card } from '@mui/material';
import React from 'react';
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

export default function MemberCard() {
  return(
    <MemCardContainer>
      <aside>
        <div>
          <CardTitle>Members</CardTitle>
        </div>
      </aside>
    </MemCardContainer>
  );
}
