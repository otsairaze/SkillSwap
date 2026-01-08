'use client';

import { memo } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useAuthStore } from '@/shared/store/AuthStore';
import { NavigationAuthList } from './NavigationAuthList';
import { NavigationList } from './NavigationList';
import { NavigationButton } from './NavigationButton';

export const Navigation = memo(() => {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className={'flex items-center justify-between'}>
      <div>
        <p className={'text-[40px] font-bold'}>SkillSwap</p>
      </div>
      <div className={'flex gap-[15px] items-center'}>
        <ThemeSwitcher />
        {isAuthenticated ? (
          <NavigationAuthList />
        ) : (
          <>
            <NavigationList />
            <NavigationButton />
          </>
        )}
      </div>
    </nav>
  );
});
