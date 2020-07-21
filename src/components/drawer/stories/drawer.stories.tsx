import React from 'react';
import { Drawer } from '../';

export default { title: 'Drawer' };

export const leftDocked = () => (
  <Drawer dock="left" bg="black" width={250} color="white">Hello</Drawer>
);