import React from 'react';
import styled, { css } from 'styled-components';
import { Portal } from 'react-portal';
import { AnimatePresence, Variants } from 'framer-motion';
import { Box, BoxProps } from '../box';
import { Backdrop } from '../backdrop';
import { themeGet } from '../../lib/styles';

type Dock = 'left' | 'right';

interface DrawerProps {
  dock: Dock;
  open: boolean;
  handleClose: () => void;
  width?: number;
  enterDuration?: number;
  exitDuration?: number;
  backdrop?: boolean;
  backdropColor?: string;
}

type ContainerProps = Pick<DrawerProps, 'dock' | 'width'>;

const Container = styled(Box)<ContainerProps>`
  ${p => css`
    box-shadow: ${// @ts-ignore
    p.boxShadow || `${p.dock === 'left' ? '' : '-'}4px 0px 3px rgba(0, 0, 0, 0.5)`};
    background-color: ${// @ts-ignore
    p.backgroundColor || p.bg || themeGet('colors.indigo')};
    height: ${p.height || '100vh'};
  `}
  position: absolute;
  ${p => (p.dock === 'left' ? 'left: 0' : 'right: 0')};
  width: ${p => p.width}px;
`;

const BackdropVariants: Variants = {
  mounted: ({ enterDuration }) => ({
    opacity: 1,
    transition: {
      duration: enterDuration,
    },
  }),
  unmounted: ({ exitDuration }) => ({
    opacity: 0,
    transition: {
      duration: exitDuration,
    },
  }),
};

const DrawerVariants: Variants = {
  mounted: ({ enterDuration }) => ({
    x: 0,
    transition: {
      duration: enterDuration,
    },
  }),
  unmounted: ({ factor, width, exitDuration }) => ({
    x: factor * width,
    transition: {
      duration: exitDuration,
    },
  }),
};

const DEFAULT_DRAWER_WIDTH = 250;
const DEFAULT_DRAWER_ENTER_DURATION = 0.8;
const DEFAULT_DRAWER_EXIT_DURATION = 0.5;

export const Drawer: React.FC<DrawerProps & BoxProps> = ({
  dock,
  open,
  children,
  width = DEFAULT_DRAWER_WIDTH,
  exitDuration = DEFAULT_DRAWER_EXIT_DURATION,
  enterDuration = DEFAULT_DRAWER_ENTER_DURATION,
  handleClose,
  backdrop = true,
  backdropColor,
  ...props
}) => {
  const factor = dock === 'right' ? 1 : -1;
  const custom = {
    width,
    factor,
    enterDuration,
    exitDuration,
  };

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            {backdrop && (
              <Backdrop
                variants={BackdropVariants}
                animate="mounted"
                exit="unmounted"
                custom={{ enterDuration, exitDuration }}
                color={backdropColor}
                onClick={handleClose}
              />
            )}
            <Container
              dock={dock}
              width={width}
              initial="unmounted"
              animate="mounted"
              exit="unmounted"
              variants={DrawerVariants}
              custom={custom}
              {...props}
            >
              {children}
            </Container>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};
