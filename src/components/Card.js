import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.form`
  padding: 20px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14);
  border-radius: 4px;
  background-color: #fff;
`;

export default props => <StyledCard {...props} />;