import React from 'react';
import { AnimationProps, Variants } from 'framer-motion';
import styled from 'styled-components';
import { Box } from '../box';
import { Text, TextProps } from '../text';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: -15,
    opacity: 1,
    transition: {
      duration: 2,
      type: 'tween',
      from: 15,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    transition: {
      duration: 1,
    },
  },
};

interface BannerProps extends AnimationProps {
  title: string;
  letterStyle?: React.CSSProperties;
  children?: never;
  itemProps?: TextProps;
}

const BannerItem = styled(Text)`
  cursor: pointer;
`;

export const Banner: React.FC<BannerProps> = ({ title, letterStyle, itemProps, ...props }) => {
  return (
    <Box flexDirection="row" variants={container} initial="hidden" animate="show" {...props}>
      {title.split('').map(c => {
        return (
          <BannerItem fontSize={[30, 50, 70]} variants={item} whileHover="hover" {...itemProps}>
            {c}
          </BannerItem>
        );
      })}
    </Box>
  );
};
