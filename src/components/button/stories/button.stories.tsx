import React from 'react';
import { Button } from '../';
import { Slide } from '@src/components/transitions/Slide'; 

export default { title: 'Button' };

export const plainOne = () => (
  <Slide in="left" out="right" show={true} duration={500}>
    <Button bg="black" color="white" style={{ position: 'absolute', left: 0 }}>Hello</Button>
    <Button color="white" style={{ position: 'absolute', right: 0, bottom: 0, backgroundColor: 'purple' }}>Hello</Button>
  </Slide>
);