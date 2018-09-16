import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  color: red;
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
`;

export default props => <StyledLabel {...props} />;  