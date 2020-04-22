import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { convertFromPixelsToRem } from '../../../../../utils/misc';
import colors from '../../../../../utils/colors';
import PizzaImage from '../../../../../assets/images/Rectangle.png';

const Continer = styled.article`
  position: relative;
  width: ${convertFromPixelsToRem(489)};
  height: ${convertFromPixelsToRem(283)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Frame = styled.div`
  width: ${convertFromPixelsToRem(410)};
  height: ${convertFromPixelsToRem(200)};
  border: 2px solid #f8b80c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const DiscriptionContainer = styled.article`
  width: ${convertFromPixelsToRem(457)};
  height: ${convertFromPixelsToRem(125)};
  background: ${colors.white};
  box-shadow: 0px 4px 10px #e0e0e0;
  position: absolute;
  top: ${convertFromPixelsToRem(226)};
  left: ${convertFromPixelsToRem(16)};
  z-index: 3;
  padding-left: ${convertFromPixelsToRem(36)};
`;
const Title = styled.h3`
  font-weight: normal;
  font-size: ${convertFromPixelsToRem(24)};
  margin-top: ${convertFromPixelsToRem(18)};
  margin-bottom: ${convertFromPixelsToRem(11)};
`;
const Description = styled.p`
  color: ${colors.gray};
  font-weight: normal;
  font-size: ${convertFromPixelsToRem(18)};
  line-height: ${convertFromPixelsToRem(23)};
  margin: 0px;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Card = ({ imageUrl, title, description }) => {
  return (
    <Continer>
      <Image src={imageUrl || PizzaImage} alt="" />
      <Frame />
      <DiscriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DiscriptionContainer>
    </Continer>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default Card;
