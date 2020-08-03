import React from 'react';
import { Box, BoxProps } from '../box';

interface StrobeProps {
  colors: string[];
  duration: number;
}

export const Strobe: React.FC<StrobeProps & BoxProps> = ({
  children,
  colors,
  duration,
  ...props
}) => {
  return (
    <Box
      animate={{ background: colors }}
      transition={{
        duration,
        yoyo: Infinity,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
