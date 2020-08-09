import styled from 'styled-components';
import { Box } from '../box';

interface BackdropProps {
  color?: string;
  children?: never;
}

export const Backdrop = styled(Box)<BackdropProps>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${p => p.color || 'rgba(0, 0, 0, 0.5)'};
  opacity: 0;
`;
