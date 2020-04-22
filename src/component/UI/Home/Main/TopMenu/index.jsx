import React from 'react';
import styled from 'styled-components';
import { convertFromPixelsToRem } from '../../../../../utils/misc';
import FoodCard from './Card';
import colors from '../../../../../utils/colors';

const StyledResturantSection = styled.section`
  width: 100%;
  height: ${convertFromPixelsToRem(929)};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${colors.lightBlue};
  padding-bottom: ${convertFromPixelsToRem(80)};
`;
const SubContainer = styled.article`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const StyledTitleContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;
const StyledTitle = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: ${convertFromPixelsToRem(24)};
  color: ${colors.lightRed};
  margin-bottom: ${convertFromPixelsToRem(8)};
`;
const StyledRule = styled.hr`
  width: ${convertFromPixelsToRem(65)};
  margin-bottom: ${convertFromPixelsToRem(33)};
  border: 1px solid #e64300;
`;
const TopMenu = () => {
  return (
    <StyledResturantSection>
      <StyledTitleContainer>
        <StyledTitle>Top Menu</StyledTitle>
        <StyledRule />
      </StyledTitleContainer>
      <SubContainer>
        <FoodCard
          title="Margherita"
          description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced tomatoes"
        />
        <FoodCard
          title="Margherita"
          description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced tomatoes"
        />
        <FoodCard
          title="Margherita"
          description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced tomatoes"
        />
        <FoodCard
          title="Margherita"
          description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced tomatoes"
        />
      </SubContainer>
    </StyledResturantSection>
  );
};

export default TopMenu;
