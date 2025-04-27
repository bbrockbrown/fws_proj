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
`;

const InfoContainer = styled.div`
  background-color: #383a45;
  background-image: linear-gradient(
    135deg,
    rgb(85, 88, 104) 0%,
    rgb(67, 70, 83) 50%
  );
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

const LogoText = styled.h2`
  font-family: 'Courier New', monospace;
  color: white;
  margin-bottom: 0px;
`;

const SubLogoText = styled.h6`
  font-family: 'Courier New', monospace;
  color: white;
  margin-top: 0px;
`;

const LoginCard = styled.div`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 5px;
  background: white;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 15px 100px rgba(58, 46, 68, 0.06);
  width: 80%;
`;

const FormGroup = styled.div`
  margin-bottom: 0.25rem;
  position: relative;
`;

const FormInput = styled.input`
  border: 1px solid #e7edf2;
  padding-left: 2.75rem;
`;

export default function SidebarLayout() {
  return (
    <BarContainer>
      <InfoContainer>
        <Logo src={nulogo} />
        <LogoText>CatConnect</LogoText>
        <SubLogoText>Social Network</SubLogoText>
        <LoginCard>
          <h4 style={{ marginBottom: '.75rem' }}>Login Now</h4>
          <form method='post'>
            <FormGroup>
              <FormInput />
            </FormGroup>
          </form>
        </LoginCard>
      </InfoContainer>
    </BarContainer>
  );
}
