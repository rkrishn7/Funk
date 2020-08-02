import React from 'react';
import { Banner } from '@src/components/banner';
import { Box } from '@src/components/box';
import { Strobe } from '@src/components/strobe';
import './styles.css';

export default { title: 'Banner' };

export const NoBackground = () => (
  <Box alignItems="center" justifyContent="center" width="100vw" height="100vh">
    <Banner
      title="normal"
      letterStyle={{ fontFamily: 'Comfortaa', fontSize: '80px', padding: '30px', color: 'black' }}
    />
  </Box>
);

export const StrobeBackground = () => (
  <Strobe
    alignItems="center"
    justifyContent="center"
    width="100vw"
    height="100vh"
    background="#0CF"
    opacity={0.5}
    colors={['#F05', '#85F', '#0CF']}
    duration={2}
  >
    <Banner
      title="react funk"
      letterStyle={{ fontFamily: 'Comfortaa', fontSize: '80px', padding: '30px', color: 'white' }}
    />
  </Strobe>
);
