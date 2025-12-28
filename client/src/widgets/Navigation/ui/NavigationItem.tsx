import { memo } from 'react';
import { NavigationList } from '@/widgets/Navigation/model/types/navigationList';

interface NavigationItemProps extends NavigationList {
  className?: string;
}

export const NavigationItem = memo((props: NavigationItemProps) => {
  const { title, icon: Icon, className } = props;

  return (
    <li className={'flex gap-[5px] items-center'}>
      <Icon className='w-4 h-4' />
      <span>{title}</span>
    </li>
  );
});
