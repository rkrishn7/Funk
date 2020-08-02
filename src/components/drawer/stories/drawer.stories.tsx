import React, { useState } from 'react';
import { Drawer } from '@src/components/drawer';
import { Button } from '@src/components/button';

export default { title: 'Drawer' };

export const LeftDocked: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} dock="left" />
      <Button
        style={{ position: 'absolute', bottom: 10, right: 10 }}
        onClick={() => setOpen(!open)}
      >
        open/close
      </Button>
    </div>
  );
};

export const RightDocked: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} dock="right" />
      <Button style={{ position: 'absolute', bottom: 10, left: 10 }} onClick={() => setOpen(!open)}>
        open/close
      </Button>
    </div>
  );
};
