import { memo } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

interface RegisterFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const RegisterForm = memo((props: RegisterFormProps) => {
  const { open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>

          <div className='flex flex-col gap-4 py-4'>
            <Input type='email' placeholder='Email' />
            <Input type='text' placeholder='Login' />
            <Input type='password' placeholder='Password' />
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
