import styled from 'styled-components';
import { 
  color,
  space,
  layout,
  flex,
  background,
  border,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
} from 'styled-system';

interface BoxProps
  extends
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps {};

export const Box = styled.div<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${flex}
  ${background}
  ${border}
  display: flex;
`;