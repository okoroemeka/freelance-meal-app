import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../../utils/colors';

const StyledButton = styled.button`
  width: 90px;
  height: 40px;
  background: #f8b80c;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  outline:none;
  cursor: pointer;
`;
const Button = ({ text, buttonType, handleClick }) => (
  <StyledButton type={buttonType} onClick={handleClick}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  handleClick: () => {},
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
