import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flex from './Flex';

const StyledSelect = styled.select`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #E3F2FD;
  border-radius: 5px;
  outline: none;
  color: #616161;
  width: 100%;
  height: 42px;
  background-color: transparent;

  &:focus {
    border: 1px solid #BBDEFB;
  }

  @media(max-width: 790px){
    width: 98%;
  }
`;

const Select = ({ input: { onChange, value }, options }) => (
  <Flex>
    <StyledSelect onChange={onChange} value={value}>
      {options && options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  </Flex>
);

Select.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array.isRequired
}

export default Select;