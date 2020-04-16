import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { convertFromPixelsToRem } from '../../../../utils/misc';

const StyledInputSelect = styled.select`
  width: ${convertFromPixelsToRem(348)};
  height: ${convertFromPixelsToRem(40)};

  backdrop-filter: blur(${convertFromPixelsToRem(5)});
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  margin-right: ${convertFromPixelsToRem(16)};
  /* here */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, white 50%),
    linear-gradient(135deg, white 50%, transparent 50%),
    linear-gradient(#fff 0%, transparent 0%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  padding: 0.5em 3.5em 0.5em 1em;
  color: white;
  font-weight: 600;
  font-size: ${convertFromPixelsToRem(14)};
`;
const Select = ({ children, defaultOption }) => (
  <StyledInputSelect>
    <option>{defaultOption}</option>
    {children}
  </StyledInputSelect>
);

Select.defaultProps = {
  children: '',
  defaultOption: '',
};
Select.propTypes = {
  defaultOption: PropTypes.string,
  children: PropTypes.element,
};
export default Select;
