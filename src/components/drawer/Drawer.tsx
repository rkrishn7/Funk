import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  background,
  backgroundColor,
  border,
  BackgroundColorProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
} from 'styled-system';
import { themeGet } from '@src/lib/utils';
import { motion, AnimatePresence, AnimationProps, Variants } from 'framer-motion';

type Dock = 'left' | 'right';

interface ContainerProps
  extends SpaceProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    BackgroundColorProps,
    AnimationProps {
  dock: Dock;
  width?: number;
  style?: any;
}

interface DrawerProps extends ContainerProps {
  open: boolean;
  enterDuration?: number;
  exitDuration?: number;
}

const Container = styled(motion.div)<ContainerProps>`
  box-shadow: 4px 0px 3px rgba(0, 0, 0, 0.5);
  background-color: ${themeGet('colors.lightCoral')};
  border-right: 1px solid ${themeGet('colors.lightCoral')};
  ${backgroundColor}
  ${color}
  ${layout}
  ${space}
  ${background}
  ${border}
  position: absolute;
  ${p => (p.dock === 'left' ? 'left: 0' : 'right: 0')};
  height: 100vh;
  width: ${p => p.width}px;
`;

interface DrawerVariantProps {
  width: number | string;
  factor: 1 | -1;
  enterDuration: number;
  exitDuration: number;
}

const createDrawerVariants: (p: DrawerVariantProps) => Variants = ({
  width,
  factor,
  enterDuration,
  exitDuration,
}: any) => ({
  visible: {
    x: '0vw',
    transition: {
      duration: enterDuration,
    },
  },
  invisible: {
    x: factor * width,
    transition: {
      duration: exitDuration,
    },
  },
});

const DEFAULT_DRAWER_WIDTH = 250;
const DEFAULT_DRAWER_ENTER_DURATION = 1;
const DEFAULT_DRAWER_EXIT_DURATION = 0.5;

export const Drawer: React.FC<DrawerProps> = ({
  dock,
  open,
  children,
  width = DEFAULT_DRAWER_WIDTH,
  exitDuration = DEFAULT_DRAWER_EXIT_DURATION,
  enterDuration = DEFAULT_DRAWER_ENTER_DURATION,
  ...props
}) => {
  const factor = dock === 'right' ? 1 : -1;
  const variants = createDrawerVariants({ width, factor, enterDuration, exitDuration });

  return (
    <AnimatePresence>
      {open && (
        <Container
          dock={dock}
          color="black"
          width={width}
          initial="invisible"
          animate="visible"
          exit="invisible"
          variants={variants}
          whileTap={{ scale: 1.2 }}
          {...props}
        >
          {children}
        </Container>
      )}
    </AnimatePresence>
  );
};
