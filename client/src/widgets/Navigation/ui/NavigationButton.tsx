'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { LoginForm, RegisterForm } from '@/features/AuthForm';

type AuthModal = 'login' | 'register' | null;

export const NavigationButton = () => {
  const [modalType, setModalType] = useState<AuthModal>(null);

  return (
    <>
      <div className='flex gap-4'>
        <Button variant='default' size='lg' onClick={() => setModalType('login')}>
          Login
        </Button>

        <Button variant='default' size='lg' onClick={() => setModalType('register')}>
          Register
        </Button>
      </div>

      {modalType === 'register' && (
        <RegisterForm open={modalType === 'register'} setOpen={() => setModalType(null)} />
      )}

      {modalType === 'login' && (
        <LoginForm open={modalType === 'login'} setOpen={() => setModalType(null)} />
      )}
    </>
  );
};
