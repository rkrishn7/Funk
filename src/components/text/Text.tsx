import { motion, AnimationProps } from 'framer-motion';
import { typography, color, space, SpaceProps, TypographyProps, ColorProps } from 'styled-system';
import styled from 'styled-components';

export interface TextProps extends TypographyProps, SpaceProps, ColorProps, AnimationProps {
  color?:
    | string
    | (string & (string | number | symbol | null)[])
    | (string & {
        [x: string]: string | number | symbol | undefined;
        [x: number]: string | number | symbol | undefined;
      })
    | undefined; // Typing issue
}

export const Text = styled(motion.p)<TextProps>`
  ${typography}
  ${space}
  ${color}
`;
