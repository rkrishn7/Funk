import React from 'react';
import styled from 'styled-components';
import { 
  color,
  space,
  layout,
  background,
  border,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
} from 'styled-system';

type Dock = "left" | "right";

interface DrawerProps
  extends
  ColorProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps 
{
  dock: Dock;
  visible?: boolean;
  closed?: boolean;
};

export const Drawer = styled.div<DrawerProps>`
  ${color}
  ${layout}
  ${space}
  ${background}
  ${border}
  position: absolute;
  ${p => p.dock === "left" ? 'left: 0' : 'right: 0'};
  height: 100vh;
`;