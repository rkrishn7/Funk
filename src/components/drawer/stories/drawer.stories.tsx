import React, { useState } from 'react';
import { Drawer } from '@src/components/drawer';
import { Button } from '@src/components/button';

export default { title: 'Drawer' };

export const LeftDocked: React.FC<any> = () => {
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
