'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { SelectSkill } from '@/features/SelectSkill';
import styles from './ProfileSkillsPage.module.css';

export const ProfileSkillsPage = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div>
      <div className={'flex justify-between'}>
        <h2 className={styles.title}>My skill</h2>
        <Button onClick={() => setIsOpen(true)}>Add new skill</Button>

        <SelectSkill open={open} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
