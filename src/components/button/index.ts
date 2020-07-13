import React from 'react';
import styled from 'styled-components';

export const Button = styled.button<any>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.textColor || "palevioletred"};
  background: ${props => props.backgroundColor || "white"};
  border: none;
  border-radius: 3px;
`;