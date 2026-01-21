'use client';

import { memo } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ProfileNavigationList } from '../ui/ProfileNavigationList';

export const ProfileNavigation = memo(() => {
  return (
    <>
      <nav className={'flex items-center justify-between'}>
        <div>
          <p className={'text-[40px] font-bold'}>SkillSwap</p>
        </div>
        <div className={'flex gap-[15px] items-center'}></div>
      </nav>
      <ProfileNavigationList />
      <ThemeSwitcher />
    </>
  );
});
