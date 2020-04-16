import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../../../assets/images/pizza.png';
import Navigation from './Navigation';
import AdArea from './AdArea';
import SearchArea from './SearchArea';

const StyledHeader = styled.header`
  width: 100%;
  height: 668px;
  background: rgba(51, 51, 51, 0.5);
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledHeaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Header = () => (
  <StyledHeader>
    <StyledHeaderOverlay>
      <Navigation />
      <AdArea />
      <SearchArea />
    </StyledHeaderOverlay>
  </StyledHeader>
);

export default Header;
