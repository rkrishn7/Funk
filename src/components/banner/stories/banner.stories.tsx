import React from 'react';
import { Banner } from '@src/components/banner';
import { Box } from '@src/components/box';
import { Strobe } from '@src/components/strobe';
import { defaultTheme as theme } from '@src/lib/styles/theme';
import { values, omit } from 'lodash';
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
    background={theme.colors.purple}
    opacity={0.5}
    colors={values(omit(theme.colors, 'white'))}
    duration={1}
  >
    <Banner
      title="react funk"
      itemProps={{
        fontFamily: 'Comfortaa',
        padding: [10, 20, 30],
        color: 'white',
      }}
    />
  </Strobe>
);
