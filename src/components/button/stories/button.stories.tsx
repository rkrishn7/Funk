import React from 'react';
import { Button } from '../Button';
import { defaultTheme as theme } from '../../../lib/styles/theme';

export default { title: 'Button' };

export const plainOne = () => (
  <Button
    bg={theme.palette.primary}
    activeColor={theme.palette.muted}
    hoverColor={theme.palette.secondary}
    style={{ position: 'absolute', left: 30 }}
  >
    Hello
  </Button>
);
