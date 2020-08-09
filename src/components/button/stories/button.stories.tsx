import React from 'react';
import { Button } from '@src/components/button';
import { defaultTheme as theme } from '@src/lib/styles/theme';

export default { title: 'Button' };

export const plainOne = () => (
  <Button
    bg={theme.palette.primary}
    activeColor={theme.palette.muted}
    style={{ position: 'absolute', left: 30 }}
  >
    Hello
  </Button>
);
