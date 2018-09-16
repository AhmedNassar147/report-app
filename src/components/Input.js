import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';
import Flex from './Flex'

const StyledInput = styled.input`
  padding: 6px;
  font-size: 16px;
  border: 1px solid #E3F2FD;
  border-radius: 5px;
  outline: none;
  color: #616161;
  width: 95%;
  height: 28px;

  &:focus {
    border: 1px solid #BBDEFB;
    box-shadow: 0 1px 7px 0 rgba(0,0,0,.1);
  }

  ::placeholder {
    color: gray;
    font: 400 14px 'Source Sans Pro', 'sans-serif';
  }
`;

const Input = ({ input: { value, onChange }, meta: { error }, placeholder, type, name, otherPorps }) => (
  <Flex>
    <StyledInput
      {...otherPorps}
      placeholder={placeholder}
      name={name}
      type={type ? type : 'text'}
      onChange={onChange}
      value={value}
    />
    {error && <Label children={error} />}
  </Flex>
);

Input.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
  otherPorps: PropTypes.object,
};


export default Input;