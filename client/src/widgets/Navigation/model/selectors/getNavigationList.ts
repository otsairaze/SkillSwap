import { NavigationList } from '@/src/widgets/Navigation/model/types/navigationList';
import { Handshake, InfoIcon } from 'lucide-react';

export const getNavigationList = (): NavigationList[] => {
  return [
    {
      href: '/info',
      icon: InfoIcon,
      title: 'Info',
    },
    {
      href: '/about',
      icon: Handshake,
      title: 'About',
    },
  ];
};
