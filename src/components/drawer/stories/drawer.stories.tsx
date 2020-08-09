import React, { useState } from 'react';
import { Drawer } from '../Drawer';
import { Button } from '../../button';

export default { title: 'Drawer' };

export const LeftDocked: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} dock="left" height="100vh" handleClose={() => setOpen(!open)} />
      <Button
        style={{ position: 'absolute', bottom: 10, right: 10 }}
        onClick={() => setOpen(!open)}
      >
        open
      </Button>
    </div>
  );
};

export const RightDocked: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} dock="right" handleClose={() => setOpen(!open)} />
      <Button style={{ position: 'absolute', bottom: 10, left: 10 }} onClick={() => setOpen(!open)}>
        open
      </Button>
    </div>
  );
};
