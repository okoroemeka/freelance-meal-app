import React from 'react';
import styled from 'styled-components';
import { convertFromPixelsToRem } from '../../../../../utils/misc';
import ResturantCard from './Card';
import resImage from '../../../../../assets/images/Rectangle 2.png';
import resImage2 from '../../../../../assets/images/new.png';
import resImage3 from '../../../../../assets/images/new1.png';
import colors from '../../../../../utils/colors';

const StyledResturantSection = styled.section`
  width: 100%;
  /* height: ${convertFromPixelsToRem(250)}; */
  height: auto;
  position: relative;
  display: flex;
  justify-content:center;
`;
const StyledSubContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const StyledMainClontainer = styled.article`
  width: 80%;
  height: 100%;
  position: absolute;
  top: ${convertFromPixelsToRem(-150)};
`;
const StyledTitle = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: ${convertFromPixelsToRem(24)};
  color: ${colors.white};
  margin-bottom: 1rem;
`;
const StyledTitleContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;
const StyledRule = styled.hr`
  width: ${convertFromPixelsToRem(100)};
  margin-bottom: 1rem;
`;
const TopResturantContainer = () => (
  <StyledResturantSection>
    <StyledMainClontainer>
      <StyledTitleContainer>
        <StyledTitle>Top Resturants</StyledTitle>
        <StyledRule />
      </StyledTitleContainer>
      <StyledSubContainer>
        <ResturantCard
          imageUrl={resImage}
          resturantName="Buonissimo"
          address="Timisora, Strada Demetriade"
          delivaryTime={60}
          category="Pizza, Other, Grill & Steak"
          price={0.0}
        />
        <ResturantCard
          imageUrl={resImage2}
          resturantName="Buonissimo"
          address="Timisora, Strada Demetriade"
          delivaryTime={60}
          category="Pizza, Other, Grill & Steak"
          price={0.0}
        />
        <ResturantCard
          imageUrl={resImage3}
          resturantName="Buonissimo"
          address="Timisora, Strada Demetriade"
          delivaryTime={60}
          category="Pizza, Other, Grill & Steak"
          price={0.0}
        />
      </StyledSubContainer>
    </StyledMainClontainer>
  </StyledResturantSection>
);

export default TopResturantContainer;
