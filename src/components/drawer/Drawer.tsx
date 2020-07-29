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
import { Transition } from 'react-transition-group';
import { slideRight } from '@src/lib/styles/transitions';

type Dock = "left" | "right";

interface ContainerProps
  extends
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  BackgroundColorProps
{
  dock: Dock;
  width?: number;
  style?: any;
};

interface DrawerProps extends ContainerProps {
  open: boolean;
};

const Container = styled.div<ContainerProps>`
  ${backgroundColor}
  ${color}
  ${layout}
  ${space}
  ${background}
  ${border}
  position: absolute;
  ${p => p.dock === "left" ? 'left: 0' : 'right: 0'};
  height: 100vh;
  transition: all 300ms linear;
  width: ${p => p.width}px;
`;

export const Drawer: React.FC<DrawerProps> = ({ dock, open, children, width, style, ...props }) => {
  const TransitionStyles = slideRight({ elemWidth: width! });

  return (
    <Transition in={open} timeout={100} unmountOnExit>
      {state => (
        <Container 
          dock={dock} 
          color="black" 
          bg="white"
          width={width}
          borderRightColor="black"
          borderRightWidth={3}
          borderRightStyle="solid"
          borderBottomRightRadius={5}
          borderTopRightRadius={5}
          style={{ ...TransitionStyles[state], ...style }}
          {...props}>
          {children}
        </Container>
      )}
    </Transition>
  )
};

Drawer.defaultProps = {
  width: 250,
} as Partial<DrawerProps>;



