import React from 'react';
import styled from 'styled-components';
import Button from '../../reusables/Button';
import companyLogo from '../../../../assets/images/logo.png';
import { convertFromPixelsToRem } from '../../../../utils/misc';

const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  padding-left: ${convertFromPixelsToRem(133)};
  padding-right: ${convertFromPixelsToRem(38)};
  padding-top: 1rem;
`;

const StyledNavTab = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 80%;
  justify-content: flex-end;
`;
const StyledImage = styled.img`
  width: ${convertFromPixelsToRem(107)};
  height: ${convertFromPixelsToRem(52)};
`;
const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  color: white;
  margin-right: ${convertFromPixelsToRem(27)};
`;
const StyledListItem = styled.li`
  margin: 0px ${convertFromPixelsToRem(22)};
`;
const StyledContainer = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

const Navigation = () => (
  <StyledNav>
    <StyledContainer width="20%">
      <StyledImage src={companyLogo} alt="company logo" />
    </StyledContainer>
    <StyledNavTab>
      <StyledList>
        <StyledListItem>About us</StyledListItem>
        <StyledListItem>How it works</StyledListItem>
        <StyledListItem>Registration</StyledListItem>
        <StyledListItem>Resturant Registration</StyledListItem>
        <StyledListItem>Contact</StyledListItem>
      </StyledList>
      <Button text="Log in" buttonType="submit"/>
    </StyledNavTab>
  </StyledNav>
);

export default Navigation;
