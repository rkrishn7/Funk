import React from 'react';
import { motion, AnimationProps, HoverHandlers } from 'framer-motion';
import { typography, color, space, SpaceProps, TypographyProps, ColorProps } from 'styled-system';
import styled from 'styled-components';
import { Icon, IconProps } from '../icon';
import { Box, BoxProps } from '../box';
import { themeGet } from '../../lib/styles/theme';

type IconPosition = 'left' | 'right' | 'bottom' | 'top';

export interface TextProps
  extends TypographyProps,
    SpaceProps,
    ColorProps,
    AnimationProps,
    HoverHandlers {
  color?:
    | string
    | (string & (string | number | symbol | null)[])
    | (string & {
        [x: string]: string | number | symbol | undefined;
        [x: number]: string | number | symbol | undefined;
      })
    | undefined; // Typing issue
  icon?: IconProps['name'];
  iconPosition?: IconPosition;
  iconSize?: number;
  iconColor?: string;
  children: string;
}

export const TextContainer = styled(motion.p)<TextProps>`
  font-family: ${themeGet('fontFamily')};
  ${typography}
  ${space}
  ${color}
`;

export const Text: React.FC<TextProps> = ({
  icon,
  iconPosition = 'left',
  iconSize = 24,
  iconColor = 'white',
  children,
  ...props
}) => {
  const direction = iconPosition === 'left' || iconPosition === 'right' ? 'row' : 'column';
  const reverse = iconPosition === 'right' || iconPosition === 'bottom';

  const flexDirection = reverse ? `${direction}-reverse` : direction;

  const defaultIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
  };

  return !icon ? (
    <TextContainer {...props}>{children}</TextContainer>
  ) : (
    <Box
      flexDirection={flexDirection as BoxProps['flexDirection']}
      justifyContent="center"
      alignItems="center"
    >
      <Icon name={icon} size={iconSize} color={iconColor} style={defaultIconStyle} />
      <TextContainer {...props}>{children}</TextContainer>
    </Box>
  );
};
