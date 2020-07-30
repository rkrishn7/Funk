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
import { Slide } from '@src/components/transitions/Slide';
import { themeGet } from '@src/lib/utils';

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
  ${p => p.dock === "left" ? 'left: 0' : 'right: 0'};
  height: 100vh;
  width: ${p => p.width}px;
`;

export const Drawer: React.FC<DrawerProps> = ({ dock, open, children, width, ...props }) => {
  return (
    <Slide in="up" out="up" show={open} duration={300}>
      <Container 
        dock={dock} 
        color="black"
        width={width}
        {...props}>
        {children}
      </Container>
    </Slide>
  )
};

Drawer.defaultProps = {
  width: 250,
} as Partial<DrawerProps>;



