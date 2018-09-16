import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flex from './Flex';

const StyledTextArea = styled.textarea`
  padding: 6px;
  font-size: 16px;
  border: 1px solid #E3F2FD;
  border-radius: 5px;
  outline: none;
  color: #616161;
  resize: none;
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

const TextArea = ({ input: { value, onChange }, otherPorps }) => (
  <Flex>
    <StyledTextArea
      {...otherPorps}
      onChange={onChange}
      value={value}
    />
  </Flex>
);

TextArea.propTypes = {
  input: PropTypes.object,
  otherPorps: PropTypes.object,
};

TextArea.defaultProps = {
  otherPorps: {
    placeholder: 'comments'
  }
}

export default TextArea;