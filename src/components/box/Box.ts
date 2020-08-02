import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
} from 'styled-system';
import { motion, AnimationProps } from 'framer-motion';

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    AnimationProps {
  color?:
    | string
    | (string & (string | number | symbol | null)[])
    | (string & {
        [x: string]: string | number | symbol | undefined;
        [x: number]: string | number | symbol | undefined;
      })
    | undefined; // Typing issue
}

export const Box = styled(motion.div)<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${background}
  ${border}
  display: flex;
`;
