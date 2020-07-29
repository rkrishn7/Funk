import React, { useState } from 'react';
import { Drawer } from '../';
import { Button } from '../../button';

export default { title: 'Drawer' };

export const leftDocked = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} dock="left" />
      <Button style={{ position: 'absolute', bottom: 10, right: 10 }} onClick={() => setOpen(!open)}>open/close</Button>
    </div>
  );
};