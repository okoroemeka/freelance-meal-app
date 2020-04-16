import React from 'react';
import styled from 'styled-components';
import companyLogo from '../../../assets/images/logo.png';
import { convertFromPixelsToRem } from '../../../utils/misc';
import colors from '../../../utils/colors';

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  text-align: center;
  margin-top: 6%;
`;
const StyledImage = styled.img`
  width: ${convertFromPixelsToRem(137)};
  height: ${convertFromPixelsToRem(67)};
`;
const StyledText = styled.h2`
  font-weight: 900;
  font-size: ${convertFromPixelsToRem(48)};
  line-height: ${convertFromPixelsToRem(60)};
  color: ${colors.white};
`;
const StyledHr = styled.hr`
  color: ${colors.white};
  width: ${convertFromPixelsToRem(250)};
`;

const AddArea = () => (
  <StyledContainer>
    <StyledImage src={companyLogo} alt="company logo" />
    <StyledText>Order Pizaa From The Comfort Of Your Home</StyledText>
    <StyledHr />
  </StyledContainer>
);
export default AddArea;
