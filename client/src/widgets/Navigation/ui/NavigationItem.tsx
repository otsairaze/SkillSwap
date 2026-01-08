import { memo } from 'react';
import { cn } from '@/shared/lib/utils';
import type { NavigationListTypes } from '@/widgets/Navigation';

interface NavigationItemProps extends NavigationListTypes {
  className?: string;
}

export const NavigationItem = memo((props: NavigationItemProps) => {
  const { title, className, href } = props;

  return (
    <a href={href}>
      <li className={cn(className, 'flex gap-[5px] items-center')}>
        <span>{title}</span>
      </li>
    </a>
  );
});
