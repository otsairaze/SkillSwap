'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { cn } from '@/shared/lib/utils';
import { getNavigationProfile } from '../model/selectors/getNavigationProfile';

export const ProfileNavigationList = () => {
  const list = getNavigationProfile();

  const navigationItems = list.map((item) => ({
    ...item,
    hasChildren: Array.isArray(item.children) && item.children.length > 0,
  }));

  return (
    <Accordion type='single' collapsible className='max-w-lg'>
      {navigationItems.map((item) => {
        if (!item.hasChildren && item.href) {
          return (
            <Link key={item.href} href={item.href} className={cn('flex py-3 rounded-lg')}>
              {item.title}
            </Link>
          );
        }

        return (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger className='hover:no-underline font-medium'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col gap-2 pl-2'>
                {item.children?.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href as string}
                    className={cn(
                      'py-2 px-3 rounded hover:bg-accent/50',
                      'transition-colors text-sm',
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
