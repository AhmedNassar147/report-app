import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-content: space-between;
  margin: 13px 0px;
  padding: 4px 6px;

  @media (max-width: 790px) {
    flex-direction: column;
  }
`;

export default props => <Row {...props} />;