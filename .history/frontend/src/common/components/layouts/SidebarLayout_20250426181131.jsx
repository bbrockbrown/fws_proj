import React, { useState } from 'react';

import nulogo from 'assets/icons/nulogo.svg';
import styled from 'styled-components';

const BarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: visible;j
  width: 22%;
  height: 100vh;
  text-align: center;
`;

const InfoContainer = styled.div`
  background-color: #383a45;
  background-image: linear-gradient(135deg, rgb(85, 88, 104) 0%, #383a45 50%);
`;

export default function SidebarLayout() {
  return (
    <BarContainer>
      <InfoContainer>hislkd;jfa;sklfja;sklfjas;lkfj</InfoContainer>
    </BarContainer>
  );
}
