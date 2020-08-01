import React from 'react';
import { Slide } from '@src/components/transitions/Slide';
import { Button } from '@src/components/button';

export default { title: 'Button' };

export const plainOne = () => (
  <Slide in="left" out="right" show duration={500}>
    <Button bg="black" color="white" style={{ position: 'absolute', left: 0 }}>
      Hello
    </Button>
    <Button color="white">Hello</Button>
  </Slide>
);
