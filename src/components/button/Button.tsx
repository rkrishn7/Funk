import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';
import { motion, AnimationProps } from 'framer-motion';
import { themeGet } from '../../lib/styles';

export interface ButtonProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    AnimationProps {
  color?: string;
  scale?: number;
  hoverColor?: string;
  activeColor?: string;
}

const Container = styled(motion.button)<ButtonProps>`
  background-color: ${themeGet('palette.primary')};
  color: white;
  padding: 5px;
  margin: 0.5em;
  border: none;
  border-radius: ${themeGet('padding[1]')}px;
  font-family: ${themeGet('fontFamily')};

  &:focus {
    outline: none;
  }
  ${color}
  ${layout}
  ${space}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  activeColor,
  scale,
  hoverColor,
  ...props
}) => (
  <Container
    display="flex"
    alignItems="center"
    justifyContent="center"
    whileTap={{ scale: scale || 0.8, backgroundColor: activeColor }}
    whileHover={{ backgroundColor: hoverColor }}
    {...props}
  >
    {children}
  </Container>
);
