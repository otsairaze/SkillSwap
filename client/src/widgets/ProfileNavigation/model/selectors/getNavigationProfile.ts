import type { ProfileNavigationTypes } from '../types/getNavigationProfile';

export const getNavigationProfile = (): ProfileNavigationTypes[] => {
  return [
    {
      href: '/profile',
      title: 'Profile Overview',
    },
    {
      title: 'Skills & Goals',
      children: [
        {
          href: '/profile/skills',
          title: 'My Skills',
        },
        {
          href: '/profile/learning',
          title: 'Learning Goals',
        },
        {
          href: '/profile/availability',
          title: 'Availability',
        },
      ],
    },
    {
      title: 'Exchanges',
      children: [
        {
          href: '/profile/exchanges/active',
          title: 'Active Exchanges',
        },
        {
          href: '/profile/exchanges/completed',
          title: 'Completed',
        },
        {
          href: '/profile/exchanges/requests',
          title: 'Exchange Requests',
        },
      ],
    },
    {
      title: 'Reputation',

      children: [
        {
          href: '/profile/reviews/received',
          title: 'Reviews Received',
        },
        {
          href: '/profile/reviews/given',
          title: 'Reviews Given',
        },
        {
          href: '/profile/achievements',
          title: 'Achievements',
        },
      ],
    },
    {
      title: 'Account',
      children: [
        {
          href: '/profile/settings',
          title: 'Settings',
        },
        {
          href: '/profile/notifications',
          title: 'Notifications',
        },
        {
          href: '/profile/privacy',
          title: 'Privacy & Security',
        },
      ],
    },
    {
      href: '/profile/statistics',
      title: 'Statistics',
    },
    {
      href: '/profile/help',
      title: 'Help & Support',
    },
  ];
};
