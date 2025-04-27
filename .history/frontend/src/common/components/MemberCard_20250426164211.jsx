import React from 'react';
import styled from 'styled-components';

const MemCardContainer = styled.div`
  border-left: 1px solid #e7edf2;
  padding: 30px 30px 70px 30px;
  min-height: 100vh;
`;

export default function MemberCard() {
  return(
    <MemCardContainer>
      <aside>
        <div>
          <h5> Members </h5>
        </div>
      </aside>
    </MemCardContainer>
  );
}
