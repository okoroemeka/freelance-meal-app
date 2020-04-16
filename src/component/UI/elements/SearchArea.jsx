import React from 'react';
import styled from 'styled-components';
import Button from '../reusables/Button';
import { convertFromPixelsToRem } from '../../../utils/misc';
import Select from './Select';

const StyledSearchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: ${convertFromPixelsToRem(52)};
`;
// const StyledSelectOption = styled.option``;

const SearchArea = () => (
  <StyledSearchContainer>
    <Select defaultOption="Search your city" />
    <Button text="Search" buttonType="submit" />
  </StyledSearchContainer>
);

export default SearchArea;
