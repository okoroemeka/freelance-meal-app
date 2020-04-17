import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { convertFromPixelsToRem } from '../../../../../utils/misc';
import colors from '../../../../../utils/colors';

const StyledCard = styled.article`
  width: ${convertFromPixelsToRem(317)};
  height: ${convertFromPixelsToRem(250)};
  box-shadow: 0px 4px 10px #e0e0e0;
`;
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const StyledImageContainer = styled.div`
  position: relative;
`;
const StyledResturantName = styled.h5`
  position: absolute;
  bottom: ${convertFromPixelsToRem(6)};
  left: ${convertFromPixelsToRem(17)};
  color: white;
  margin: ${convertFromPixelsToRem(14)} 0;
`;
const StyledResturantDetailSection = styled.div`
  width: 100%;
  height: calc(100% - 250px);
  display: flex;
  padding-left: ${convertFromPixelsToRem(17)};
  justify-content: space-evenly;
`;
const StyledHeaders = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: ${convertFromPixelsToRem(14)};
  color: ${colors.gray};
  margin: 0;
`;
const StyledSection = styled.article`
  width: 33.33%;
  height: 100%;
`;
const StyledDistrict = styled.h6`
  margin-top: 0;
  margin-bottom: ${convertFromPixelsToRem(14)};
  padding-left: ${convertFromPixelsToRem(17)};
  font-size: ${convertFromPixelsToRem(14)};
  font-weight: normal;
`;
const StyledDescription = styled.h5`
  margin: ${convertFromPixelsToRem(7)} auto;
  font-size: ${convertFromPixelsToRem(14)};
  font-style: normal;
  font-weight: normal;
  color: ${colors.lightDark};
`;
const Card = ({
  address,
  resturantName,
  category,
  delivaryTime,
  price,
  imageUrl,
}) => (
  <StyledCard>
    <StyledImageContainer>
      <StyledImage src={imageUrl} alt={resturantName} />
      <StyledResturantName>{resturantName}</StyledResturantName>
    </StyledImageContainer>
    <StyledDistrict>{address}</StyledDistrict>
    <StyledResturantDetailSection>
      <StyledSection>
        <StyledHeaders>Category</StyledHeaders>
        <StyledDescription>{category}</StyledDescription>
      </StyledSection>
      <StyledSection>
        <StyledHeaders>Delivary Time</StyledHeaders>
        <StyledDescription>
          {delivaryTime}
          {' '}
Mins
        </StyledDescription>
      </StyledSection>
      <StyledSection>
        <StyledHeaders>Minimum Order</StyledHeaders>
        <StyledDescription>
RON
          {price.toFixed(2)}
        </StyledDescription>
      </StyledSection>
    </StyledResturantDetailSection>
  </StyledCard>
);

Card.propTypes = {
  resturantName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  delivaryTime: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Card;
