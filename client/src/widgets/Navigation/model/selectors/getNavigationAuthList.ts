import type { NavigationListTypes } from '@/widgets/Navigation';

export const getNavigationAuthList = (): NavigationListTypes[] => {
  return [
    {
      href: '/blog',
      title: 'Blog',
    },
    {
      href: '/about',
      title: 'About us',
    },
    {
      href: '/github',
      title: 'Github',
    },
    {
      href: '/profile',
      title: 'Profile',
    },
  ];
};
