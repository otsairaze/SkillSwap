import { memo } from 'react';
import { cn } from '@/shared/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = memo((props: ContainerProps) => {
  const { children, className } = props;

  return <div className={cn(className, 'max-w-[1200px] m-auto p-5')}>{children}</div>;
});
