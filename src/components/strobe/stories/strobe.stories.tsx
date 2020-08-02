import React from 'react';
import { Strobe } from '@src/components/strobe';

export default { title: 'Strobe' };

export const rgb = () => (
  <Strobe
    alignItems="center"
    justifyContent="center"
    width="100vw"
    height="100vh"
    background="#FF0000"
    colors={['#FF0000', '#00FF00', '#0000FF']}
    duration={1}
  />
);
