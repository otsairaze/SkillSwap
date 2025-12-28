'use client';

import { memo } from 'react';
import { NavigationList } from '@/widgets/Navigation/ui/NavigationList';
import { NavigationButton } from '@/widgets/Navigation/ui/NavigationButton';

interface NavigationProps {
  onOpen?: () => void;
}

export const Navigation = memo((props: NavigationProps) => {
  const {} = props;

  return (
    <div className={'flex items-center justify-between'}>
      <div>
        <p className={'text-base'}>SKillSwap</p>
      </div>
      <div className={'flex gap-[15px]'}>
        <NavigationList />
        <NavigationButton />
      </div>
    </div>
  );
});
