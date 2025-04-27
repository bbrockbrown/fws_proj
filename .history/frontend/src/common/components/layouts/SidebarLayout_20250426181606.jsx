import React, { useState } from 'react';

import nulogo from 'assets/icons/nulogo.svg';
import styled from 'styled-components';

const BarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: visible;
  z-index: 9;
  width: 22%;
  height: 100vh;
  text-align: center;
  padding: 2.5rem 1rem 1rem;
`;

const InfoContainer = styled.div`
  background-color: #383a45;
  background-image: linear-gradient(135deg, rgb(85, 88, 104) 0%, #383a45 50%);
`;

const Logo = styled.img`
  max-width: 80%;
  max-height: 90px;
  height: auto;
  vertical-align: middle;
  border-style: none;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export default function SidebarLayout() {
  return (
    <BarContainer>
      <InfoContainer>
        <Logo src={nulogo} />
      </InfoContainer>
    </BarContainer>
  );
}
