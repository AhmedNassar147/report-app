import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  outline: 0;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
  width: ${props => (!props.danger && props.fab) ? '56px' : (props.danger && props.fab) ? '39px' : '120px'};
  height: ${props => (!props.danger && props.fab) ? '56px' : (props.danger && props.fab) ? '39px' : '50px'};
  border: 2px solid #757575;
  border-radius: ${props => props.fab ? '50%' : '20px'};
  background-color: ${props => (!props.danger && props.fab) ? '#9C27B0' : (props.danger && props.fab) ? 'red' : 'transparent'};
  color:  ${props => props.fab ? '#fff' : '#000'};

  &:hover{
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.4);
  }
`;


const button = props => <StyledButton {...props} />;

button.defaultProps = {
  type: "button"
};

export default button;
