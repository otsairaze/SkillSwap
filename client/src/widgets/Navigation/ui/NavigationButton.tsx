import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { RegisterForm } from '@/features/AuthForm/ui/RegisterForm';

export const NavigationButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant='default' size='lg' onClick={() => setOpen(true)}>
        Login
      </Button>

      {open && <RegisterForm open={open} setOpen={setOpen} />}
    </>
  );
};
