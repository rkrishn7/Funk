import React from 'react';
import styled from 'styled-components';
import { 
  color, 
  space, 
  layout, 
  ColorProps,
  SpaceProps, 
  LayoutProps 
} from 'styled-system';

interface ButtonProps
  extends ColorProps,
  SpaceProps,
  LayoutProps {};

export const Button = styled.button<ButtonProps>`
  ${color}
  ${layout}
  ${space}
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;